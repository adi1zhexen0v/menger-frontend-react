import { OrganizationCard, IOrganization } from "@entities/organization";
import styles from "./OrganizationsList.module.scss";

interface Props {
  organizations: IOrganization[];
}

export const OrganizationsList: React.FC<Props> = ({ organizations }) => {
  return (
    <div className={styles.grid}>
      {organizations.map((organization) => (
        <OrganizationCard organization={organization} key={organization._id} />
      ))}
    </div>
  );
};
