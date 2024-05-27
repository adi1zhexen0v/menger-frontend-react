import { useState } from "react";
import classNames from "classnames";
import { ApplicationList } from "@widgets/application";
import { IApplication, useApplications } from "@entities/application";
import { Loader, PageTitle } from "@shared/ui";
import styles from "./ApplicationPage.module.scss";

export const DashboardApplicationsPage: React.FC = () => {
  const [isAcceptedApplications, setIsAcceptedApplications] = useState<boolean>(false);

  const { data, isLoading } = useApplications();

  const sortApplications = (applications: IApplication[]): IApplication[] => {
    if (isAcceptedApplications) {
      return applications.filter((item) => item.isAccepted);
    }

    return applications.filter((item) => !("isAccepted" in item));
  };

  return (
    <section className={styles.container}>
      <PageTitle isSmall={true}>Өтініштер тізімі</PageTitle>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.list}>
              <div
                onClick={() => setIsAcceptedApplications(false)}
                className={classNames(styles.button, { [styles.active]: !isAcceptedApplications })}>
                Ашық өтініштер
              </div>
              <div
                onClick={() => setIsAcceptedApplications(true)}
                className={classNames(styles.button, { [styles.active]: isAcceptedApplications })}>
                Шешілген өтініштер
              </div>
            </div>
            <ApplicationList applications={sortApplications(data!)} />
          </>
        )}
      </div>
    </section>
  );
};
