import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCheck,
  faEnvelope,
  faUser,
  faVideo,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { IApplication, useAcceptApplication, useDenyApplication } from "@entities/application/";
import { formatDate } from "@shared/utils";
import { Button, Loader, Toast } from "@shared/ui";
import styles from "./ApplicationCard.module.scss";

interface IApplicationCardButton {
  icon: IconDefinition;
}

const applicationCardButtons: IApplicationCardButton[] = [
  { icon: faUser },
  { icon: faEnvelope },
  { icon: faVideo },
  { icon: faCheck }
];

interface Props {
  application: IApplication;
}

export const ApplicationCard: React.FC<Props> = ({ application }) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {
    mutate: acceptMutate,
    isError: acceptIsError,
    isLoading: acceptIsLoading
  } = useAcceptApplication();
  const {
    mutate: denyMutate,
    isError: denyIsError,
    isLoading: denyIsLoading
  } = useDenyApplication();

  const handleClickAcceptApplication = async () => {
    acceptMutate(application._id, {
      onSuccess: () => {
        setIsHidden(true);
      }
    });
  };

  const handleClickDenyApplication = async () => {
    denyMutate(application._id, {
      onSuccess: () => {
        setIsHidden(true);
      }
    });
  };

  return (
    <div className={classNames(styles.card, { [styles.hidden]: isHidden })}>
      <p className={styles.date}>{formatDate(application.createdAt)}</p>
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
          <h6 className={styles.title}>Өтінішті қабылдаймыз ба?</h6>
          <div className={styles.buttons}>
            <div
              className={classNames(styles.button, styles.red)}
              onClick={handleClickDenyApplication}>
              <FontAwesomeIcon icon={faX} />
            </div>
            <div className={styles.button} onClick={handleClickAcceptApplication}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
      )}
      {(acceptIsLoading || denyIsLoading) && <Loader isFullPage={true} />}
      {(acceptIsError || denyIsError) && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Өтінішті қабылдау кезінде қате пайда болды"
        />
      )}
    </div>
  );
};
