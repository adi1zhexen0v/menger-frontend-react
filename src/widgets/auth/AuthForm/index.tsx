import classNames from "classnames";
import { PageTitle } from "@shared/ui";
import styles from "./AuthForm.module.scss";

interface Props {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
}

export const AuthForm: React.FC<Props> = ({ imageUrl, title, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.image, styles.part)}>
        <img src={imageUrl} alt="Auth Image" />
      </div>
      <div className={classNames(styles.form, styles.part)}>
        <div className={styles["form-wrapper"]}>
          <PageTitle>{title}</PageTitle>
          {children}
        </div>
      </div>
    </div>
  );
};
