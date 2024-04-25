import styles from "./Page.module.scss";

interface Props {
  children: string;
}

export const PageTitle: React.FC<Props> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
