import { Link } from "react-router-dom";
import { IUser } from "@entities/user";
import { DASHBOARD_PROFILE_PAGE_ROUTE } from "@shared/consts/routes";
import { UserRole } from "@shared/consts/enums";
import defaultProfilePicture from "@img/profile-picture.png";
import diamondImage from "@img/diamond.png";
import pointsImage from "@img/xp.png";
import styles from "./Header.module.scss";

interface Props {
  activeUser: IUser;
}

export const Header: React.FC<Props> = ({ activeUser }) => {
  return (
    <div className={styles.header}>
      {activeUser.role === UserRole.STUDENT && (
        <div className={styles.list}>
          <div className={styles.item}>
            <img src={diamondImage} alt="Diamond" />
            <h6>{activeUser.diamonds}</h6>
          </div>
          <div className={styles.item}>
            <img src={pointsImage} alt="XP" />
            <h6>{activeUser.points}</h6>
          </div>
        </div>
      )}
      <Link to={DASHBOARD_PROFILE_PAGE_ROUTE} className={styles.profile}>
        <img
          src={activeUser.profilePictureUrl ? activeUser.profilePictureUrl : defaultProfilePicture}
          alt={activeUser._id}
        />
        <h4>
          {activeUser.firstName} {activeUser.lastName}
        </h4>
      </Link>
    </div>
  );
};
