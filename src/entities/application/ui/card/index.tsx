import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCheck,
  faEnvelope,
  faUser,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import { IApplication } from "@entities/application/model";
import { formatDate } from "@shared/utils";
import { Button } from "@shared/ui";
import styles from "./ApplicationCard.module.scss";

interface IApplicationCardButton {
  icon: IconDefinition;
}

const applicationCardButtons: IApplicationCardButton[] = [
  {
    icon: faUser
  },
  {
    icon: faEnvelope
  },
  {
    icon: faVideo
  },
  {
    icon: faCheck
  }
];

interface Props {
  application: IApplication;
}

export const ApplicationCard: React.FC<Props> = ({ application }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {applicationCardButtons.map((item, index) => (
          <div
            className={classNames(styles.btn, { [styles["btn-active"]]: activeIndex === index })}
            key={index}
            onClick={() => setActiveIndex(index)}>
            <FontAwesomeIcon icon={item.icon} />
          </div>
        ))}
      </div>
      {activeIndex === 0 && (
        <>
          <div className={styles.heading}>
            <h2>Өтініш беруші</h2>
          </div>
          <div className={styles.user}>
            <div>
              <h6 className={styles.title}>Аты-жөні</h6>
              <p className={styles.text}>{application.fullName}</p>
            </div>
            <div>
              <h6 className={styles.title}>Ұйымның аты</h6>
              <p className={styles.text}>{application.organizationName}</p>
            </div>
            <div>
              <h6 className={styles.title}>E-mail</h6>
              <p className={styles.text}>{application.email}</p>
            </div>
            <div>
              <h6 className={styles.title}>Телефон нөмірі</h6>
              <p className={styles.text}>{application.phoneNumber}</p>
            </div>
          </div>
        </>
      )}
      {activeIndex === 1 && (
        <div>
          <div className={styles.heading}>
            <h2>Өтініш мазмұны</h2>
          </div>
          <h6 className={styles.title}>Өтініш</h6>
          <p className={styles.text}>{application.text}</p>
        </div>
      )}
      {activeIndex === 2 && (
        <div>
          <div className={styles.heading}>
            <h2>Өтініш берушімен байланыс</h2>
          </div>
          <h6 className={styles.title}>Қоңырау уақыты</h6>
          <p className={styles.text}>{formatDate(application.meetingDate)}</p>
          <Button
            isLink={true}
            link={application.meetingStartUrl}
            title="Zoom конферециясын бастау"
            isNewBlank={true}
            icon={faVideo}
            marginTop={16}
          />
        </div>
      )}
      {activeIndex === 3 && (
        <div>
          <div className={styles.heading}>
            <h2>Өтініш жауабы</h2>
          </div>
        </div>
      )}
    </div>
  );
};
