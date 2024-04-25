import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CourseCard, ICourse } from "@entities/course";
import { COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import { PageTitle } from "@shared/ui";
import styles from "./CoursesSection.module.scss";

interface Props {
  courses: ICourse[];
}

export const CoursesSection: React.FC<Props> = ({ courses }) => {
  return (
    <section>
      <div className={styles.header}>
        <PageTitle maxWidth={600}>Ағылшын тілін үйренуге арналған курстар тізімі</PageTitle>
        <Link className={styles.link} to={COURSES_PAGE_ROUTE}>
          Курстар тізімі <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
      <div className={styles.list}>
        {courses.map((course) => (
          <CourseCard course={course} key={course._id} />
        ))}
      </div>
    </section>
  );
};
