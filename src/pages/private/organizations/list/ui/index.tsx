import { OrganizationsList } from "@widgets/organization";
import { useOrganizations } from "@entities/organization";
import { Loader, PageTitle } from "@shared/ui";
import styles from "./DashboardOrganizationsPage.module.scss";

export const DashboardOrganizationsPage: React.FC = () => {
  const { data, isLoading } = useOrganizations();

  return (
    <section className={styles.container}>
      <PageTitle isSmall={true}>Ұйымдар тізімі</PageTitle>
      <div className={styles.wrapper}>
        {isLoading ? <Loader /> : <OrganizationsList organizations={data!} />}
      </div>
    </section>
  );
};
