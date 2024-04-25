import { faqQuestions, FaqItem } from "@entities/faq";
import { PageText, PageTitle } from "@shared/ui/";
import faqImage from "@shared/assets/img/faq-item.png";
import styles from "./FaqPage.module.scss";

export const FaqPage: React.FC = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.part}>
        <PageTitle>Жиі қойылатын сұрақтарға жауаптар</PageTitle>
        <PageText>
          Мұнда сіз біздің курстар туралы жиі кездесетін сұрақтарға жауап таба аласыз. Егер сізде
          қосымша сұрақтар туындаса, біздің қолдау қызметіне хабарласыңыз.
        </PageText>
        <img src={faqImage} alt="FAQ" className={styles.img} />
      </div>
      <div className={styles.part}>
        {faqQuestions.map((faq) => (
          <FaqItem question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};
