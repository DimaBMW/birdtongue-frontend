// стили
import styles from "./Custom_Selector.module.scss";
// библиотеки
import React,{useState} from "react";
// компоненты
import Image from "../../../UI/Image/Image";
// icon
import arrow from "../../../../assets/Icon/AddFilm_Admin/arrow-down.svg";
// интерфейс для пропс selecor
interface InSelector{
    title:string;
    options: Option[];
}
interface Option {
    label: string;
    value:string;
}
const Selector:React.FC<InSelector>=({title,options})=>{
    // управление открытием и закрытием селектора
    const [selectorActive,setSelectorActive]=useState(false);
    const handleSelector=()=>{
        setSelectorActive(!selectorActive);
    }
    //упраление данными
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const handleSelectOption = (option: Option) => {
        setSelectedOption(option);
      };
     
    // возвращаем итог
    return(
        <div className={styles.selector_container}>
            <div className={styles.selector_container_title} onClick={handleSelector}>
                <h2>{title}</h2>
                <Image src={arrow} className={`selector-admin__icon ${selectorActive?"active":""}`} alt="стрелка"/>
            </div>
            <div className={styles.selector_main}>
                <ul className={`${styles.selector_container_checkBoxs} ${selectorActive?styles.active:""}`}>
                    {
                        options.map((item)=>{
                            return(
                                <li key={item.value} onClick={() => handleSelectOption(item)} className={`${styles.selector_container_li} ${selectorActive?styles.active:""}`}>{item.label}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Selector;