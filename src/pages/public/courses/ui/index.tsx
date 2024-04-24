import { useLatestCourses } from "@entities/course/";
import { Loader } from "@shared/ui/";
import { PageTitle } from "@shared/ui/";
import { CoursesGrid } from "@widgets/course/CoursesGrid";
import styles from "./CoursesPage.module.scss";

export const CoursesPage: React.FC = () => {
  const { data, isLoading } = useLatestCourses();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <PageTitle title="Курстар" />
      <div className={styles.wrapper}>
        <CoursesGrid courses={data!} />
      </div>
    </div>
  );
};
