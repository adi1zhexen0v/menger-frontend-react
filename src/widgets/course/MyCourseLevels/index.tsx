import { IMyLevel, MyLevelItem, sortMyLevelsByOrder } from "@entities/level";
import styles from "./MyCourseLevels.module.scss";

interface Props {
  levels: IMyLevel[];
}

export const MyCourseLevels: React.FC<Props> = ({ levels }) => {
  return (
    <div>
      {levels.length > 0 && <p className={styles.title}>Модульдер тізімі</p>}
      <div className={styles.list}>
        {sortMyLevelsByOrder(levels).map((item) => (
          <MyLevelItem level={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};
