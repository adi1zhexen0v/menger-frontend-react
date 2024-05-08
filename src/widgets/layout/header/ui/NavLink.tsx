import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import styles from "./Header.module.scss";

interface Props {
  link: string;
  title: string;
}

export const NavLink: React.FC<Props> = ({ link, title }) => {
  const location = useLocation();
  const classes =
    location.pathname === link
      ? classNames(styles["link-item"], styles["link-item__active"])
      : styles["link-item"];
  return (
    <li className={classes}>
      <Link to={link}>{title}</Link>
    </li>
  );
};
