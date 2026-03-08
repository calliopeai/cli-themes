/**
 * Calliope CLI Themes — Type Definitions
 *
 * Shared interfaces for Skins, Palettes, Companions, and Theme Packs.
 */

// ============================================================================
// Box Characters
// ============================================================================

export interface BoxChars {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
  horizontal: string;
  vertical: string;
  teeRight: string;
  teeLeft: string;
  teeDown: string;
  teeUp: string;
  cross: string;
}

// ============================================================================
// Skin
// ============================================================================

export interface Skin {
  name: string;
  description: string;
  author?: string;
  version?: string;

  banner: {
    art: string[];
    tagline?: string;
    style: 'full' | 'compact' | 'none';
  };

  borders: {
    style: 'rounded' | 'sharp' | 'double' | 'ascii' | 'custom' | 'none';
    custom?: BoxChars;
  };

  decorations: {
    promptPrefix: string;
    promptSuffix?: string;
    assistantPrefix: string;
    toolPrefix: string;
    toolSuffix: string;
    separator: string;
    spinner: 'braille' | 'dots' | 'simple' | 'blocks' | 'custom';
    customSpinner?: string[];
  };

  diff: {
    style: 'inline' | 'unified' | 'side-by-side';
    showLineNumbers: boolean;
    contextLines: number;
    maxLineWidth: number;
    wordDiff: boolean;
    header: 'action' | 'path' | 'hunk' | 'none';
  };

  density: 'normal' | 'compact' | 'spacious';

  responsive: {
    compact: number;
    wide: number;
  };

  defaultPalette?: string;
  defaultPersona?: string;

  icons?: SkinIcons;
  splash?: SkinSplash;
  frame?: SkinFrame;
  animations?: SkinAnimations;
}

export interface SkinIcons {
  shell?: string;
  read_file?: string;
  write_file?: string;
  list_files?: string;
  think?: string;
  execute_code?: string;
  web_search?: string;
  git?: string;
  mermaid?: string;
  spawn_agent?: string;
  check_agent?: string;
  list_agents?: string;
  cancel_agent?: string;
  [toolName: string]: string | undefined;
}

export interface SkinSplash {
  coloredArt?: Array<{ text: string; color: string }>;
  duration?: number;
  entryAnimation?: 'none' | 'typewriter' | 'fade-in' | 'scan-lines' | 'drop-in';
  animationSpeed?: number;
  transition?: SkinTransition;
}

export interface SkinTransition {
  effect: 'none' | 'fade-in' | 'fade' | 'scan-lines' | 'drop-in' | 'digital-rain'
    | 'matrix-rain' | 'warp-speed' | 'glitch' | 'terminal-boot'
    | 'pixel-dissolve' | 'sparkle' | 'rainbow-wave' | 'static-noise';
  duration?: number;
  color?: string;
  colorSecondary?: string;
  chars?: string | string[];
}

export interface SkinFrame {
  enabled: boolean;
  style: 'full' | 'top-bottom' | 'sides' | 'none' | 'minimal-header' | 'status-only' | 'hud-overlay' | 'accent-bar';
  titleBar?: {
    enabled: boolean;
    position: 'top' | 'bottom';
    content: 'skin-name' | 'companion-name' | 'custom';
    customText?: string;
    alignment: 'left' | 'center' | 'right';
  };
  statusBarIntegrated?: boolean;
  cornerDecor?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
  };
}

export interface SkinAnimations {
  ambient?: 'none' | 'scan-line' | 'pulse-border' | 'digital-rain';
  transitionEffect?: 'none' | 'flash' | 'dissolve' | 'wipe';
  thinkingSpinner?: string[];
  processingSpinner?: string[];
  streamingPulse?: string[];
}

// ============================================================================
// Palette
// ============================================================================

export interface PaletteColors {
  primary: string;
  secondary: string;
  accent: string;

  text: string;
  textDim: string;
  textBold: string;

  user: string;
  assistant: string;
  system: string;
  error: string;

  codeKeyword: string;
  codeString: string;
  codeNumber: string;
  codeComment: string;
  codeFunction: string;

  diffAdd: string;
  diffRemove: string;
  diffContext: string;

  success: string;
  warning: string;
  info: string;

  border: string;
  background: string;
  selection: string;
}

export type SemanticColorKey = keyof PaletteColors;

export interface Palette {
  name: string;
  description: string;
  colors: PaletteColors;
}

export interface HUDConfig {
  skin: string;
  palette: string;
  companion: string;
  renderer: 'ink' | 'legacy' | 'headless';
}

// ============================================================================
// Companion
// ============================================================================

export interface CompanionMoods {
  idle: string;
  thinking: string;
  success: string;
  error: string;
  frustrated: string;
  excited: string;
  focused: string;
}

export interface CompanionImmersion {
  toolLabels?: Record<string, string>;
  statusMessages?: string[];
  thinkingPhrases?: string[];
  successPhrases?: string[];
  errorPhrases?: string[];
}

export interface PersonaCompanion {
  name: string;
  description: string;

  systemPrompt: string;
  greeting: string;
  farewell: string;

  moods: CompanionMoods;
  immersion?: CompanionImmersion;
}

export type MoodState = keyof CompanionMoods;

// ============================================================================
// Theme Pack
// ============================================================================

export type ThemeCategory =
  | 'gaming'
  | 'trek'
  | 'scifi'
  | 'retro'
  | 'cultural'
  | 'seasonal'
  | 'minimal'
  | 'custom';

export interface ThemePack {
  name: string;
  description: string;
  category: ThemeCategory;
  author?: string;
  tags?: string[];

  skin: Skin;
  palette: Palette;

  companions: {
    professional: PersonaCompanion;
    immersive: PersonaCompanion;
    additional?: PersonaCompanion[];
  };

  relatedPacks?: string[];
}
