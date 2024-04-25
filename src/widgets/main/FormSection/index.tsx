import { ApplicationForm } from "@features/application";
import { PageText, PageTitle } from "@shared/ui";
import applicationFormImage from "@img/application-form-image.png";
import styles from "./FormSection.module.scss";

export const FormSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <PageTitle textAlign="center">Өтініш қалдыру</PageTitle>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={applicationFormImage} alt="Application Form" />
          <PageText textAlign="center">
            Кәсіби ағылшын тілінің ғажайып әлеміне енгініз келсе, өтініш дәл қазір қалдырыңыз, біз
            жақын арада сізбен байланысамыз.
          </PageText>
        </div>
        <ApplicationForm />
      </div>
    </section>
  );
};
