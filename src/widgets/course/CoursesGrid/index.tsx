import { ICourse } from "@entities/course/model";
import { CourseCard } from "@entities/course/ui/CourseCard";
import styles from "./CoursesGrid.module.scss";
import { LinkToCourseBySlug } from "@features/course/LinkToCourseBySlug";

interface Props {
  courses: ICourse[];
}

export const CoursesGrid: React.FC<Props> = ({ courses }) => {
  return (
    <div className={styles.grid}>
      {courses.map((course) => (
        <CourseCard course={course}/>
      ))}
    </div>
  );
};
