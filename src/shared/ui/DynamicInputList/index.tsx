import React, { useState, ChangeEvent, useEffect } from "react";
import { IconType } from "react-icons/lib";
import { FaPlus } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import styles from "./DynamicInputList.module.scss";

interface Props {
  title: string;
  placeholder: string;
  Icon: IconType;
  value?: string[];
  onChange: (value: string[]) => void;
}

export const DynamicInputList: React.FC<Props> = ({
  title,
  placeholder,
  value = [""],
  Icon,
  onChange
}) => {
  const [inputs, setInputs] = useState<string[]>(value);

  useEffect(() => {
    setInputs(value);
  }, [value]);

  const handleInputChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    onChange(newInputs);
  };

  const addInput = () => {
    const newInputs = [...inputs, ""];
    setInputs(newInputs);
    onChange(newInputs);
  };

  const removeInput = (index: number) => () => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs);
    onChange(newInputs);
  };

  return (
    <div>
      <p className={styles.title}>{title}</p>
      {inputs.map((value, index) => (
        <div key={index} className={styles.block}>
          <input
            type="text"
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange(index)}
          />
          <div className={styles.icon}>
            <Icon />
          </div>
          {inputs.length > 1 && <CiTrash className={styles.remove} onClick={removeInput(index)} />}
        </div>
      ))}
      <button type="button" className={styles.add} onClick={addInput}>
        <FaPlus />
        Жаңа артықшылықты қосу
      </button>
    </div>
  );
};
