import { useParams } from "react-router-dom";
import { CourseLevels } from "@widgets/course";
import { EditCourseForm } from "@features/course";
import { useCourseBySlug } from "@entities/course";
import { BackLink, Loader, PageTitle } from "@shared/ui";
import { DASHBOARD_COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./DashboardEditCoursePage.module.scss";

export const DashboardEditCoursePage: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useCourseBySlug(slug!);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackLink link={DASHBOARD_COURSES_PAGE_ROUTE} />
        <PageTitle isSmall={true}>Курсты басқару беті</PageTitle>
      </div>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.scroll}>
            <div className={styles.content}>
              <EditCourseForm course={data!} />
              <div className={styles.part}>
                <CourseLevels course={data!} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
