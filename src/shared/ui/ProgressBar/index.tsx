import styles from "./ProgressBar.module.scss";

interface Props {
  progressPercentage: number;
}

export const ProgressBar: React.FC<Props> = ({ progressPercentage }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.percent}>0%</p>
      <div className={styles.bar}>
        <div className={styles.progress} style={{ width: `${progressPercentage}%` }}></div>
      </div>
      {progressPercentage > 0 && progressPercentage < 100 && (
        <p
          className={styles.current}
          style={{ left: `${(progressPercentage * 240) / 100 + 20}px` }}>
          {progressPercentage}%
        </p>
      )}
      <p className={styles.percent}>100%</p>
    </div>
  );
};
