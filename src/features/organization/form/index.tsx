import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiUpload } from "react-icons/pi";
import { faAlignJustify, faBuilding, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  IOrganization,
  IUpdateOrganizationRequest,
  useUpdateOrganization
} from "@entities/organization";
import { Button, Input, Loader, Toast } from "@shared/ui";
import { DASHBOARD_ORGANIZATIONS_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./EditOrganizationForm.module.scss";

interface Props {
  organization: IOrganization;
}

export const EditOrganizationForm: React.FC<Props> = ({ organization }) => {
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const { mutate, isError, isLoading } = useUpdateOrganization(organization._id);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<IUpdateOrganizationRequest>({
    defaultValues: {
      name: organization.name,
      slug: organization.slug,
      description: organization.description
    }
  });

  const onSubmit: SubmitHandler<IUpdateOrganizationRequest> = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    if (data.description) formData.append("description", data.description);
    if (data.file) formData.append("file", data.file);

    mutate(formData, {
      onSuccess: () => {
        reset();
        navigate(DASHBOARD_ORGANIZATIONS_PAGE_ROUTE);
      }
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setValue("file", file);
      setFile(file);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        title="Ұйымның аты"
        placeholder="Ұйымның атың еңгізіңіз"
        icon={faBuilding}
        name="name"
        register={register}
        validator={{
          required: { value: true, message: "Ұйымның аты болуы керек" }
        }}
        errors={errors}
      />
      <Input
        title="Ұйымның сілтемесі"
        placeholder="Ұйымның сілтемесің еңгізіңіз"
        icon={faLink}
        name="slug"
        register={register}
        validator={{
          required: { value: true, message: "Ұйымның сілтемесі болуы керек" }
        }}
        errors={errors}
      />
      <Input
        isTextarea={true}
        title="Ұйымның сипаттамасы"
        placeholder="Ұйымның сипаттамасы еңгізіңіз"
        icon={faAlignJustify}
        name="description"
        register={register}
        errors={errors}
      />
      <div>
        <p className={styles.title}>Ұйымның суреті</p>
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
      </div>
      {file && (
        <div>
          <p className={styles.title}>Суретті алдын ала қарау</p>
          <img src={URL.createObjectURL(file)} alt="Image Preview" className={styles.preview} />
        </div>
      )}
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Ұйымды өзгерту кезінде қате пайда болды"
        />
      )}
      <Button title="Ұйым жайлы ақпаратты жаңарту" />
    </form>
  );
};
