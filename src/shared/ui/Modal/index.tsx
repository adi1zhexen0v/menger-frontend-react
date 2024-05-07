import { useState } from "react";
import styles from "./Modal.module.scss";

interface Props {
  children: React.ReactNode;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

export const Modal: React.FC<Props> = ({
  children,
  paddingHorizontal = 48,
  paddingVertical = 40
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const element = e.target as Element;

    if (element.className.includes("layout")) {
      setIsOpen(false);
    }
  };

  return (
    isOpen && (
      <div className={styles.layout} onClick={closeModal}>
        <div
          className={styles.container}
          style={{ padding: `${paddingVertical}px ${paddingHorizontal}px` }}>
          {children}
        </div>
      </div>
    )
  );
};
