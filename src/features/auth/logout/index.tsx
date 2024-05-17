import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { deleteActiveUser } from "@entities/user";
import { useAppDispatch } from "@shared/lib/hooks";
import { MAIN_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./LogoutButton.module.scss";

export const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(deleteActiveUser(null));
    navigate(MAIN_PAGE_ROUTE);
  };

  return (
    <div className={styles.link} onClick={logout}>
      <FiLogOut />
      <h6>Шығу</h6>
    </div>
  );
};
