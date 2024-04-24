import { Link } from "react-router-dom";
import { COURSES_PAGE_ROUTE, FAQ_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "@shared/consts/routes";
import { NavLink } from "./NavLink";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.part}>
          <Link to={MAIN_PAGE_ROUTE} className={styles.logo}>
            Men'ger
          </Link>
          <ul className={styles["link-list"]}>
            <NavLink link={COURSES_PAGE_ROUTE} title="Курстар" />
            <NavLink link={FAQ_PAGE_ROUTE} title="Сұрақ & Жауап" />
          </ul>
        </div>
        <div className={styles.part}></div>
      </nav>
    </header>
  );
};
