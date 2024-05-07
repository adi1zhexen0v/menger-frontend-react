import { ILevel } from "@entities/level";
import styles from "./LevelItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { PageText } from "@shared/ui";

interface Props {
  level: ILevel;
}

export const LevelItem: React.FC<Props> = ({ level }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        </div>
      )}
    </div>
  );
};
