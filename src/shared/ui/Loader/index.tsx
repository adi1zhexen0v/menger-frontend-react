import styles from "./Loader.module.scss";

interface Props {
  isFullPage?: boolean;
  isSmall?: boolean;
}

export const Loader: React.FC<Props> = ({ isFullPage = false, isSmall = false }) => {
  if (isFullPage) {
    return (
      <div className={styles.full}>
        <span className={styles["lg-loader"]}></span>
      </div>
    );
  }

  if (isSmall) {
    return <span className={styles["sm-loader"]}></span>;
  }

  return (
    <div className={styles.container}>
      <span className={styles["lg-loader"]}></span>
    </div>
  );
};
