import { useState } from "react";
import { useParams } from "react-router-dom";
import { AddWordTaskForm } from "@features/words-tasks";
import { ListOfWordsTasks } from "@entities/word-task";
import { useLevelById } from "@entities/level";
import { useUnusedWords } from "@entities/word";
import { BackLink, PageTitle, Loader } from "@shared/ui";
import { DASHBOARD_EDIT_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./DashboardManageWordTaskPage.module.scss";

export const DashboardManageWordTaskPage: React.FC = () => {
  const { id } = useParams();
  const { data: level, isLoading: levelIsLoading, refetch: refetchLevel } = useLevelById(id!);
  const { data: words, isLoading: wordsIsLoading, refetch: refetchWords } = useUnusedWords(id!);

  const [isForm, setIsForm] = useState<boolean>(false);

  const isLoading = levelIsLoading || wordsIsLoading;

  const openForm = () => {
    setIsForm(true);
  };

  const closeForm = () => {
    setIsForm(false);
    refetchLevel();
    refetchWords();
  };

  return (
    <div className={styles.container}>
      {level && (
        <div className={styles.header}>
          {isForm ? (
            <BackLink func={closeForm} />
          ) : (
            <BackLink
              link={DASHBOARD_EDIT_COURSE_PAGE_ROUTE.replace(":slug", level.courseId.slug)}
            />
          )}
          <PageTitle isSmall={true}>{`"${level.title}" cөздік бөлімін басқару`}</PageTitle>
        </div>
      )}
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : isForm ? (
          <AddWordTaskForm words={words!} closeForm={closeForm} />
        ) : (
          <div className={styles.scroll}>
            <ListOfWordsTasks func={openForm} wordsTasks={level?.wordsTasks!} />
          </div>
        )}
      </div>
    </div>
  );
};
