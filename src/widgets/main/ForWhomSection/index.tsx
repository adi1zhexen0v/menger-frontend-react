import { ForWhomItem, forWhomData } from "@entities/for-whom";
import { PageText, PageTitle } from "@shared/ui";
import styles from "./ForWhomSection.module.scss";

export const ForWhomSection: React.FC = () => {
  return (
    <section className={styles.forwhom}>
      <div>
        <PageTitle maxWidth={300}>Men'ger кімге келеді?</PageTitle>
        <PageText>
          Біздің курстар кәсіби ағылшын тілін үйренуге ұмтылатын көптеген адамдар үшін ажырамас
          әдістеме. Біздің курстар әсіресе кімге пайдалы болуы мүмкін?
        </PageText>
      </div>
      <div className={styles.grid}>
        {forWhomData.map((item, index) => (
          <ForWhomItem forWhom={item} key={index} />
        ))}
      </div>
    </section>
  );
};
