import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Button, PageText, PageTitle } from "@shared/ui";
import { LOGIN_PAGE_ROUTE } from "@shared/consts/routes";
import cartModalImage from "@img/cart-modal-image.png";
import styles from "./CartModal.module.scss";

export const CartModal: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={cartModalImage} alt="Cart Modal" />
      </div>
      <div>
        <PageTitle>Курсты сатып алу үшін аккаунтқа кіру керек!</PageTitle>
        <PageText>
          Аккаунтқа кіргеннен кейін, сіздің барлық оқу материалдарыңыз бір орында сақталады, бұл
          сіздің білім алу процесіңізді жеңілдетеді және тиімді етеді.
        </PageText>
        <Button
          title="Платформаға кіру"
          isLink={true}
          link={LOGIN_PAGE_ROUTE}
          marginTop={24}
          icon={faRightToBracket}
        />
      </div>
    </div>
  );
};
