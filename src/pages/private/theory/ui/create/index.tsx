import { useParams } from "react-router-dom";
import { CreateTheoryForm } from "@features/theory";
import { useLevelById } from "@entities/level";
import { BackLink, Loader, PageTitle } from "@shared/ui";
import { DASHBOARD_EDIT_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./DashboardManageTheoryPage.module.scss";

export const DashboardCreateTheoryPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useLevelById(id!);

  return (
    <div className={styles.container}>
      {data && (
        <div className={styles.header}>
          <BackLink link={DASHBOARD_EDIT_COURSE_PAGE_ROUTE.replace(":slug", data!.courseId.slug)} />
          <PageTitle isSmall={true}>{`"${data!.title}" модулің теориясың басқару`}</PageTitle>
        </div>
      )}
      <div className={styles.wrapper}>{isLoading ? <Loader /> : <CreateTheoryForm />}</div>
    </div>
  );
};
