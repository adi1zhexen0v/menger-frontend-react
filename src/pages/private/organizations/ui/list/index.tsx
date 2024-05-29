import { OrganizationsList } from "@widgets/organization";
import { IOrganization, useOrganizations } from "@entities/organization";
import { Loader, PageTitle } from "@shared/ui";
import styles from "./DashboardOrganizationsPage.module.scss";
import { IUser } from "@entities/user";
import { useAppSelector } from "@shared/lib/hooks";
import { RootState } from "@app/store";
import { UserRole } from "@shared/consts/enums";

export const DashboardOrganizationsPage: React.FC = () => {
  const { data, isLoading } = useOrganizations();
  const user: IUser = useAppSelector((state: RootState) => state.user.user!);
  const organizationId: string | undefined | null = !!user.organizationId
    ? user.organizationId._id
    : undefined;

  console.log(user.organizationId);

  const filterOrganizations = (organizations: IOrganization[]) => {
    if (organizationId && user.role === UserRole.MANAGER) {
      return organizations.filter((item) => item._id === organizationId);
    }

    return organizations;
  };

  return (
    <section className={styles.container}>
      <PageTitle isSmall={true}>Ұйымдар тізімі</PageTitle>
      <div className={styles.wrapper}>
        {isLoading ? <Loader /> : <OrganizationsList organizations={filterOrganizations(data!)} />}
      </div>
    </section>
  );
};
