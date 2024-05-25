import { Link } from "react-router-dom";
import { faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { IoCartSharp } from "react-icons/io5";
import { RootState } from "@app/store";
import { useAuth } from "@entities/user";
import {
  CART_PAGE_ROUTE,
  COURSES_PAGE_ROUTE,
  DASHBOARD_MAIN_PAGE_ROUTE,
  FAQ_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  MAIN_PAGE_ROUTE
} from "@shared/consts/routes";
import { Button } from "@shared/ui";
import { useAppSelector } from "@shared/lib/hooks";
import { NavLink } from "./NavLink";
import styles from "./Navbar.module.scss";
import { UserRole } from "@shared/consts/enums";

export const Navbar: React.FC = () => {
  const isAuth = useAuth();
  const user = useAppSelector((state: RootState) => state.user.user);

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
        <div className={styles.part}>
          {isAuth ? (
            <>
              {user?.role === UserRole.STUDENT && (
                <Link to={CART_PAGE_ROUTE} className={styles.cart}>
                  <IoCartSharp />
                  <span>{user?.cart.length}</span>
                </Link>
              )}
              <Button
                isLink={true}
                link={DASHBOARD_MAIN_PAGE_ROUTE}
                title="Менің аккаунтым"
                icon={faUser}
                gap={16}
              />
            </>
          ) : (
            <Button title="Кіру" icon={faRightToBracket} isLink={true} link={LOGIN_PAGE_ROUTE} />
          )}
        </div>
      </nav>
    </header>
  );
};
