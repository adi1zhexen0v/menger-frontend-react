import styles from "./Loader.module.scss";

interface Props {
  isFullPage?: boolean;
}

export const Loader: React.FC<Props> = ({ isFullPage = false }) => {
  return isFullPage ? (
    <div className={styles.full}>
      <span className={styles["lg-loader"]}></span>
    </div>
  ) : (
    <div className={styles.container}>
      <span className={styles["lg-loader"]}></span>
    </div>
  );
};
