import { Link } from "react-router-dom";
import { RootState } from "@app/store";
import { LogoutButton } from "@features/auth";
import { UserRole } from "@shared/consts/enums";
import { sidebarLinks } from "@shared/config/sidebar.config";
import { useAppSelector } from "@shared/lib/hooks";
import { MAIN_PAGE_ROUTE } from "@shared/consts/routes";
import logo from "@img/logo.png";
import { SidebarLink } from "./SidebarLink";
import styles from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
  const activeUserRole: UserRole = useAppSelector((state: RootState) => state.user.user?.role)!;

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src={logo} alt="Men'ger" />
          <Link to={MAIN_PAGE_ROUTE}>Men'ger</Link>
        </div>
        <nav>
          {sidebarLinks
            .filter((link) => link.roles.includes(activeUserRole))
            .map((item, index) => (
              <SidebarLink Icon={item.icon} link={item.link} title={item.title} key={index} />
            ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <LogoutButton />
      </div>
    </div>
  );
};
