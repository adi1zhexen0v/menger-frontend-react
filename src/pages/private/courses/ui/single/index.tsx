import { useParams } from "react-router-dom";
import { CourseInfo } from "@widgets/course";
import { useCourseBySlug } from "@entities/course";
import { Loader, PageTitle } from "@shared/ui";
import styles from "./DashboardSingleCoursePage.module.scss";

export const DashboardSingleCoursesPage: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useCourseBySlug(slug!);
  const title: string = isLoading ? "" : data!.title;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <PageTitle isSmall={true}>{title}</PageTitle>
      </div>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.list}>
            <CourseInfo course={data!} />
          </div>
        )}
      </div>
    </section>
  );
};
