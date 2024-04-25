import notFoundImage from "@shared/assets/img/not-found.svg";
import { Button } from "@shared/ui";
import { MAIN_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={notFoundImage} alt="Not Found" className={styles.image} />
      <div className={styles.wrapper}>
        <h2>Бет табылмады</h2>
        <Button isLink={true} link={MAIN_PAGE_ROUTE} title="Басты бетке өту" />
      </div>
    </div>
  );
};
