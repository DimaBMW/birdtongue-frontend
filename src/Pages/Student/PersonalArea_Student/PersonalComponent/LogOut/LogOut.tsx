// импорт библиотек
import React from 'react';
// импорт стилей 
import styles from "./LogOut.module.scss";
// импорт компонент
import ButtonOne from '../../../../../Components/UI/ButtonOne/ButtonOne';
// интерфейс
interface InLogOut{
    active:boolean;
    onChangePropValue: (newValue: boolean) => void;
}

const LogOut:React.FC<InLogOut>=({active,onChangePropValue})=>{
    const handleClickClose = ()=>{
        onChangePropValue(false);
    }
    return(
        <div className={`${styles.LogOut_container} ${active?styles.active:''}`}>
            <div className={styles.LogOut_box}>
                <div className={styles.LogOut_box__title}>
                    <h1>Log out</h1>
                    <h2>Do you really want to log out?</h2>
                </div>
                <div className={styles.LogOut_box__btn}>
                    <ButtonOne name="Log out" icon={0} className="logout-opacity"/>
                    <button onClick={handleClickClose} className={styles.logout_btn}>
                        <ButtonOne name="Cancel" icon={0} className="logout-default"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogOut;