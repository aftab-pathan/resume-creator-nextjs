export const DEFAULT_THEME_COLOR = "#38bdf8";
export const DEFAULT_FONT_FAMILY = "Roboto";
export const DEFAULT_FONT_SIZE = "11";
export const DEFAULT_FONT_COLOR = "#171717";

//resume-parser-from-pdf

export const BULLET_POINTS = [
  "⋅",
  "∙",
  "🞄",
  "•",
  "⦁",
  "⚫︎",
  "●",
  "⬤",
  "⚬",
  "○",
];
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const SEASONS = ["Summer", "Fall", "Spring", "Winter"];
export const SCHOOLS = [
  "College",
  "University",
  "Institute",
  "School",
  "Academy",
];
export const DEGREES = ["Bachelor", "Master", "PhD", "Ph."];
export const WORK_EXPERIENCE_KEYWORDS_LOWERCASE = [
  "work",
  "experience",
  "employment",
  "history",
  "job",
];
export const JOB_TITLES = [
  "Analyst",
  "Agent",
  "Administrator",
  "Architect",
  "Assistant",
  "Associate",
  "CTO",
];
export const SECTION_TITLE_PRIMARY_KEYWORDS = [
  "experience",
  "education",
  "project",
  "skill",
];
export const SECTION_TITLE_SECONDARY_KEYWORDS = [
  "job",
  "course",
  "extracurricular",
  "objective",
  "summary",
  "award",
  "honor",
  "project",
];

// page size constant

export const PX_PER_PT = 4 / 3;
export const A4_WIDTH_PT = 595;
const A4_HEIGHT_PT = 842;
export const A4_WIDTH_PX = A4_WIDTH_PT * PX_PER_PT;
export const A4_HEIGHT_PX = A4_HEIGHT_PT * PX_PER_PT;
export const LETTER_WIDTH_PT = 612;
export const LETTER_HEIGHT_PT = 792;
export const LETTER_WIDTH_PX = LETTER_WIDTH_PT * PX_PER_PT;
export const LETTER_HEIGHT_PX = LETTER_HEIGHT_PT * PX_PER_PT;

// font constant
const SANS_SERIF_FONT_FAMILIES = [
  "Roboto",
  "Lato",
  "OpenSans",
  "Montserrat",
  "Raleway",
];
const SERIF_FONT_FAMILIES = [
  "Lora",
  "RobotoSlab",
  "Merriweather",
  "Caladea",
  "PlayfairDisplay",
];
export const FONT_FAMILIES = [
  ...SANS_SERIF_FONT_FAMILIES,
  ...SERIF_FONT_FAMILIES,
];
export type FontFamily = (typeof FONT_FAMILIES)[number];
export const FONT_FAMILY_TO_STANDARD_SIZE_IN_PT: Record<FontFamily, number> = {
  Roboto: 11,
  Lato: 11,
  Montserrat: 10,
  OpenSans: 10,
  Raleway: 10,

  Caladea: 11,
  Lora: 11,
  RobotoSlab: 10,
  PlayfairDisplay: 10,
  Merriweather: 10,
};
export const FONT_FAMILY_TO_DISPLAY_NAME: Record<FontFamily, string> = {
  Roboto: "Roboto",
  Lato: "Lato",
  Montserrat: "Montserrat",
  OpenSans: "Open Sans",
  Raleway: "Raleway",

  Caladea: "Caladea",
  Lora: "Lora",
  RobotoSlab: "Roboto Slab",
  PlayfairDisplay: "Playfair Display",
  Merriweather: "Merriweather",
};
export const getAllFontFamiliesToLoad = () => {
  return [...FONT_FAMILIES];
};
