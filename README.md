# @calliopelabs/cli-themes

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@calliopelabs/cli-themes.svg)](https://www.npmjs.com/package/@calliopelabs/cli-themes)

104 curated theme packs for [Calliope CLI](https://github.com/calliopeai/calliope-cli) — the multi-model AI agent for your terminal.

Each theme pack bundles a **skin** (layout, borders, banners, animations), a **palette** (full color scheme), and **companions** (AI personality with moods and immersion text) into a single cohesive visual identity.

## Installation

```bash
npm install @calliopelabs/cli-themes
```

This is an optional add-on. Install it alongside the main CLI:

```bash
npm install @calliopelabs/cli @calliopelabs/cli-themes
```

Once installed, Calliope CLI automatically detects the theme packs and makes them available through the theme picker.

## Theme Categories

| Category | Packs | Examples |
|----------|------:|---------|
| **Cultural** | 29 | Adventure Time, Akira, Archer, Avatar, Studio Ghibli |
| **Sci-Fi** | 23 | Blade Runner, Altered Carbon, Cowboy Bebop, Dune, The Expanse |
| **Gaming** | 19 | BioShock, Dark Souls, Doom, Metroid, Zelda |
| **Retro** | 19 | Amiga, Apple II, Back to the Future, Synthwave, VHS |
| **Trek** | 9 | Borg, DS9, Enterprise, Lower Decks, Voyager |
| **Seasonal** | 7 | Spring, Summer, Autumn, Winter, Medical |
| **Minimal** | 5 | Clean, Professional, Misanthropy, Saggitaria |

## How Themes Work

A `ThemePack` is a self-contained visual identity with three components:

- **Skin** — Controls the terminal layout: banner art, border style, prompt decorations, diff display, HUD frames, splash screens, and animations.
- **Palette** — A full color scheme with semantic colors for text, code highlighting, diffs, status indicators, and UI elements.
- **Companions** — Two AI personalities per pack (professional and immersive) with custom system prompts, greetings, mood text, and tool labels.

### Programmatic Access

```typescript
import { THEME_PACKS } from '@calliopelabs/cli-themes';

// Browse all packs
for (const [name, pack] of Object.entries(THEME_PACKS)) {
  console.log(`${name}: ${pack.description} [${pack.category}]`);
}

// Use a specific pack
const bladeRunner = THEME_PACKS['blade-runner'];
console.log(bladeRunner.skin.banner.art);
console.log(bladeRunner.palette.colors.primary);
```

### Types

All interfaces are fully exported:

```typescript
import type { ThemePack, Skin, Palette, PersonaCompanion } from '@calliopelabs/cli-themes';
```

## Development

```bash
git clone https://github.com/calliopeai/cli-themes.git
cd cli-themes
npm install
npm run build
```

Type-check without emitting:

```bash
npx tsc --noEmit
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new theme packs and submitting pull requests.

## License

[MIT](LICENSE) -- Calliope Labs Inc
