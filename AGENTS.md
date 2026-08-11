<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, but it invokes Vite through `vp dev` and `vp build`.

## Vite+ Workflow

`vp` is a global binary that handles the full development lifecycle. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

### Start

- create - Create a new project from a template
- migrate - Migrate an existing project to Vite+
- config - Configure hooks and agent integration
- staged - Run linters on staged files
- install (`i`) - Install dependencies
- env - Manage Node.js versions

### Develop

- dev - Run the development server
- check - Run format, lint, and TypeScript type checks
- lint - Lint code
- fmt - Format code
- test - Run tests

### Execute

- run - Run monorepo tasks
- exec - Execute a command from local `node_modules/.bin`
- dlx - Execute a package binary without installing it as a dependency
- cache - Manage the task cache

### Build

- build - Build for production
- pack - Build libraries
- preview - Preview production build

### Manage Dependencies

Vite+ automatically detects and wraps the underlying package manager such as pnpm, npm, or Yarn through the `packageManager` field in `package.json` or package manager-specific lockfiles.

- add - Add packages to dependencies
- remove (`rm`, `un`, `uninstall`) - Remove packages from dependencies
- update (`up`) - Update packages to latest versions
- dedupe - Deduplicate dependencies
- outdated - Check for outdated packages
- list (`ls`) - List installed packages
- why (`explain`) - Show why a package is installed
- info (`view`, `show`) - View package information from the registry
- link (`ln`) / unlink - Manage local package links
- pm - Forward a command to the package manager

### Maintain

- upgrade - Update `vp` itself to the latest version

These commands map to their corresponding tools. For example, `vp dev --port 3000` runs Vite's dev server and works the same as Vite. `vp test` runs JavaScript tests through the bundled Vitest. The version of all tools can be checked using `vp --version`. This is useful when researching documentation, features, and bugs.

## Common Pitfalls

