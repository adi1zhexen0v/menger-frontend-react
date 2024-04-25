import { CoursesGrid } from "@widgets/course/CoursesGrid";
import { usePublicCourses } from "@entities/course/";
import { Loader, PageTitle } from "@shared/ui/";
import styles from "./CoursesPage.module.scss";

export const CoursesPage: React.FC = () => {
  const { data, isLoading } = usePublicCourses();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <PageTitle>Курстар</PageTitle>
      <div className={styles.wrapper}>
        <CoursesGrid courses={data!} />
      </div>
    </div>
  );
};
