// resume types

export interface ResumeProfile {
  name: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: string;
}

export interface ResumeWorkExperience {
  company: string;
  jobTitle: string;
  date: string;
  descriptions: string[];
}

export interface ResumeEducation {
  school: string;
  degree: string;
  date: string;
  gpa: string;
  descriptions: string[];
}

export interface ResumeProject {
  project: string;
  date: string;
  descriptions: string[];
}

export interface FeaturedSkill {
  skill: string;
  rating: number;
}

export interface ResumeSkills {
  featuredSkills: FeaturedSkill[];
  descriptions: string[];
}

export interface ResumeCustom {
  descriptions: string[];
}

export interface Resume {
  profile: ResumeProfile;
  workExperiences: ResumeWorkExperience[];
  educations: ResumeEducation[];
  projects: ResumeProject[];
  skills: ResumeSkills;
  custom: ResumeCustom;
}

export type ResumeKey = keyof Resume;

// settings type

export interface Settings {
  themeColor: string;
  fontFamily: string;
  fontSize: string;
  documentSize: string;
  formToShow: {
    workExperiences: boolean;
    educations: boolean;
    projects: boolean;
    skills: boolean;
    custom: boolean;
  };
  formToHeading: {
    workExperiences: string;
    educations: string;
    projects: string;
    skills: string;
    custom: string;
  };
  formsOrder: ShowForm[];
  showBulletPoints: {
    educations: boolean;
    projects: boolean;
    skills: boolean;
    custom: boolean;
  };
}

export type ShowForm = keyof Settings["formToShow"];
export type FormWithBulletPoints = keyof Settings["showBulletPoints"];
export type GeneralSetting = Exclude<
  keyof Settings,
  "formToShow" | "formToHeading" | "formsOrder" | "showBulletPoints"
>;

//resume parser from pdf types

export interface TextItem {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontName: string;
  hasEOL: boolean;
}

export type TextItems = TextItem[];

export type Line = TextItem[];
export type Lines = Line[];

export type Subsections = Lines[];

export type ResumeSectionToLines = { [sectionName in ResumeKey]?: Lines } & {
  [otherSectionName: string]: Lines;
};

type FeatureScore = -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4;
type ReturnMatchingTextOnly = boolean;

export type FeatureSet =
  | [(item: TextItem) => boolean, FeatureScore]
  | [
      (item: TextItem) => RegExpMatchArray | null,
      FeatureScore,
      ReturnMatchingTextOnly,
    ];

export interface TextScore {
  text: string;
  score: number;
  match: boolean;
}

export type TextScores = TextScore[];

export type CreateHandleChangeArgsWithDescriptions<T> =
  | [field: Exclude<keyof T, "descriptions">, value: string]
  | [field: "descriptions", value: string[]];
