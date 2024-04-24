import useLatestCourses from "@entities/course/lib/useLatestCourses";
import { Loader } from "@shared/ui/Loader";
import { PageTitle } from "@shared/ui/PageTitle";
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
