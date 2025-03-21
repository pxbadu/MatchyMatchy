/**
 * Shared constants for the application
 */

// Model categories
export const MODEL_SKIN_TONE_CLASSES = ["light", "mid-light", "mid-dark", "dark"]

// Application skin tone categories
export const APP_SKIN_TONE_CLASSES = ["Fair", "Light", "Medium", "Tan", "Deep", "Dark"]

// Mapping from model categories to application categories
export const SKIN_TONE_MAPPING: Record<string, string> = {
  "light": "Fair",
  "mid-light": "Light", 
  "mid-dark": "Tan",
  "dark": "Deep"
}

// Additional mapping for improved consistency with our simplified model
export const ENHANCED_SKIN_TONE_MAPPING: Record<string, string[]> = {
  "light": ["Fair", "Light"],
  "mid-light": ["Light", "Medium"], 
  "mid-dark": ["Tan", "Medium"],
  "dark": ["Deep", "Dark"]
}

// Skin tone color codes
export const SKIN_TONE_COLORS: Record<string, string> = {
  Fair: "#F8D5C2",
  Light: "#F3C1A0",
  Medium: "#E0AC69",
  Tan: "#C68642",
  Deep: "#8D5524",
  Dark: "#5C3836",
  // Add fallback colors for model categories
  "light": "#F8D5C2",
  "mid-light": "#F3C1A0",
  "mid-dark": "#C68642",
  "dark": "#5C3836"
}

// Skin tone descriptions
export const SKIN_TONE_DESCRIPTIONS: Record<string, string> = {
  Fair: "Very light skin that burns easily and rarely tans.",
  Light: "Light skin that burns easily and tans minimally.",
  Medium: "Light to medium skin that sometimes burns and tans gradually.",
  Tan: "Medium to olive skin that rarely burns and tans easily.",
  Deep: "Brown skin that rarely burns and tans easily.",
  Dark: "Deep brown skin that never burns and always tans.",
  // Add descriptions for model categories
  "light": "Very light skin that burns easily and rarely tans.",
  "mid-light": "Light to medium skin that sometimes burns and tans gradually.",
  "mid-dark": "Medium to olive skin that rarely burns and tans easily.",
  "dark": "Deep brown skin that never burns and always tans."
} 