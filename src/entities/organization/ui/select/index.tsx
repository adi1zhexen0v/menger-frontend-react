import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IOrganization } from "@entities/organization";
import styles from "./SelectOrganization.module.scss";

interface Props {
  organizations: IOrganization[];
  activeId: string;
  setValue: (value: string) => void;
}

export const SelectOrganization: React.FC<Props> = ({ organizations, activeId, setValue }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const activeOrganization = organizations.find((item) => item._id === activeId);

  const handleChange = (id: string) => {
    setValue(id);
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
        {activeOrganization ? (
          <>
            <img
              src={activeOrganization.imageUrl}
              alt={activeOrganization.name}
              className={styles.image}
            />
            <p className={styles.text}>{activeOrganization.name}</p>
          </>
        ) : (
          <p className={styles.text}>Ұйымды таңдаңыз</p>
        )}
        <MdKeyboardArrowDown className={styles.arrow} />
      </div>
      {isOpen && (
        <div className={styles.list}>
          {organizations.map((item) => (
            <div className={styles.option} onClick={() => handleChange(item._id)}>
              <img src={item.imageUrl} alt={item.name} className={styles.image} />
              <p className={styles.text}>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
