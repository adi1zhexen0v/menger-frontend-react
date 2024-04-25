import React from "react";
import styles from "./PageText.module.scss";

type TextAlign = "left" | "right" | "center" | "justify" | "initial" | "inherit";

interface Props {
  textAlign?: TextAlign;
  children: React.ReactNode;
}

export const PageText: React.FC<Props> = ({ children, textAlign }) => {
  return (
    <p className={styles.text} style={{ textAlign }}>
      {children}
    </p>
  );
};
