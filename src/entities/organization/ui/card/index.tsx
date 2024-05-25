import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { IOrganization } from "@entities/organization";
import { DASHBOARD_ORGANIZATIONS_PAGE_ROUTE } from "@shared/consts/routes";
import defaultOrganizationPicture from "@img/default-organization.png";
import styles from "./OrganizationCard.module.scss";

interface Props {
  organization: IOrganization;
}

export const OrganizationCard: React.FC<Props> = ({ organization }) => {
  return (
    <div className={styles.card}>
      <img
        src={organization.imageUrl ? organization.imageUrl : defaultOrganizationPicture}
        alt={organization.name}
        className={styles.image}
      />
      <div>
        <h4 className={styles.title}>{organization.name}</h4>
        {organization.description && <p>{organization.description}</p>}
        <Link
          to={DASHBOARD_ORGANIZATIONS_PAGE_ROUTE + "/" + organization.slug}
          className={styles.link}>
          <TbEdit />
          <p>Толығырақ </p>
        </Link>
      </div>
    </div>
  );
};
