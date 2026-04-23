import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    bracketSameLine: true,
    printWidth: 80,
    proseWrap: 'never',
    singleQuote: true,
    trailingComma: 'all',
    ignorePatterns: ['README.md'],
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
