import styles from "./Selector.module.scss";
import Select, { OnChangeValue } from "react-select";

interface IOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  currentSelect: string;
  options: IOption[];
  onChange: (value: string) => void;
  name: string;
}

function FormSelect(props: FormSelectProps) {
  const { currentSelect, options, onChange, name } = props;

  const getValue = (): OnChangeValue<IOption, boolean> | null | undefined => {
    return currentSelect ? options.find((c) => c.value === currentSelect) : null;
  };

  const handleOnChange = (newValue: OnChangeValue<IOption, boolean> | undefined) => {
    const selectedValue = newValue ? (newValue as IOption).value : "";
    onChange(selectedValue);
  };

  return (
    <div className={styles.select_container}>
      <h1>{name}</h1>
      <Select onChange={handleOnChange} value={getValue()} options={options} />
    </div>
  );
}

export default FormSelect;