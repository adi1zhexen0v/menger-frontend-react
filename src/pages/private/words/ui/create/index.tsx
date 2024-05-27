import { CreateWordForm } from "@features/word";
import { BackLink, PageTitle } from "@shared/ui";
import { DASHBOARD_WORDS_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./DashboardAddWordPage.module.scss";

export const DashboardAddWordPage: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <BackLink link={DASHBOARD_WORDS_PAGE_ROUTE} />
        <PageTitle isSmall={true}>Жаңа сөзді қосу</PageTitle>
      </div>
      <div className={styles.wrapper}>
        <CreateWordForm />
      </div>
    </section>
  );
};
