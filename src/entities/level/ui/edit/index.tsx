import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ILevel } from "@entities/level";
import { Button, PageText } from "@shared/ui";
import {
  DASHBOARD_CREATE_THEORY_PAGE_ROUTE,
  DASHBOARD_MANAGE_WORD_TASK_PAGE_ROUTE
} from "@shared/consts/routes";
import styles from "./EditLevelItem.module.scss";

interface Props {
  level: ILevel;
}

export const EditLevelItem: React.FC<Props> = ({ level }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log(level);
  console.log(!!level.theoryId);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h6 className={styles.title}>
          <span>Модуль {level.order}: </span>
          {level.title}
        </h6>
        <FontAwesomeIcon
          style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
          icon={faAngleDown}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className={styles.body}>
          <PageText>{level.description}</PageText>
          <div className={styles.list}>
            <Button
              isLink={true}
              link={DASHBOARD_CREATE_THEORY_PAGE_ROUTE.replace(":id", level._id)}
              title={!!level.theoryId ? "Модульге теория жүктелген" : "Модульдегі теорияны басқару"}
              disabled={!!level.theoryId}
            />
            <Button
              isLink={true}
              link={DASHBOARD_MANAGE_WORD_TASK_PAGE_ROUTE.replace(":id", level._id)}
              title="Сөздік модулін басқару"
            />
          </div>
        </div>
      )}
    </div>
  );
};
