"use client";

import { deepClone } from "@/lib/utils";
import { makeObjectCharIterator } from "@/redux/makeObjectCharIterator";
import { initialResumeState } from "@/redux/slices/resumeSlice";
import { useEffect, useRef, useState } from "react";
import { ResumeIFrameCSR } from "../ResumeOutput/ResumeIFrame";
import { ResumePDF } from "../ResumeOutput/ResumePdf";
import { initialSettings } from "@/redux/slices/settingsSlice";
import {
  END_HOME_RESUME,
  START_HOME_RESUME,
} from "@/lib/constant/AutoTypeResumeConstant";

export const AutoTypingResume = () => {
  const [resume, setResume] = useState(deepClone(initialResumeState));
  const resumeCharIterator = useRef(
    makeObjectCharIterator(START_HOME_RESUME, END_HOME_RESUME),
  );

  const hasSetEndResume = useRef(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let next = resumeCharIterator.current.next();
      for (let i = 0; i < 9; i++) {
        next = resumeCharIterator.current.next();
      }
      if (!next.done) {
        setResume(next.value);
      } else {
        if (!hasSetEndResume.current) {
          setResume(END_HOME_RESUME);
          hasSetEndResume.current = true;
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      resumeCharIterator.current = makeObjectCharIterator(
        START_HOME_RESUME,
        END_HOME_RESUME,
      );
      hasSetEndResume.current = false;
    }, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ResumeIFrameCSR documentSize="Letter" scale={0.7}>
      <ResumePDF
        resume={resume}
        settings={{
          ...initialSettings,
          fontSize: "12",
          formToHeading: {
            workExperiences: resume.workExperiences[0].company
              ? "WORK EXPERIENCE"
              : "",
            educations: resume.educations[0].school ? "EDUCATION" : "",
            projects: resume.projects[0].project ? "PROJECT" : "",
            skills: resume.skills.featuredSkills[0].skill ? "SKILLS" : "",
            custom: "CUSTOM SECTION",
          },
        }}
      />
    </ResumeIFrameCSR>
  );
};
