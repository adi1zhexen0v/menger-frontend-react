import { useLevelById } from "@entities/level";
import { useTheoryById } from "@entities/theory";
import { useParams } from "react-router-dom";
import styles from "./DashboardTheoryPage.module.scss";
import { BackLink, Loader, PageTitle } from "@shared/ui";
import { DASHBOARD_SINGLE_COURSE_PAGE_ROUTE } from "@shared/consts/routes";
import { TheoryItem } from "@widgets/theory";

export const DashboardTheoryPage: React.FC = () => {
  const { id } = useParams();
  const { data: level, isLoading: levelIsLoading } = useLevelById(id!);
  const { data: theory, isLoading: theoryIsLoading } = useTheoryById(id!);

  const isLoading = levelIsLoading || theoryIsLoading;

  return (
    <div className={styles.container}>
      {level && (
        <div className={styles.header}>
          <BackLink
            link={DASHBOARD_SINGLE_COURSE_PAGE_ROUTE.replace(":slug", level.courseId.slug)}
          />
          <div>
            <PageTitle isSmall={true}>{level.title}</PageTitle>
            <PageTitle isGray={true}>Модульдың теория бөлімі</PageTitle>
          </div>
        </div>
      )}
      <div className={styles.wrapper}>
        {isLoading ? <Loader /> : <TheoryItem theory={theory!} />}
      </div>
    </div>
  );
};
