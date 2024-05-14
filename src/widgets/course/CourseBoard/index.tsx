import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTengeSign } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { ICourse } from "@entities/course";
import { Button } from "@shared/ui";
import styles from "./CourseBoard.module.scss";
import { CartButton } from "@features/cart";

interface Props {
  course: ICourse;
}

export const CourseBoard: React.FC<Props> = ({ course }) => {
  return (
    <div className={classNames(styles.block, styles.wrapper)}>
      <img src={course.imageUrl} alt={course.title} className={styles.image} />
      <div className={styles.overlay}></div>
      <p className={styles.text}>Құны</p>
      <h4 className={styles.price}>
        {course.price} <FontAwesomeIcon icon={faTengeSign} />
      </h4>
      <div className={styles.info}>
        <h6>{course?.levels.length}</h6>
        <p className={styles.text}>Модуль</p>
      </div>
      <div className={styles.info}>
        <h6>127</h6>
        <p className={styles.text}>Оқушы</p>
      </div>
      <CartButton courseId={course._id} />
    </div>
  );
};
