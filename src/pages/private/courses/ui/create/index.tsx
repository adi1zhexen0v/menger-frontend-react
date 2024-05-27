import { CreateCourseForm } from "@features/course";
import { DASHBOARD_COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import { BackLink, PageTitle } from "@shared/ui";
import styles from "./DashboardCreateCoursePage.module.scss";

export const DashboardCreateCoursePage: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <BackLink link={DASHBOARD_COURSES_PAGE_ROUTE} />
        <PageTitle isSmall={true}>Жаңа курсты қосу</PageTitle>
      </div>
      <div className={styles.wrapper}>
        <CreateCourseForm />
      </div>
    </section>
  );
};
