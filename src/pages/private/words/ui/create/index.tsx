import { CreateWordForm } from "@features/word";
import { PageTitle } from "@shared/ui";
import styles from "./DashboardAddWordPage.module.scss";

export const DashboardAddWordPage: React.FC = () => {
  return (
    <section className={styles.container}>
      <PageTitle isSmall={true}>Жаңа сөзді қосу</PageTitle>
      <div className={styles.wrapper}>
        <CreateWordForm/>
      </div>
    </section>
  );
};
