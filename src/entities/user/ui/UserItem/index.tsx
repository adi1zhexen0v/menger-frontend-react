import { IUser } from "@entities/user/model";
import defaultProfilePicture from "@img/profile-picture.png";
import pointsImg from "@img/xp.png";
import styles from "./UserItem.module.scss";
import { UserRole } from "@shared/consts/enums";

interface Props {
  user: IUser;
  num: number;
}

export const UserItem: React.FC<Props> = ({ user, num }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.text}>{num}</div>
        <img
          className={styles.image}
          src={user.profilePictureUrl ? user.profilePictureUrl : defaultProfilePicture}
          alt={user.firstName}
        />
        <h6 className={styles.text}>
          {user.firstName} {user.lastName}
        </h6>
      </div>
      {user.role === UserRole.STUDENT && (
        <div className={styles.points}>
          <img src={pointsImg} alt="Points" />
          <p>{user.points}</p>
        </div>
      )}
    </div>
  );
};
