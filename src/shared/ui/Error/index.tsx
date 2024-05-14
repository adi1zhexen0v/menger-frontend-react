import styles from "./Error.module.scss";

interface Props {
  children: React.ReactNode;
  marginTop?: number;
  isSmallError?: boolean;
}

export const Error: React.FC<Props> = ({ children, marginTop = 0, isSmallError = false }) => {
  return (
    <p className={isSmallError ? styles.small : styles.error} style={{ marginTop: `${marginTop}px` }}>
      {children}
    </p>
  );
};
