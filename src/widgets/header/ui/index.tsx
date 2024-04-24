import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { MAIN_PAGE } from "@shared/consts/routes";

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div>
        <Link to={MAIN_PAGE} className={styles.logo}>
          Men'ger
        </Link>
      </div>
      <div></div>
    </header>
  );
};
