import styles from "./Page.module.scss";

interface Props {
  title: string;
}

export const PageTitle: React.FC<Props> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
