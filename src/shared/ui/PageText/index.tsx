import styles from "./PageText.module.scss";

interface Props {
  children: string;
}

export const PageText: React.FC<Props> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};
