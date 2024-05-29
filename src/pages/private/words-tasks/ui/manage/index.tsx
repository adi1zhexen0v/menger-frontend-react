import { useParams } from "react-router-dom";
import { useLevelById } from "@entities/level";
import { BackLink, PageTitle, Loader } from "@shared/ui";
import styles from "./DashboardManageWordTaskPage.module.scss";
import { DASHBOARD_EDIT_COURSE_PAGE_ROUTE } from "@shared/consts/routes";

export const DashboardManageWordTaskPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useLevelById(id!);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackLink link={DASHBOARD_EDIT_COURSE_PAGE_ROUTE.replace(":slug", data!.courseId.slug)} />
        <PageTitle isSmall={true}>Курсты басқару беті</PageTitle>
      </div>
      <div className={styles.wrapper}>{isLoading ? <Loader /> : <div>{data?.title}</div>}</div>
    </div>
  );
};
