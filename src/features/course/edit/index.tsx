import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiLink, CiTextAlignJustify } from "react-icons/ci";
import { IoMdPricetags } from "react-icons/io";
import { IoCheckboxOutline, IoText } from "react-icons/io5";
import { PiUpload } from "react-icons/pi";
import { ICourse, ICreateCourseRequest, useUpdateCourse } from "@entities/course";
import { DASHBOARD_COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import { Button, DynamicInputList, Input, Loader, Toast } from "@shared/ui";
import styles from "./EditCourseForm.module.scss";

interface Props {
  course: ICourse;
}

export const EditCourseForm: React.FC<Props> = ({ course }) => {
  const [file, setFile] = useState<File | null>(null);
  const [benefits, setBenefits] = useState<string[]>(course.benefits);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateCourseRequest>({
    defaultValues: {
      title: course.title,
      slug: course.slug,
      description: course.description,
      price: +course.price
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

  const { mutate, isLoading, isError } = useUpdateCourse(course._id);

  const onSubmit: SubmitHandler<ICreateCourseRequest> = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("slug", data.slug);
    formData.append("description", data.description);
    formData.append("price", data.price.toString());
    formData.append("benefits", benefits.join(";"));
    formData.append("file", file!);

    mutate(formData, {
      onSuccess: () => {
        reset();
        navigate(DASHBOARD_COURSES_PAGE_ROUTE);
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
      <DynamicInputList
        title="Курстың артықшылықтары"
        placeholder="Артықшылықты еңгізіңіз"
        value={benefits}
        onChange={handleBenefitsChange}
        Icon={IoCheckboxOutline}
      />
      <div>
        <p className={styles.title}>Курстың суретін жүктеу</p>
        <label htmlFor="file" className={styles.uploader}>
          <PiUpload />
          <p>Суретті жүктеу</p>
        </label>
      </div>
      <input
        className={styles.file}
        id="file"
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
      {file ? (
        <div>
          <p className={styles.title}>Суретті алдын ала қарау</p>
          <img src={URL.createObjectURL(file)} alt="Image Preview" className={styles.preview} />
        </div>
      ) : (
        <div>
          <p className={styles.title}>Курстың қазіргі суреті</p>
          <img src={course.imageUrl} alt="Image Preview" className={styles.preview} />
        </div>
      )}
      <Button title="Курсты жаңарту" />
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Курсты жаңарту қосу кезінде қате пайда болды"
        />
      )}
    </form>
  );
};
