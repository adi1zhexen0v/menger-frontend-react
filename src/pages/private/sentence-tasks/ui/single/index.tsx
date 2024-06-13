import { useParams } from "react-router-dom";
import { SentenceTaskModule } from "@features/sentence-task";
import { useLevelById } from "@entities/level";
import { useSentenceTasksOfLevel } from "@entities/sentence-task/lib/hooks";
import { DASHBOARD_SINGLE_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import { BackLink, Loader, PageTitle } from "@shared/ui";
import styles from "./DashboardSentenceTaskPage.module.scss";

export const DashboardSentenceTaskPage: React.FC = () => {
  const { id } = useParams();
  const { data: level, isLoading: levelIsLoading } = useLevelById(id!);
  const { data: tasks, isLoading: tasksIsLoading } = useSentenceTasksOfLevel(id!);

  const isLoading = levelIsLoading || tasksIsLoading;

  return (
    <div className={styles.container}>
      {level && (
        <div className={styles.header}>
          <BackLink
            link={DASHBOARD_SINGLE_COURSE_PAGE_ROUTE.replace(":slug", level.courseId.slug)}
          />
          <div>
            <PageTitle isSmall={true}>{level.title}</PageTitle>
            <PageTitle isGray={true}>Cөйлем тапсырмалар бөлімі</PageTitle>
          </div>
        </div>
      )}
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <SentenceTaskModule
            courseId={level!.courseId._id}
            levelId={level!._id}
            link={DASHBOARD_SINGLE_COURSE_PAGE_ROUTE.replace(":slug", level!.courseId.slug)}
            sentenceTasks={tasks!}
          />
        )}
      </div>
    </div>
  );
};
