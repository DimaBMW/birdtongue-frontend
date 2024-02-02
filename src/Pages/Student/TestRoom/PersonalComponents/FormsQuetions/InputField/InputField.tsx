// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./InputField.module.scss";
// интерфейс
interface InputFieldProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  }
  const InputField: React.FC<InputFieldProps> = ({ onChange, value}) => {
    return (
      <div className={styles.InputField_container}>
        <div className={styles.userform_inputbox}>
          <h1>Response options</h1>
          <input type="text" onChange={onChange} value={value} className={`${styles.input} ${value==''?styles.errors:''}`}/>
          {value==''?
            <div className={styles.text_errors}>Error Description</div>
            :
            ''
          }
        </div>
      </div>
    );
  };

export default InputField;