- **Using the package manager directly:** Do not use pnpm, npm, or Yarn directly. Vite+ can handle all package manager operations.
- **Always use Vite commands to run tools:** Don't attempt to run `vp vitest` or `vp oxlint`. They do not exist. Use `vp test` and `vp lint` instead.
- **Running scripts:** Vite+ built-in commands (`vp dev`, `vp build`, `vp test`, etc.) always run the Vite+ built-in tool, not any `package.json` script of the same name. To run a custom script that shares a name with a built-in command, use `vp run <script>`. For example, if you have a custom `dev` script that runs multiple services concurrently, run it with `vp run dev`, not `vp dev` (which always starts Vite's dev server).
- **Do not install Vitest, Oxlint, Oxfmt, or tsdown directly:** Vite+ wraps these tools. They must not be installed directly. You cannot upgrade these tools by installing their latest versions. Always use Vite+ commands.
- **Use Vite+ wrappers for one-off binaries:** Use `vp dlx` instead of package-manager-specific `dlx`/`npx` commands.
- **Import JavaScript modules from `vite-plus`:** Instead of importing from `vite` or `vitest`, all modules should be imported from the project's `vite-plus` dependency. For example, `import { defineConfig } from 'vite-plus';` or `import { expect, test, vi } from 'vite-plus/test';`. You must not install `vitest` to import test utilities.
- **Type-Aware Linting:** There is no need to install `oxlint-tsgolint`, `vp lint --type-aware` works out of the box.

## CI Integration

For GitHub Actions, consider using [`voidzero-dev/setup-vp`](https://github.com/voidzero-dev/setup-vp) to replace separate `actions/setup-node`, package-manager setup, cache, and install steps with a single action.

```yaml
- uses: voidzero-dev/setup-vp@v1
  with:
    cache: true
- run: vp check
- run: vp test
```

## Review Checklist for Agents

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to validate changes.
<!--VITE PLUS END-->

## Authoring JavaScript question content (`questions/**`)

These guidelines apply when creating a new JavaScript question or substantially editing an existing question. Match the current repository structure and optimize for the question experience on GitHub, in the generated README, and in the GreatFrontEnd quiz renderer.

Treat these rules as normative for new questions and substantial rewrites. Preserve good legacy content that is outside the scope of the requested change; do not rewrite an answer solely for stylistic uniformity.

### Folder and source contract

Each question lives in its own slug directory:

```text
questions/<slug>/
  metadata.json
  en-US.mdx
  <locale>.mdx (localized content, when available)
  en-US.langnostic.json (generated translation state, when available)
```

- Treat `en-US.mdx` as the source locale.
- Use the translation workflow for localized content. Do not manually edit `*.langnostic.json` files.
- Keep the directory name, `metadata.json` slug, internal links, and asset paths consistent.
- Register each question slug in the appropriate category and position in `data/questions.json`.
- Follow the live metadata schema. Use `access`, not the legacy `premium` field, and use `basic`, `intermediate`, or `advanced` for `level`.
- Treat `featured` and `ranking` as the controls for inclusion and ordering in the generated top-questions list.
- Do not treat `published: true` as permission to leave incomplete or placeholder content.
- Do not edit generated question content in `README.md` directly. Edit the source question and regenerate the README.

### Answer structure

Every `en-US.mdx` answer should use this outer structure:

1. Frontmatter containing `title`.
2. `## TL;DR` immediately after frontmatter.
3. A horizontal-rule delimiter (`---`) after the TL;DR.
4. A flexible detailed answer organized around the question.
5. `## Further reading` as the final section when meaningful references exist.

The TL;DR is extracted into the repository README, so it must stand on its own outside the full article:

- Answer the question directly before adding nuance.
- Keep it concise and useful as an interview response.
- Do not use headings or callouts within the TL;DR.
- Do not depend on definitions, examples, or links that appear only later in the article.
- Keep the terminating `---` delimiter in place so README generation can find the section.

The detailed answer does not need one universal heading template. Use only the sections the topic needs, such as how a language feature or API works, when to use it, tradeoffs, pitfalls, or a focused example. Explain the core answer before historical background or advanced edge cases.

Use `## Further reading` only for meaningful references. Prefer primary sources, especially the ECMAScript and WHATWG standards, TC39 proposal repositories, and official runtime or browser documentation. Do not leave an empty section.

### Writing style and tone

- Write for interview-prep learners and practicing JavaScript engineers, not repository maintainers.
- Teach the answer a candidate should give before expanding into deeper reference material.
- Use a concise, direct, practical tone. Be decisive without becoming academic or hard to follow.
- Use sentence case for headings and bullet points.
- Keep prose scannable with short paragraphs, purposeful bullets, and tables only when they add clarity.
- Prefer explicit conditions, tradeoffs, and explanations of why over broad theory dumps or generic "it depends" phrasing.
- Use precise terminology and consistent names for language semantics, APIs, runtime concepts, and data structures.
- State assumptions, caveats, environment boundaries, and exclusions explicitly.
- Avoid first-person voice, hype, rhetorical filler, unresolved brainstorming, and self-referential article language.
- Replace vague or promotional phrases such as "enhance user experience", "foster", "seamless", and "dynamic and responsive" with the concrete behavior, benefit, or cost.
- Avoid generic textbook openers when a direct statement answers the question more clearly.
- Make section introductions useful. They should orient the reader, explain why the section matters, or preview the distinction being discussed rather than repeat the heading.

### JavaScript-specific technical accuracy

- Distinguish ECMAScript language semantics from browser APIs, the DOM, Node.js APIs, frameworks, bundlers, and transpilers.
- Name the relevant execution context when behavior differs between classic scripts and ES modules, strict and sloppy mode, browsers and Node.js, or main threads and workers.
- Verify version-sensitive and compatibility claims against primary sources. Identify whether a feature is standardized, proposed, experimental, legacy, or deprecated.
- Use precise distinctions such as declaration versus initialization, own versus inherited properties, tasks versus microtasks, and resolved versus fulfilled promises.
- Do not repeat simplified myths such as "hoisting moves declarations", "JavaScript is always single-threaded", or "objects are passed by reference" without immediately explaining the accurate model.
- Prefer current language features and APIs in modern examples. Label legacy syntax or APIs and explain why they remain relevant when they are necessary to answer the question.
- Avoid unqualified performance claims. Explain the actual cost and the conditions under which an optimization helps, or recommend measuring the behavior.
- Keep historical background subordinate to current guidance unless the question explicitly asks about history or internals.

### Code examples

- Keep examples minimal, internally consistent, and directly relevant to the claim they support.
- Use `js` or `ts` fences as appropriate. Use `js live` only when the example is intentionally runnable in the GreatFrontEnd playground.
- State the expected result, observable output, or thrown error when it is not obvious.
- Identify runtime, module, or strict-mode assumptions when they affect the result.
- Include imports when readers need them to identify where an API comes from.
- Do not introduce imaginary APIs, pseudocode that appears runnable, or correctness bugs merely to shorten an example. Label pseudocode explicitly when it is useful.
- Avoid live examples that hang, make unintended network requests, or depend on unavailable runtime globals.
- Do not add a large example when a smaller snippet or precise prose makes the point more clearly.

### Callouts and admonitions

Use GitHub-flavored admonitions for high-value points in the detailed answer. They render on GitHub and in the GreatFrontEnd MDX pipeline.

| Type | Use for |
| --- | --- |
| `[!WARNING]` | Correctness, security, and production footguns, such as unsafe HTML injection, unhandled asynchronous failures, race conditions, and environment-dependent behavior. |
| `[!IMPORTANT]` | Central conceptual distinctions, anti-patterns, and scope boundaries. |
| `[!TIP]` | Actionable defaults and recommendations, such as preferring `const` until reassignment is needed or measuring before optimizing. |
| `[!NOTE]` | Version, runtime, module, specification, and other non-obvious clarifications. |

Use only these four variants. Do not introduce `[!CAUTION]`; use `[!WARNING]` for hazards and `[!IMPORTANT]` for anti-patterns.

Formatting rules:

- Put `> [!TYPE] Short title` on the first line, followed by a quoted blank line and one focused body paragraph.
- Keep the title concise and omit a trailing period.
- Use the body to explain why or when the point matters rather than restating the title.
- Use callouts sparingly. Do not wrap every recommendation or caveat.
- Keep callouts out of the TL;DR; reserve them for the detailed answer.

Example:

```markdown
> [!WARNING] State the runtime before relying on globals
>
> A snippet using `window`, `process`, or module-only syntax behaves differently across environments. Name the target runtime and module mode before drawing conclusions.
```

### Content quality rules

- No `TODO`, `Work-in-progress`, placeholder text, commented-out draft notes, or unfinished examples in ready-quality content.
- No empty `Further reading` sections.
- Every explanatory heading should be followed by framing prose before a table, list, code block, or another heading. `## Further reading` is exempt because it naturally contains a link list.
- Avoid back-to-back explanatory headings.
- Prefer concrete guidance and tradeoffs over encyclopedic background or broad historical surveys.
- Avoid overly time-sensitive claims unless they are central to the answer and phrased with the relevant version or date.
- Cross-link related questions when that reduces duplication, but summarize the local point instead of outsourcing the explanation entirely.
- Verify internal links, code behavior, API status, runtime assumptions, and version-sensitive claims before finishing.
- Preserve good existing structure whenever possible.

### Validation

Run these checks for substantive question changes:

```bash
vp run gen
vp check
git diff --check
```

- Review the generated `README.md` diff after `vp run gen`, especially the extracted TL;DR and question ordering.
- Run `vp test` when test files exist or are added. The repository currently has no test files, so the command otherwise exits with `No test files found`.
- Run the translation workflow only when localized content is intentionally in scope.
- When editing this repository inside a GreatFrontEnd submodule checkout, also follow the parent repository's question-generation checks so the MDX is compiled through the consuming web app.
