/**
 * @calliopelabs/cli-themes
 *
 * Optional theme pack library for Calliope CLI.
 * Provides 104 curated theme packs with skins, palettes, and companions.
 */

export { THEME_PACKS } from './registry.js';
export { colors } from './colors.js';

export type {
  // Theme Pack
  ThemePack,
  ThemeCategory,

  // Skin
  Skin,
  SkinIcons,
  SkinSplash,
  SkinTransition,
  SkinFrame,
  SkinAnimations,
  BoxChars,

  // Palette
  Palette,
  PaletteColors,
  SemanticColorKey,
  HUDConfig,

  // Companion
  PersonaCompanion,
  CompanionMoods,
  CompanionImmersion,
  MoodState,
} from './types.js';
