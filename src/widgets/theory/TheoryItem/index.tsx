import ReactPlayer from "react-player";
import { ITheory, useUpdateTheoryProgress } from "@entities/theory";
import { Loader, Submit, Toast } from "@shared/ui";
import styles from "./TheoryItem.module.scss";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { RootState } from "@app/store";
import { useNavigate, useParams } from "react-router-dom";
import { DASHBOARD_SINGLE_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import { updatePoints } from "@entities/user/model";
import { IUpdateTheoryProgress } from "@entities/theory/model/types";

interface Props {
  theory: ITheory;
}

export const TheoryItem: React.FC<Props> = ({ theory }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.user!);
  const course = user.courses.find((item) => item.levels.find((level) => level._id === id))!;
  const { mutate, isError, isLoading } = useUpdateTheoryProgress();

  const updateProgress = () => {
    const data: IUpdateTheoryProgress = {
      userId: user._id,
      levelId: theory.levelId,
      courseId: course._id,
      points: theory.points,
      diamonds: theory.diamonds
    };

    mutate(data, {
      onSuccess: () => {
        dispatch(updatePoints({ points: data.points, diamonds: data.diamonds }));
        navigate(DASHBOARD_SINGLE_COURSE_PAGE_ROUTE.replace(":slug", course.slug));
      }
    });
  };

  return (
    <div className={styles.block}>
      <div className={styles.video}>
        <ReactPlayer
          url={theory.videoUrl}
          light={theory.previewUrl}
          playing
          controls
          width="100%"
          height="100%"
        />
      </div>
      <Submit func={updateProgress} />
      {isLoading && <Loader isFullPage />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Теориялық бөлімді өту кезінде қате пайда болды"
        />
      )}
    </div>
  );
};
