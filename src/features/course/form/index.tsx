import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoText, IoCheckboxOutline } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { CiLink, CiTextAlignJustify } from "react-icons/ci";
import { PiUpload } from "react-icons/pi";
import classNames from "classnames";
import { SelectOrganization, useOrganizations } from "@entities/organization";
import { ICreateCourseRequest, useCreateCourse } from "@entities/course";
import { Button, DynamicInputList, Input, Loader, Toast } from "@shared/ui";
import { DASHBOARD_COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./CreateCourseForm.module.scss";

export const CreateCourseForm: React.FC = () => {
  const { data, isLoading } = useOrganizations();

  const [file, setFile] = useState<File | null>(null);
  const [benefits, setBenefits] = useState<string[]>([""]);
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [organizationId, setOrganizationId] = useState<string>("");

  const { mutate, isLoading: courseIsLoading, isError } = useCreateCourse();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateCourseRequest>({
    defaultValues: {
      slug: "english-for-"
    }
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFile(file);
    }
  };

  const handleBenefitsChange = (newBenefits: string[]) => {
    setBenefits(newBenefits);
  };

  const onSubmit: SubmitHandler<ICreateCourseRequest> = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("price", data.price.toString());
    formData.append("benefits", benefits.join(";"));
    formData.append("isPublic", isPublic.toString());
    formData.append("file", file!);
    {
      organizationId && formData.append("organizationId", organizationId);
    }

    mutate(formData, {
      onSuccess: () => {
        reset();
        navigate(DASHBOARD_COURSES_PAGE_ROUTE);
      }
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <Input
          title="Курстың аты"
          placeholder="Курстың атың еңгізіңіз"
          register={register}
          name="title"
          errors={errors}
          ReactIcon={IoText}
          validator={{
            required: { value: true, message: "Курстың аты болуы керек" }
          }}
        />
        <Input
          title="Курстың сілтемесі"
          placeholder="Курстың сілтемесің еңгізіңіз"
          register={register}
          name="slug"
          errors={errors}
          ReactIcon={CiLink}
          validator={{
            required: { value: true, message: "Курстың сілтемесі болуы керек" }
          }}
        />
        <Input
          title="Курстың анықтамасы"
          placeholder="Курстың анықтамасың еңгізіңіз"
          register={register}
          name="description"
          isTextarea={true}
          errors={errors}
          ReactIcon={CiTextAlignJustify}
          validator={{
            required: { value: true, message: "Курстың анықтамасы болуы керек" }
          }}
        />
        <Input
          title="Курстың бағасы"
          placeholder="Курстың бағасың еңгізіңіз"
          register={register}
          name="price"
          type="number"
          errors={errors}
          ReactIcon={IoMdPricetags}
          validator={{
            required: { value: true, message: "Курстың бағасы болуы керек" }
          }}
        />
      </div>
      <div className={styles.inputs}>
        <DynamicInputList
          title="Курстың артықшылықтары"
          placeholder="Артықшылықты еңгізіңіз"
          onChange={handleBenefitsChange}
          value={benefits}
          Icon={IoCheckboxOutline}
        />
        <div>
          <p className={styles.title}>Бұл курс ашық па?</p>
          <div
            className={classNames(styles.switch, { [styles.active]: isPublic })}
            onClick={() => setIsPublic(!isPublic)}>
            <span></span>
          </div>
        </div>
        {!isPublic && (
          <div>
            <p className={styles.title}>Курс арналған ұйым</p>
            <SelectOrganization
              activeId={organizationId}
              organizations={data!}
              setValue={setOrganizationId}
            />
          </div>
        )}
      </div>
      <div>
        <p className={styles.title}>Курстың суретін жүктеу</p>
        <label htmlFor="file" className={styles.uploader}>
          <PiUpload />
          <p>Суретті жүктеу</p>
        </label>
        <input
          className={styles.file}
          id="file"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        {file && (
          <div>
            <p className={styles.title}>Суретті алдын ала қарау</p>
            <img src={URL.createObjectURL(file)} alt="Image Preview" className={styles.preview} />
          </div>
        )}
        <Button title="Жаңа курсты қосу" />
      </div>
      {courseIsLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Жаңа курс қосу кезінде қате пайда болды"
        />
      )}
    </form>
  );
};
