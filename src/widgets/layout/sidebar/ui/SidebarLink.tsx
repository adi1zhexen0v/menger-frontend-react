import { Link, useLocation } from "react-router-dom";
import { IconType } from "react-icons/lib";
import classNames from "classnames";
import { removeTrailingSlash } from "@shared/utils";
import styles from "./Sidebar.module.scss";

interface Props {
  link: string;
  title: string;
  Icon: IconType;
}

export const SidebarLink: React.FC<Props> = ({ link, title, Icon }) => {
  const location = useLocation();
  const isActiveLink: boolean = removeTrailingSlash(location.pathname) === link;

  return (
    <Link to={link} className={classNames(styles.link, { [styles["link-active"]]: isActiveLink })}>
      <Icon />
      <h6>{title}</h6>
    </Link>
  );
};
