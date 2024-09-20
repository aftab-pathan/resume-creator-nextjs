"use client";

import { useAppSelector } from "@/redux/localStorageHooks";
import { useMemo, useState } from "react";
import {
  useRegisterReactPDFFont,
  useRegisterReactPDFHypenationCallback,
} from "../Fonts/hooks";
import { selectResume } from "@/redux/slices/resumeSlice";
import { selectSettings } from "@/redux/slices/settingsSlice";
import { FlexboxSpacer } from "../FlexboxSpacer";
import { ResumePDF } from "./ResumePdf";
import { ResumeIFrameCSR } from "./ResumeIFrame";
import { ResumeControlBarCSR } from "./ResumeControlBar";

export const ResumeOutput = () => {
  const [scale, setScale] = useState(0.8);
  const resume = useAppSelector(selectResume);
  const settings = useAppSelector(selectSettings);
  const document = useMemo(
    () => <ResumePDF resume={resume} settings={settings} isPDF={true} />,
    [resume, settings],
  );

  useRegisterReactPDFFont();
  useRegisterReactPDFHypenationCallback(settings.fontFamily);

  return (
    <div className="relative flex justify-center md:justify-start">
      <FlexboxSpacer maxWidth={50} className="hidden md:block" />
      <div className="relative">
        <section className="h-[calc(100vh-var(--top-nav-bar-height)-var(--resume-control-bar-height))] overflow-hidden md:p-[var(--resume-padding)]">
          <ResumeIFrameCSR
            documentSize={settings.documentSize}
            scale={scale}
            enablePDFViewer={false}
          >
            <ResumePDF resume={resume} settings={settings} isPDF={false} />
          </ResumeIFrameCSR>
        </section>
        <ResumeControlBarCSR
          scale={scale}
          setScale={setScale}
          documentSize={settings.documentSize}
          document={document}
          fileName={resume.profile.name + " - Resume"}
        />
      </div>
    </div>
  );
};
