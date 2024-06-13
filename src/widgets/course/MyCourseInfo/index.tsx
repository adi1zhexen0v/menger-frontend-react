import { ICourse } from "@entities/course";
import { PageText, PageTitle } from "@shared/ui";
import styles from "./MyCourseInfo.module.scss";

interface Props {
  course: ICourse;
}

export const MyCourseInfo: React.FC<Props> = ({ course }) => {
  return (
    <div className={styles.wrapper}>
      <PageTitle>{course!.title}</PageTitle>
      <h4 className={styles.title}>Курс туралы</h4>
      <PageText>{course!.description}</PageText>
      <h4 className={styles.title}>Курсты аяқтағаннан кейін:</h4>
      <ul>
        {course?.benefits.map((benefit, index) => (
          <li key={index}>
            <PageText>- {benefit}</PageText>
          </li>
        ))}
      </ul>
    </div>
  );
};
