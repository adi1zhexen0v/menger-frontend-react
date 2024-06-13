import { useParams } from "react-router-dom";
import { MyCourseInfo, MyCourseLevels } from "@widgets/course";
import { useCourseBySlug, useLevelsOfCourse } from "@entities/course";
import { Loader, PageTitle } from "@shared/ui";
import styles from "./DashboardSingleCoursePage.module.scss";

export const DashboardSingleCoursesPage: React.FC = () => {
  const { slug } = useParams();
  const { data: course, isLoading: courseIsLoading } = useCourseBySlug(slug!);
  const { data: levels, isLoading: levelsIsLoading } = useLevelsOfCourse(course?._id!);
  const isLoading = courseIsLoading || levelsIsLoading;

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <PageTitle isSmall={true}>Менің курстарым</PageTitle>
      </div>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.list}>
            <MyCourseInfo course={course!} />
            <MyCourseLevels levels={levels!} />
          </div>
        )}
      </div>
    </section>
  );
};
