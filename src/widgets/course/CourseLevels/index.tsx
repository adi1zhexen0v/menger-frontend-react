import { useState } from "react";
import { CreateLevelForm } from "@features/level";
import { ICourse } from "@entities/course";
import { ILevel, EditLevelItem, sortLevelsByOrder } from "@entities/level";
import styles from "./CourseLevels.module.scss";

interface Props {
  course: ICourse;
}

export const CourseLevels: React.FC<Props> = ({ course }) => {
  const [levels, setLevels] = useState<ILevel[]>(course.levels);

  return (
    <>
      <CreateLevelForm courseId={course!._id} levels={levels} setLevels={setLevels} />
      {levels.length > 0 && <p className={styles.title}>Модульдер тізімі</p>}
      {sortLevelsByOrder(levels).map((item) => (
        <EditLevelItem level={item} key={item._id} />
      ))}
    </>
  );
};
