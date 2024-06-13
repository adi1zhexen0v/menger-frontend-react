import { Link } from "react-router-dom";
import { COURSES_PAGE_ROUTE, FAQ_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.logo}>Men'ger</div>
            <p className={styles.text}>
              Халықаралық жетістік тілін
              <br />
              үйрену - кең әлемге бір қадам!
            </p>
          </div>
          <div>
            <p className={styles.title}>Қызметтер:</p>
            <Link to={MAIN_PAGE_ROUTE} className={styles.link}>
              Бастысы
            </Link>
            <Link to={COURSES_PAGE_ROUTE} className={styles.link}>
              Курстар
            </Link>
            <Link to={FAQ_PAGE_ROUTE} className={styles.link}>
              Сұрақ & Жауап
            </Link>
          </div>
          <div>
            <p className={styles.title}>Байланыс ақпараты</p>
            <Link to="tel:87756104382" className={styles.link}>
              +7 (775) 610 43 82
            </Link>
            <Link to="mailto:menger.edu@gmail.com" className={styles.link}>
              menger.edu@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles["bottom-container"]}>
          <p className={styles["bottom-text"]}>2024 &copy; Men'ger</p>
          <p className={styles["bottom-text"]}>Барлық құқықтар қорғалған</p>
        </div>
      </div>
    </footer>
  );
};
