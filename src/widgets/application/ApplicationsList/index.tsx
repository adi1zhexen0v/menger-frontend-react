import { ApplicationCard, IApplication } from "@entities/application";
import styles from "./ApplicationsList.module.scss";

interface Props {
  applications: IApplication[];
}

export const ApplicationList: React.FC<Props> = ({ applications }) => {
  return (
    <div className={styles.grid}>
      {applications.map((application) => (
        <ApplicationCard application={application} key={application._id} />
      ))}
    </div>
  );
};
