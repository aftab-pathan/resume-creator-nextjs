import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "@/redux/slices/resumeSlice";
import { Resume } from "@/types/types";
import { deepClone } from "../utils";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Aftab Pathan",
    summary:
      "Full-Stack Engineer obsessed with building exceptional products that people love",
    email: "aftabksb@gmail.com",
    phone: "123-456-7890",
    location: "PUNE,IND",
    url: "linkedin.com/in/aftabpathan313",
  },
  workExperiences: [
    {
      company: "ABC Company",
      jobTitle: "Front-End Engineer",
      date: "May 2023 - Present",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
    {
      company: "DEF Organization",
      jobTitle: "Software Engineer",
      date: "May 2022 - May 2023",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
    {
      company: "XYZ Company",
      jobTitle: "Software Engineer",
      date: "May 2021 - May 2022",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  educations: [
    {
      school: "XYZ University",
      degree: "Bachelor of Science in Computer Science",
      date: "Sep 2018 - Aug 2022",
      gpa: "8.55",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  projects: [
    {
      project: "Project1",
      date: "Fall 2021",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  custom: {
    descriptions: [],
  },
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience),
  ),
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
};
