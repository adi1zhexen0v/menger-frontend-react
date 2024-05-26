import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { WordsGrid } from "@widgets/word";
import { useWords } from "@entities/word";
import { Button, Loader, PageTitle } from "@shared/ui";
import { DASHBOARD_ADD_WORD_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./DashboardWordsPage.module.scss";

export const DashboardWordsPage: React.FC = () => {
  const { data, isLoading } = useWords();

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <PageTitle isSmall={true}>Сөздік</PageTitle>
        <Button
          isLink={true}
          title="Жаңа сөзді қосу"
          icon={faPlus}
          link={DASHBOARD_ADD_WORD_PAGE_ROUTE}
        />
      </div>
      <div className={styles.wrapper}>{isLoading ? <Loader /> : <WordsGrid words={data!} />}</div>
    </section>
  );
};
