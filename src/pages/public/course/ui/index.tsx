import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTengeSign } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { useCourseBySlug } from "@entities/course";
import { LevelItem, sortLevelsByOrder } from "@entities/level";
import { Button, Loader, PageText, PageTitle } from "@shared/ui";
import { LOGIN_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./CoursePage.module.scss";

export const CoursePage: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useCourseBySlug(slug!);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.part}>
        <PageTitle>{data!.title}</PageTitle>
        <h4 className={styles.title}>Курс туралы</h4>
        <PageText>{data!.description}</PageText>
        <h4 className={styles.title}>Курсты аяқтағаннан кейін:</h4>
        <ul>
          {data?.benefits.map((benefit) => (
            <li>
              <PageText>- {benefit}</PageText>
            </li>
          ))}
        </ul>
        <h4 className={styles.title}>Курс бағдарламасы:</h4>
        <div className={styles.levels}>
          {sortLevelsByOrder(data!.levels).map((level) => (
            <LevelItem level={level} />
          ))}
        </div>
      </div>
      <div className={classNames(styles.block, styles.part)}>
        <img src={data?.imageUrl} alt={data?.title} className={styles.image} />
        <div className={styles.overlay}></div>
        <p className={styles.text}>Құны</p>
        <h4 className={styles.price}>
          {data?.price} <FontAwesomeIcon icon={faTengeSign} />
        </h4>
        <div className={styles.info}>
          <h6>{data?.levels.length}</h6>
          <p className={styles.text}>Модуль</p>
        </div>
        <div className={styles.info}>
          <h6>127</h6>
          <p className={styles.text}>Оқушы</p>
        </div>
        <Button isLink={true} link={LOGIN_PAGE_ROUTE} title="Курсты сатып алу" marginTop={24} />
      </div>
    </div>
  );
};
