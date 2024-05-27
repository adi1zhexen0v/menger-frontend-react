import { ICourse } from "@entities/course/model";
import { CourseCard } from "@entities/course/";
import styles from "./CoursesGrid.module.scss";

interface Props {
  courses: ICourse[];
  gridTemplateColumns?: number;
}

export const CoursesGrid: React.FC<Props> = ({ courses, gridTemplateColumns = 2 }) => {
  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${gridTemplateColumns} ,1fr)` }}>
      {courses.map((course) => (
        <CourseCard course={course} key={course._id} />
      ))}
    </div>
  );
};
