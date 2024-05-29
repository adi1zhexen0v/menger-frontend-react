import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CoursesGrid } from "@widgets/course";
import { useAllCourses } from "@entities/course";
import { useAuthUser } from "@entities/user";
import { Button, Loader, PageTitle } from "@shared/ui";
import { DASHBOARD_CREATE_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import { UserRole } from "@shared/consts/enums";
import styles from "./DashboardCoursesPage.module.scss";

export const DashboardCoursesPage: React.FC = () => {
  const { data, isLoading } = useAllCourses();
  const { activeUser } = useAuthUser();

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <PageTitle isSmall={true}>Курстар тізімі</PageTitle>
        {activeUser.role === UserRole.ADMIN && (
          <Button
            isLink={true}
            title="Жаңа курсты қосу"
            icon={faPlus}
            link={DASHBOARD_CREATE_COURSE_PAGE_ROUTE}
          />
        )}
      </div>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.list}>
            <CoursesGrid
              courses={activeUser.role === UserRole.MANAGER ? activeUser.courses : data!}
              gridTemplateColumns={3}
            />
          </div>
        )}
      </div>
    </section>
  );
};
