import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import grayMatter from 'gray-matter';
import { describe, expect, test } from 'vite-plus/test';
import { normalizeTldrForReadme } from './generated-sections';

type QuestionMetadata = Readonly<{
  featured: boolean;
  slug: string;
}>;

type QuestionRecord = Readonly<{
  filePath: string;
  metadata: QuestionMetadata;
  source: string;
  tldr: string;
  title: string;
}>;

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const questionsRoot = path.join(repoRoot, 'questions');

function readQuestionRecords(): Array<QuestionRecord> {
  return fs
    .readdirSync(questionsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const filePath = path.join(questionsRoot, entry.name, 'en-US.mdx');
      const metadataPath = path.join(
        questionsRoot,
        entry.name,
        'metadata.json',
      );
      const source = fs.readFileSync(filePath, 'utf8');
      const frontmatter = grayMatter(source).data as { title?: unknown };
      const metadata = JSON.parse(
        fs.readFileSync(metadataPath, 'utf8'),
      ) as QuestionMetadata;
      const tldrMatch = source.match(/## TL;DR\n\n([\s\S]*?)\n---\n/);

      if (tldrMatch == null) {
        throw new Error(`${filePath} has no extractable TL;DR`);
      }

      return {
        filePath,
        metadata,
        source,
        tldr: tldrMatch[1].trim(),
        title: typeof frontmatter.title === 'string' ? frontmatter.title : '',
      };
    })
    .sort((a, b) => a.metadata.slug.localeCompare(b.metadata.slug));
}

