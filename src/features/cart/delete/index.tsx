import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CartDeleteButton.module.scss";
import { useRemoveCourseToCart } from "@entities/user";
import { Toast } from "@shared/ui";

interface Props {
  courseId: string;
}

export const CartDeleteButton: React.FC<Props> = ({ courseId }) => {
  const { mutate, isError } = useRemoveCourseToCart();

  const handleClickRemoveCourse = () => {
    mutate(courseId);
  };

  return (
    <>
      <FontAwesomeIcon icon={faX} className={styles.button} onClick={handleClickRemoveCourse} />
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Курсты себеттен жою кезінде қате пайда болды"
        />
      )}
    </>
  );
};
