// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./Subscriptions.module.scss";
// импорт компонент
import Image from "../../../../../Components/UI/Image/Image";
// импорт icon
import close from "../../../../../assets/Icon/PersonalArea/x.svg";
// интерфейс
interface InSubscription{
    active:boolean;
    onChangePropValue:(value:boolean)=>void;
}

const Subscriptions:React.FC<InSubscription>=({active,onChangePropValue})=>{
    const handelSubscribeClose=()=>{
        onChangePropValue(false);
    }
    return(
        <div className={`${styles.Subscriptions_container} ${active?styles.active:''}`}>
            <div className={styles.Subscriptions_box}>
                <div className={styles.Subscriptions_box__title}>
                    <h1>Subscriptions</h1>
                    <button onClick={handelSubscribeClose} className={styles.btn}>
                        <Image src={close} alt="закрыть" className="form-admin__icon"/>
                    </button>
                </div>
                <div>
                    <h1>В Разработке...</h1>
                </div>
            </div>
        </div>
    );
}

export default Subscriptions;