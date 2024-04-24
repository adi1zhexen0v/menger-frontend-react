import { ICourse } from "@entities/course/model";
import { CourseCard } from "@entities/course/";
import styles from "./CoursesGrid.module.scss";

interface Props {
  courses: ICourse[];
}

export const CoursesGrid: React.FC<Props> = ({ courses }) => {
  return (
    <div className={styles.grid}>
      {courses.map((course) => (
        <CourseCard course={course} />
      ))}
    </div>
  );
};
