import { describe, expect, test } from 'vite-plus/test';
import {
  normalizeTldrForReadme,
  replaceGeneratedSection,
} from './generated-sections';

describe('generated README sections', () => {
  test('preserves replacement-looking authored content literally', () => {
    const source = 'before\n<!-- START -->\nold\n<!-- END -->\nafter';
    const authoredContent = ['$1', '$&', '$`', "$'"].join(' | ');

    expect(
      replaceGeneratedSection(source, 'START', 'END', authoredContent),
    ).toBe(
      `before\n<!-- START -->\n\n${authoredContent}\n\n<!-- END -->\nafter`,
    );
  });

  test('normalizes every root-relative link in a TL;DR', () => {
    expect(normalizeTldrForReadme('[one](/one) and [two](/two)')).toBe(
      '[one](https://www.greatfrontend.com/one) and [two](https://www.greatfrontend.com/two)',
    );
  });

  test('rejects a missing start marker', () => {
    expect(() =>
      replaceGeneratedSection('content', 'START', 'END', 'new content'),
    ).toThrow('Missing generated section marker: <!-- START -->');
  });

  test('rejects a missing end marker', () => {
    expect(() =>
      replaceGeneratedSection(
        '<!-- START -->\ncontent',
        'START',
        'END',
        'new content',
      ),
    ).toThrow('Missing generated section marker: <!-- END -->');
  });
});
