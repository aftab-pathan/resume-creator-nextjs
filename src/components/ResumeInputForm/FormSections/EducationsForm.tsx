import { Form, FormSection } from "@/components/ResumeInputForm/Form";
import { BulletListIconButton } from "@/components/ResumeInputForm/Form/IconButton";
import { BulletListTextArea, Input } from "@/components/ResumeInputForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "@/redux/localStorageHooks";
import { changeEducations, selectEducations } from "@/redux/slices/resumeSlice";
import { changeShowBulletPoints, selectShowBulletPoints } from "@/redux/slices/settingsSlice";
import { CreateHandleChangeArgsWithDescriptions, ResumeEducation } from "@/types/types";

export const EducationsForm = () => {
  const educations = useAppSelector(selectEducations);
  const dispatch = useAppDispatch();
  const showDelete = educations.length > 1;
  const form = "educations";
  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  return (
    <Form form={form} addButtonText="Add School">
      {educations.map(({ school, degree, gpa, date, descriptions }, idx) => {
        const handleWorkExperienceChange = (
          ...[
            field,
            value,
          ]: CreateHandleChangeArgsWithDescriptions<ResumeEducation>
        ) => {
          dispatch(changeEducations({ idx, field, value } as any));
        };

        const handleShowBulletPoints = (value: boolean) => {
          dispatch(changeShowBulletPoints({ field: form, value }));
        };

        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== educations.length - 1;

        return (
          <FormSection
            key={idx}
            form="educations"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText="Delete school"
          >
            <Input
              label="School"
              labelClassName="col-span-4"
              name="school"
              placeholder="XYZ University"
              value={school}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="Date"
              labelClassName="col-span-2"
              name="date"
              placeholder="Jan 2022 - Present"
              value={date}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="Degree & Major"
              labelClassName="col-span-4"
              name="degree"
              placeholder="Bachelor of Science in Computer Engineering"
              value={degree}
              onChange={handleWorkExperienceChange}
            />
            <Input
              label="GPA"
              labelClassName="col-span-2"
              name="gpa"
              placeholder="8.55"
              value={gpa}
              onChange={handleWorkExperienceChange}
            />
            <div className="relative col-span-full">
              <BulletListTextArea
                label="Additional Information (Optional)"
                labelClassName="col-span-full"
                name="descriptions"
                placeholder="Feel free to enter additional activities and so on..."
                value={descriptions}
                onChange={handleWorkExperienceChange}
                showBulletPoints={showBulletPoints}
              />
              <div className="absolute left-[15.6rem] top-[0.07rem]">
                <BulletListIconButton
                  showBulletPoints={showBulletPoints}
                  onClick={handleShowBulletPoints}
                />
              </div>
            </div>
          </FormSection>
        );
      })}
    </Form>
  );
};
