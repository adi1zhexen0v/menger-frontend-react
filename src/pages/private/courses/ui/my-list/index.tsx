import { CoursesGrid } from "@widgets/course";
import { useAuthUser } from "@entities/user";
import { Button, PageText, PageTitle } from "@shared/ui";
import emptyImg from "@img/empty-cart.png";
import styles from "./DashboardMyCoursesPage.module.scss";
import { COURSES_PAGE_ROUTE } from "@shared/consts/routes";

export const DashboardMyCoursesPage: React.FC = () => {
  const { activeUser } = useAuthUser();

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <PageTitle isSmall={true}>Менің курстарым</PageTitle>
      </div>
      <div className={styles.wrapper}>
        {activeUser.courses.length > 0 ? (
          <div className={styles.list}>
            <CoursesGrid courses={activeUser.courses} gridTemplateColumns={3} />
          </div>
        ) : (
          <div className={styles.empty}>
            <img src={emptyImg} className={styles.image} />
            <div className={styles.info}>
              <PageTitle isSmall={true}>Сізде сатып алынған курстар жоқ!</PageTitle>
              <PageText>
                Қазір сізді сатып алынған курстар жоқ. Курстарды сатып алу үшін басты курстар бетіне
                өтіңіз!
              </PageText>
              <Button isLink={true} link={COURSES_PAGE_ROUTE} title="Курстар беті" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
