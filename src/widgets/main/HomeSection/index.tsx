import homeSectionImage from "@img/home-section-image.png";
import { COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import { Button } from "@shared/ui";
import styles from "./HomeSection.module.scss";

export const HomeSection: React.FC = () => {
  return (
    <section className={styles.home}>
      <div className={styles.part}>
        <h1 className={styles.title}>Халықаралық <span>жетістік тілін үйрену</span> - кең әлемге бір қадам!</h1>
        <p className={styles.text}>
          Қазақ тіл байлығы арқылы ағылшын тілін меңгеріп, кәсіби<br/>дамудың көкжиегін ашыңыз. Men’ger-мен бірге кәсіби<br/>жетістіктерге жете бер!
        </p>
        <Button
          isLink={true}
          link={COURSES_PAGE_ROUTE}
          title="Бастау"
          marginTop={20}
        />
      </div>
      <div className={styles.part}>
        <img src={homeSectionImage} alt="Home Section" />
      </div>
    </section>
  );
}