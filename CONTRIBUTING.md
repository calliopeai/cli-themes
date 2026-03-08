# Contributing to @calliopelabs/cli-themes

Thank you for your interest in contributing theme packs to Calliope CLI. This guide covers everything you need to add a new theme or improve an existing one.

## Development Setup

```bash
git clone https://github.com/calliopeai/cli-themes.git
cd cli-themes
npm install
npm run build
```

Verify your changes compile:

```bash
npx tsc --noEmit
```

## Adding a New Theme Pack

### 1. Choose a category

Theme packs are organized into categories under `src/packs/`:

- `gaming/` — Video game inspired themes
- `trek/` — Star Trek universe themes
- `scifi/` — Science fiction film, TV, and literature themes
- `retro/` — Retro computing and nostalgia themes
- `cultural/` — Animation, film, TV, and pop culture themes
- `seasonal/` — Season and occasion themes
- `minimal/` — Clean, understated themes

### 2. Create your theme file

Add a new TypeScript file in the appropriate category directory:

```
src/packs/<category>/my-theme.ts
```

Use kebab-case for the filename. The file should export a `ThemePack` object as the default export.

### 3. ThemePack structure

Every theme pack must conform to the `ThemePack` interface defined in `src/types.ts`. Here is a minimal outline:

```typescript
import type { ThemePack } from '../../types.js';

const pack: ThemePack = {
  name: 'my-theme',
  description: 'A short description of the theme',
  category: 'cultural',  // one of the ThemeCategory values
  tags: ['tag1', 'tag2'],

  skin: {
    name: 'my-theme',
    description: 'Skin description',
    banner: {
      art: ['  Line 1  ', '  Line 2  '],
      tagline: 'Optional tagline',
      style: 'full',
    },
    borders: { style: 'rounded' },
    decorations: {
      promptPrefix: '> ',
      assistantPrefix: '< ',
      toolPrefix: '[',
      toolSuffix: ']',
      separator: '---',
      spinner: 'dots',
    },
    diff: {
      style: 'unified',
      showLineNumbers: true,
      contextLines: 3,
      maxLineWidth: 120,
      wordDiff: false,
      header: 'path',
    },
    density: 'normal',
    responsive: { compact: 60, wide: 120 },
  },

  palette: {
    name: 'my-theme',
    description: 'Palette description',
    colors: {
      primary: '#ffffff',
      secondary: '#cccccc',
      accent: '#00aaff',
      text: '#e0e0e0',
      textDim: '#888888',
      textBold: '#ffffff',
      user: '#00aaff',
      assistant: '#00ff88',
      system: '#888888',
      error: '#ff4444',
      codeKeyword: '#c792ea',
      codeString: '#c3e88d',
      codeNumber: '#f78c6c',
      codeComment: '#546e7a',
      codeFunction: '#82aaff',
      diffAdd: '#00ff88',
      diffRemove: '#ff4444',
      diffContext: '#888888',
      success: '#00ff88',
      warning: '#ffaa00',
      info: '#00aaff',
      border: '#444444',
      background: '#1a1a2e',
      selection: '#333355',
    },
  },

  companions: {
    professional: {
      name: 'Assistant',
      description: 'Professional companion for this theme',
      systemPrompt: 'You are a helpful AI assistant.',
      greeting: 'Hello! How can I help?',
      farewell: 'Goodbye!',
      moods: {
        idle: 'Ready.',
        thinking: 'Thinking...',
        success: 'Done.',
        error: 'Something went wrong.',
        frustrated: 'Let me try a different approach.',
        excited: 'Great progress!',
        focused: 'Working on it...',
      },
    },
    immersive: {
      name: 'Themed Companion',
      description: 'Immersive companion that stays in character',
      systemPrompt: 'You are a themed AI companion. Stay in character.',
      greeting: 'Welcome to the theme!',
      farewell: 'Until next time.',
      moods: {
        idle: 'Awaiting orders.',
        thinking: 'Processing...',
        success: 'Mission complete.',
        error: 'We have a problem.',
        frustrated: 'Recalibrating...',
        excited: 'Excellent!',
        focused: 'Engaged.',
      },
    },
  },
};

export default pack;
```

### 4. Register the pack

Add your theme to the category's `index.ts` file in `src/packs/<category>/index.ts`, then ensure it is included in `src/registry.ts`.

### 5. Build and verify

```bash
npm run build
npx tsc --noEmit
```

## Guidelines

- **Be creative with the skin.** Banner art, custom spinners, splash screens, and animations make a theme memorable.
- **Choose colors thoughtfully.** Ensure sufficient contrast between text and background. Test in both dark and light terminal environments if possible.
- **Write good companion prompts.** The immersive companion should feel authentic to the theme's source material without using copyrighted text directly.
- **Keep it clean.** No offensive content, slurs, or discriminatory language.

## Pull Request Process

1. Fork the repository and create a feature branch.
2. Add your theme pack following the steps above.
3. Make sure `npx tsc --noEmit` passes with no errors.
4. Open a pull request with a clear description of the theme and its inspiration.
5. Include a screenshot or recording of the theme in action if possible.

## Reporting Issues

If you find a bug in an existing theme (broken colors, missing fields, typos), please open a [GitHub issue](https://github.com/calliopeai/cli-themes/issues) with details about the problem and which theme is affected.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold these standards.
