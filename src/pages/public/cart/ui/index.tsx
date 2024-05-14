import { CartList, CartPayment } from "@widgets/cart";
import { PageTitle } from "@shared/ui";
import styles from "./CartPage.module.scss";

export const CartPage: React.FC = () => {
  return (
    <div>
      <PageTitle>Курстар себеті</PageTitle>
      <div className={styles.container}>
        <CartList />
        <CartPayment />
      </div>
    </div>
  );
};
