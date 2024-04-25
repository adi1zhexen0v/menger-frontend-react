import styles from "./Page.module.scss";

type TextAlign = "left" | "right" | "center" | "justify" | "initial" | "inherit";

interface Props {
  maxWidth?: number;
  textAlign?: TextAlign;
  children: string;
}

export const PageTitle: React.FC<Props> = ({ children, maxWidth, textAlign }) => {
  return (
    <h2 className={styles.title} style={{ maxWidth: `${maxWidth}px`, textAlign }}>
      {children}
    </h2>
  );
};
