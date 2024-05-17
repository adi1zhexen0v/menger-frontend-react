import styles from "./Page.module.scss";

type TextAlign = "left" | "right" | "center" | "justify" | "initial" | "inherit";

interface Props {
  maxWidth?: number;
  marignBottom?: number;
  textAlign?: TextAlign;
  isSmall?: boolean;
  children: string;
}

export const PageTitle: React.FC<Props> = ({
  children,
  maxWidth,
  marignBottom,
  textAlign,
  isSmall
}) => {
  return isSmall ? (
    <h2
      className={styles.dashboard}
      style={
        maxWidth || textAlign || marignBottom
          ? { maxWidth: `${maxWidth}px`, textAlign, marginBottom: `${marignBottom}px` }
          : {}
      }>
      {children}
    </h2>
  ) : (
    <h2
      className={styles.title}
      style={
        maxWidth || textAlign || marignBottom
          ? { maxWidth: `${maxWidth}px`, textAlign, marginBottom: `${marignBottom}px` }
          : {}
      }>
      {children}
    </h2>
  );
};
