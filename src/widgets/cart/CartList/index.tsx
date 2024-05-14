import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faTengeSign } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "@app/store";
import { CartDeleteButton } from "@features/cart";
import { ICourse } from "@entities/course";
import { useAppSelector } from "@shared/lib/hooks";
import { COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import { Button } from "@shared/ui";
import emptyCartImg from "@img/empty-cart.png";
import styles from "./CartList.module.scss";

export const CartList: React.FC = () => {
  const courses: ICourse[] = useAppSelector((state: RootState) => state.user.user?.cart!);
  const totalPrice: number = courses.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Курс</th>
            <th>Бағасы</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td className={styles.course}>
                <img src={course.imageUrl} alt={course.title} />
                <div>
                  <h6>{course.title}</h6>
                </div>
              </td>
              <td className={styles.price}>
                {course.price} <FontAwesomeIcon icon={faTengeSign} />
              </td>
              <td>
                <CartDeleteButton courseId={course._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {courses.length === 0 ? (
        <div className={styles.empty}>
          <img src={emptyCartImg} />
          <div className={styles["empty-wrapper"]}>
            <h6 className={styles["empty-text"]}>Cебетте ештене жоқ</h6>
            <Button isLink={true} title="Курстар тізімі" link={COURSES_PAGE_ROUTE} />
          </div>
        </div>
      ) : (
        <div className={styles.line}>
          <Link className={styles.link} to={COURSES_PAGE_ROUTE}>
            <FontAwesomeIcon icon={faAngleLeft} /> Курстар тізімі
          </Link>
          <h4 className={styles.total}>
            Барлығы:
            <span>
              {totalPrice}
              <FontAwesomeIcon icon={faTengeSign} />
            </span>
          </h4>
        </div>
      )}
    </div>
  );
};
