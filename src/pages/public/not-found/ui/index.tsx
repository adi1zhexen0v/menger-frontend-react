import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { DASHBOARD_MAIN_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "@shared/consts/routes";
import { Button } from "@shared/ui";
import notFoundImage from "@img/not-found.svg";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  return isDashboard ? (
    <div className={classNames(styles.container, styles.dashboard)}>
      <img src={notFoundImage} alt="Not Found" className={styles.image} />
      <div className={styles.wrapper}>
        <h2>Бет табылмады</h2>
        <Button isLink={true} link={DASHBOARD_MAIN_PAGE_ROUTE} title="Басты бетке өту" />
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <img src={notFoundImage} alt="Not Found" className={styles.image} />
      <div className={styles.wrapper}>
        <h2>Бет табылмады</h2>
        <Button isLink={true} link={MAIN_PAGE_ROUTE} title="Басты бетке өту" />
      </div>
    </div>
  );
};
