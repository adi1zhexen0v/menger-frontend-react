import styles from "./Error.module.scss";

interface Props {
  children: React.ReactNode;
  marginTop?: number;
}

export const Error: React.FC<Props> = ({ children, marginTop = 0 }) => {
  return (
    <p className={styles.error} style={{ marginTop: `${marginTop}px` }}>
      {children}
    </p>
  );
};
