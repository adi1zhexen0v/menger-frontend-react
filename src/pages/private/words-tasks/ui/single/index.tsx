import { useParams } from "react-router-dom";
import { WordsTasksModule } from "@features/words-tasks";
import { useLevelById } from "@entities/level";
import { useWordsTasksOfLevel } from "@entities/word-task";
import { DASHBOARD_SINGLE_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import { BackLink, Loader, PageTitle } from "@shared/ui";
import styles from "./DashboardWordTaskPage.module.scss";

export const DashboardWordTaskPage: React.FC = () => {
  const { id } = useParams();
  const { data: level, isLoading: levelIsLoading } = useLevelById(id!);
  const { data: tasks, isLoading: tasksIsLoading } = useWordsTasksOfLevel(id!);

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
            <PageTitle isGray={true}>Сөздік тапсырмалар бөлімі</PageTitle>
          </div>
        </div>
      )}
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <WordsTasksModule
            courseId={level!.courseId._id}
            levelId={level!._id}
            link={DASHBOARD_SINGLE_COURSE_PAGE_ROUTE.replace(":slug", level!.courseId.slug)}
            wordsTasks={tasks!}
          />
        )}
      </div>
    </div>
  );
};
