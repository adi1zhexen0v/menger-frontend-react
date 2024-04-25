import styles from "./Error.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Error: React.FC<Props> = ({ children }) => {
  return <p className={styles.error}>{children}</p>;
};
