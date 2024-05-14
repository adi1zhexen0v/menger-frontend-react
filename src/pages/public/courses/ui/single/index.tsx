import { useParams } from "react-router-dom";
import { CourseInfo } from "@widgets/course";
import { CourseBoard } from "@widgets/course";
import { useCourseBySlug } from "@entities/course";
import { Loader } from "@shared/ui";
import styles from "./CoursePage.module.scss";

export const CoursePage: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useCourseBySlug(slug!);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <CourseInfo course={data!} />
      <CourseBoard course={data!} />
    </div>
  );
};
