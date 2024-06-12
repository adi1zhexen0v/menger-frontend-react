import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLevelById } from "@entities/level";
import { ListOfSentenceTasks } from "@entities/sentence-task";
import { AddSentenceTaskForm } from "@features/sentence-task";
import { BackLink, PageTitle, Loader } from "@shared/ui";
import { DASHBOARD_EDIT_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./DashboardManageSentenceTaskPage.module.scss";

export const DashboardManageSentenceTaskPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useLevelById(id!);

  const [isForm, setIsForm] = useState<boolean>(false);

  const openForm = () => {
    setIsForm(true);
  };

  const closeForm = () => {
    setIsForm(false);
    refetch();
  };


  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.header}>
          {isForm ? (
            <BackLink func={closeForm} />
          ) : (
            <BackLink
              link={DASHBOARD_EDIT_COURSE_PAGE_ROUTE.replace(":slug", data.courseId.slug)}
            />
          )}
          <PageTitle isSmall={true}>{`"${data.title}" сөйлемдер тапсырмаларын басқару`}</PageTitle>
        </div>
      )}
      <div className={styles.wrapper}>
        <div className={styles.scroll}>
          {isLoading ? (
            <Loader />
          ) : isForm ? (
            <AddSentenceTaskForm closeForm={closeForm} />
          ) : (
            <ListOfSentenceTasks func={openForm} sentenceTasks={data?.sentenceTasks!} />
          )}
        </div>
      </div>
    </div>
  );
};
