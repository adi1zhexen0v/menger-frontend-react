import { ApplicationList } from "@widgets/application";
import { useGetAllApplications } from "@entities/application";
import { Loader, PageTitle } from "@shared/ui";
import styles from "./ApplicationPage.module.scss";

export const DashboardApplicationsPage: React.FC = () => {
  const { data, isLoading } = useGetAllApplications();

  return (
    <section className={styles.container}>
      <PageTitle isSmall={true}>Өтініштер тізімі</PageTitle>
      <div className={styles.wrapper}>
        {isLoading ? <Loader /> : <ApplicationList applications={data!} />}
      </div>
    </section>
  );
};
