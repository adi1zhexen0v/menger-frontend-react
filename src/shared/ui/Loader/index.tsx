import styles from "./Loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles["lg-loader"]}></span>
    </div>
  )
}
