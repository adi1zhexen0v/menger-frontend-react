import { ICourse } from "@entities/course";
import { LevelItem, sortLevelsByOrder } from "@entities/level";
import { PageText, PageTitle } from "@shared/ui";
import styles from "./CourseInfo.module.scss";

interface Props {
  course: ICourse;
}

export const CourseInfo: React.FC<Props> = ({ course }) => {
  return (
    <div className={styles.wrapper}>
      <PageTitle>{course!.title}</PageTitle>
      <h4 className={styles.title}>Курс туралы</h4>
      <PageText>{course!.description}</PageText>
      <h4 className={styles.title}>Курсты аяқтағаннан кейін:</h4>
      <ul>
        {course?.benefits.map((benefit) => (
          <li>
            <PageText>- {benefit}</PageText>
          </li>
        ))}
      </ul>
      <h4 className={styles.title}>Курс бағдарламасы:</h4>
      <div className={styles.levels}>
        {sortLevelsByOrder(course!.levels).map((level) => (
          <LevelItem level={level} />
        ))}
      </div>
    </div>
  );
};
