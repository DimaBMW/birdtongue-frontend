// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./Rectangle.module.scss";
// импорт компонент
import Image from "../../../../../Components/UI/Image/Image";
// интерфейс
interface InRectangle{
    name:string;
    text:string;
    img:string;
}
const Rectangle:React.FC<InRectangle>=({name,text,img})=>{
    return(
        <div className={styles.Rectangle_container}>
            <div className={styles.Rectangle_container__img}>
                <Image src={img} alt="rectangle" className="rectangle__img"/>
            </div>
            <div className={styles.Rectangle_container__text}>
                <h1>{name}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Rectangle;