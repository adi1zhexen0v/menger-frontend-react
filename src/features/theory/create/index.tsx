import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import { IoCheckmarkOutline, IoDiamondSharp } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import { PiUpload } from "react-icons/pi";
import { ICreateTheory, useCreateTheory } from "@entities/theory";
import { Button, Input, Loader, ManualInput, Toast } from "@shared/ui";
import { DASHBOARD_EDIT_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./CreateTheoryPage.module.scss";

export const CreateTheoryForm: React.FC = () => {
  const [isYouTube, setIsYouTube] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [video, setVideo] = useState<File | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const { mutate, isLoading, isError } = useCreateTheory();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleVideoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setVideo(file);
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateTheory>({
    defaultValues: {
      points: 10,
      diamonds: 5
    }
  });

  const onSubmit: SubmitHandler<ICreateTheory> = (data) => {
    const formData = new FormData();
    formData.append("isYouTube", "" + isYouTube);
    formData.append("points", "" + data.points);
    formData.append("diamonds", "" + data.diamonds);
    formData.append("levelId", "" + id);
    if (isYouTube) {
      formData.append("videoUrl", videoUrl);
    } else {
      formData.append("files", video!);
    }

    if (image) {
      formData.append("files", image);
    }

    mutate(formData, {
      onSuccess: (data) => {
        reset();
        navigate(DASHBOARD_EDIT_COURSE_PAGE_ROUTE.replace(":slug", data.courseId.slug));
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <Input
          title="Жиналатын ұпай саны"
          placeholder="Жиналатын ұпай саның еңгізіңіз"
          register={register}
          name="points"
          type="number"
          errors={errors}
          ReactIcon={IoCheckmarkOutline}
          validator={{
            required: { value: true, message: "Курстың аты болуы керек" }
          }}
        />
        <Input
          title="Жиналатын кристалл саны"
          placeholder="Жиналатын кристалл саның еңгізіңіз"
          register={register}
          name="diamonds"
          type="number"
          errors={errors}
          ReactIcon={IoDiamondSharp}
          validator={{
            required: { value: true, message: "Курстың аты болуы керек" }
          }}
        />
        <div>
          <p className={styles.title}>Бейне сабақ желіде бар ма?</p>
          <div
            className={classNames(styles.switch, { [styles.active]: isYouTube })}
            onClick={() => setIsYouTube(!isYouTube)}>
            <span></span>
          </div>
        </div>
        {isYouTube ? (
          <ManualInput
            title="Бейне сабақ сілтемесі"
            placeholder="Бейне сабақ сілтемесің еңгізіңіз"
            type="text"
            Icon={CiLink}
            value={videoUrl}
            setValue={setVideoUrl}
          />
        ) : (
          <div>
            <p className={styles.title}>Бейне сабақты жүктеу</p>
            <label htmlFor="video" className={styles.uploader}>
              <PiUpload />
              <p>Бейнені жүктеу</p>
            </label>
            <input
              className={styles.file}
              id="video"
              type="file"
              onChange={handleVideoChange}
              accept="video/*"
            />
            {video && (
              <div>
                <p className={styles.title}>Бейнені алдын ала қарау</p>
                <video controls src={URL.createObjectURL(video)} className={styles.preview} />
              </div>
            )}
          </div>
        )}
      </div>
      <div className={styles.inputs}>
        <div>
          <p className={styles.title}>Бейне сабақты жүктеу</p>
          <label htmlFor="image" className={styles.uploader}>
            <PiUpload />
            <p>Суретті жүктеу</p>
          </label>
          <input
            className={styles.file}
            id="image"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
          {image && (
            <div>
              <p className={styles.title}>Суретті алдын ала қарау</p>
              <img
                alt="Image Preview"
                src={URL.createObjectURL(image)}
                className={styles.preview}
              />
            </div>
          )}
          <Button title="Жаңа бейне сабақты қосу" />
        </div>
        {isLoading && <Loader isFullPage={true} />}
        {isError && (
          <Toast
            isFail={true}
            title="Қате пайда болды"
            text="Жаңа курс қосу кезінде қате пайда болды"
          />
        )}
      </div>
    </form>
  );
};
