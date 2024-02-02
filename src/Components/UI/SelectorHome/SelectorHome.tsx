// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./SelectorHome.module.scss";
// импорт компонент
import Image from "../Image/Image";
// имопрт icon
import icon from "../../../assets/Icon/Home/arrow-down.svg";
// интерфейс
interface InSelectorHome{
    onChangePropValue: (newValue: boolean) => void;
    isActive:boolean;
    name:string;
    text:string;
}
const SelectorHome:React.FC<InSelectorHome>=({isActive,onChangePropValue,name,text})=>{
    const handleChange=()=>{
        onChangePropValue(false);
    }
    return(
        <button className={styles.SelectorHome_container} onClick={handleChange}>
            <div className={styles.SelectorHome_container__btn}>
                <h1 className={styles.selectorHome_h1}>{name}</h1>
                <Image src={icon} alt="" className={`homearrow__img ${isActive?'active':''}`}/>
            </div>
            <div className={`${styles.SelectorHome_container__text} ${isActive?styles.active:''}`}>
                <p>{text}</p>
            </div>
        </button>
    );
}

export default SelectorHome;