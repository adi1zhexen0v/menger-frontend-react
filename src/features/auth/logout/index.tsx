import { deleteActiveUser } from "@entities/user";
import { useAppDispatch } from "@shared/lib/hooks";
import { FiLogOut } from "react-icons/fi";

export const LogoutButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(deleteActiveUser(null));
  };

  return <FiLogOut onClick={logout} />;
};
