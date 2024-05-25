import { useParams } from "react-router-dom";
import { useOrganizationBySlug } from "@entities/organization";
import { Loader, PageTitle } from "@shared/ui";
import styles from "./DashboardEditOrganizationPage.module.scss";

export const DashboardEditOrganizationPage: React.FC = () => {
  const { slug } = useParams();
  const { data, isLoading } = useOrganizationBySlug(slug!);

  return (
    <section className={styles.container}>
      <PageTitle isSmall={true}>{isLoading ? "" : `"${data!.name}" ұйымы`}</PageTitle>
      <div className={styles.wrapper}>{isLoading ? <Loader /> : <div></div>}</div>
    </section>
  );
};
