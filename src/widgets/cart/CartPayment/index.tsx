import { CartPaymentForm } from "@features/cart";
import styles from "./CartPayment.module.scss";

export const CartPayment: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Төлем қызметі</h3>
      <CartPaymentForm />
    </div>
  );
};