function readCodeFences(
  source: string,
  expectedInfo: string,
): Array<Readonly<{ code: string; line: number }>> {
  const lines = source.split('\n');
  const fences: Array<Readonly<{ code: string; line: number }>> = [];
  let open: { body: Array<string>; info: string; line: number } | null = null;

  for (const [index, line] of lines.entries()) {
    const marker = line.match(/^\s*```(.*)$/);
    if (marker == null) {
      open?.body.push(line);
      continue;
    }

    if (open == null) {
      open = { body: [], info: marker[1].trim(), line: index + 1 };
      continue;
    }

    if (open.info === expectedInfo) {
      fences.push({ code: open.body.join('\n'), line: open.line });
    }
    open = null;
  }

  return fences;
}

function readGeneratedSection(
  readme: string,
  startMarker: string,
  endMarker: string,
): string {
  const start = readme.indexOf(startMarker);
  const end = readme.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) {
    throw new Error(`Missing generated README section: ${startMarker}`);
  }

  return readme.slice(start + startMarker.length, end);
}

function countOccurrences(source: string, value: string): number {
  let count = 0;
  let cursor = 0;

  while (true) {
    const index = source.indexOf(value, cursor);
    if (index < 0) {
      return count;
    }
    count += 1;
    cursor = index + value.length;
  }
}

const questionRecords = readQuestionRecords();

describe('question corpus', () => {
  test('keeps directories, metadata, and the catalog in sync', () => {
    const catalog = JSON.parse(
      fs.readFileSync(path.join(repoRoot, 'data/questions.json'), 'utf8'),
    ) as Record<string, Array<string>>;
    const registeredSlugs = Object.values(catalog).flat();
    const sourceSlugs = questionRecords.map(({ metadata }) => metadata.slug);

    expect(new Set(registeredSlugs).size).toBe(registeredSlugs.length);
    expect(registeredSlugs.slice().sort()).toEqual(sourceSlugs);
    for (const { filePath, metadata } of questionRecords) {
      expect(path.basename(path.dirname(filePath))).toBe(metadata.slug);
    }
  });

  test('keeps ready-quality source structure and rich content valid', () => {
    const problems: Array<string> = [];

    for (const { filePath, source, tldr, title } of questionRecords) {
      const relativePath = path.relative(repoRoot, filePath);
      if (title === '') {
        problems.push(`${relativePath}: missing frontmatter title`);
      }
      if (/\bTODO\b|\bWork-in-progress\b|TODO_REPLACE_[A-Z_]+/i.test(source)) {
        problems.push(`${relativePath}: contains placeholder content`);
      }
      if (/^\s*```javascript\b/m.test(source)) {
        problems.push(`${relativePath}: uses a noncanonical javascript fence`);
      }
      if (/^#{1,6}\s/m.test(tldr) || /^\s*>\s*\[![A-Z]+\]/m.test(tldr)) {
        problems.push(`${relativePath}: TL;DR contains a heading or callout`);
      }
      if (tldr.includes('```mermaid')) {
        problems.push(`${relativePath}: TL;DR contains a Mermaid diagram`);
      }

      const lines = source.split('\n');
      for (const [index, line] of lines.entries()) {
        const callout = line.match(/^\s*>\s*\[!([A-Z]+)\](.*)$/);
        if (callout == null) continue;

        if (!['WARNING', 'IMPORTANT', 'TIP', 'NOTE'].includes(callout[1])) {
          problems.push(`${relativePath}:${index + 1}: unsupported callout`);
        }
        if (callout[2].trim() === '' || /\.\s*$/.test(callout[2])) {
          problems.push(`${relativePath}:${index + 1}: invalid callout title`);
        }
        if (lines[index + 1]?.trim() !== '>') {
          problems.push(
            `${relativePath}:${index + 1}: missing quoted blank line`,
          );
        }
      }

      const mermaidFences = readCodeFences(source, 'mermaid');
      if (mermaidFences.length > 2) {
        problems.push(
          `${relativePath}: contains more than two Mermaid diagrams`,
        );
      }
      for (const { code, line } of mermaidFences) {
        const diagramFrontmatter = code.match(
          /^---\n([\s\S]*?)\n---\n([\s\S]*)$/,
        );
        if (diagramFrontmatter == null) {
          problems.push(
            `${relativePath}:${line}: Mermaid diagram has no frontmatter`,
          );
          continue;
        }

        if (!/^title:\s*\S.+$/m.test(diagramFrontmatter[1])) {
          problems.push(
            `${relativePath}:${line}: Mermaid diagram has no title`,
          );
        }
        if (
          !/^(?:flowchart|graph|sequenceDiagram|stateDiagram-v2)\b/.test(
            diagramFrontmatter[2].trimStart(),
          )
        ) {
          problems.push(
            `${relativePath}:${line}: unsupported Mermaid diagram type`,
          );
        }
      }
    }

    expect(problems).toEqual([]);
  });

  test('keeps live snippets parseable and bounded', () => {
    const problems: Array<string> = [];

    for (const { filePath, source } of questionRecords) {
      const relativePath = path.relative(repoRoot, filePath);
      for (const { code, line } of readCodeFences(source, 'js live')) {
        try {
          new vm.Script(code, { filename: relativePath });
        } catch (error) {
          problems.push(`${relativePath}:${line}: ${String(error)}`);
        }

        if (
          /\bsetInterval\s*\(/.test(code) &&
          !/\bclearInterval\s*\(/.test(code)
        ) {
          problems.push(`${relativePath}:${line}: unbounded live interval`);
        }
      }
    }

    expect(problems).toEqual([]);
  });

  test('keeps every generated README answer synchronized', () => {
    const readme = fs.readFileSync(path.join(repoRoot, 'README.md'), 'utf8');
    const generatedAnswers = [
      readGeneratedSection(
        readme,
        '<!-- QUESTIONS:TOP:START -->',
        '<!-- QUESTIONS:TOP:END -->',
      ),
      readGeneratedSection(
        readme,
        '<!-- QUESTIONS:ALL:START -->',
        '<!-- QUESTIONS:ALL:END -->',
      ),
    ].join('\n');
    const problems: Array<string> = [];

    if (readme.includes('<!-- Update here:')) {
      problems.push('README contains a stale direct-edit marker');
    }

    for (const { metadata, tldr, title } of questionRecords) {
      const expectedBlockCount = metadata.featured ? 2 : 1;
      const expectedContent = normalizeTldrForReadme(tldr).trim();
      const generatedBlockStart = `### ${title}\n\n${expectedContent}\n\n<br>\n`;
      const blockCount = countOccurrences(
        generatedAnswers,
        generatedBlockStart,
      );

      if (blockCount !== expectedBlockCount) {
        problems.push(
          `${metadata.slug}: expected ${expectedBlockCount} README block(s), found ${blockCount}`,
        );
      }
    }

    expect(problems).toEqual([]);
  });
});
