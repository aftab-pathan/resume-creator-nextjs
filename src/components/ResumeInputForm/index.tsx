import { useState } from "react";
import { WorkExperiencesForm } from "./FormSections/WorkExperiencesForm";
import { EducationsForm } from "./FormSections/EducationsForm";
import { ProjectsForm } from "./FormSections/ProjectsForm";
import { SkillsForm } from "./FormSections/SkillsForm";
import { CustomForm } from "./FormSections/CustomForm";
import { ShowForm } from "@/types/types";
import { ProfileForm } from "./FormSections/ProfileForm";
import { cn } from "@/lib/utils";
import {
  useAppSelector,
  useSaveStateToLocalStorageOnChange,
  useSetInitialStore,
} from "@/redux/localStorageHooks";
import { ThemeForm } from "./ThemeForm";
import { selectFormsOrder } from "@/redux/slices/settingsSlice";

const formTypeToComponent: { [type in ShowForm]: () => JSX.Element } = {
  workExperiences: WorkExperiencesForm,
  educations: EducationsForm,
  projects: ProjectsForm,
  skills: SkillsForm,
  custom: CustomForm,
};

export const ResumeInputForm = () => {
  useSetInitialStore();
  useSaveStateToLocalStorageOnChange();

  const [isHover, setIsHover] = useState(false);

  const formsOrder = useAppSelector(selectFormsOrder);

  return (
    <div
      className={cn(
        "flex justify-center scrollbar scrollbar-track-gray-100 scrollbar-w-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end md:overflow-y-scroll",
        isHover && "scrollbar-thumb-gray-200",
      )}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <section className="flex flex-col max-w-2xl gap-8 p-[var(--resume-padding)]">
        <ProfileForm />
        {formsOrder.map((form) => {
          const Component = formTypeToComponent[form];
          return <Component key={form} />;
        })}
        <ThemeForm />
      </section>
    </div>
  );
};
