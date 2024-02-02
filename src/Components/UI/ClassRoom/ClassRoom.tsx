// компонента кнопка перехода в классную комнату
// =============================================
// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./ClassRoom.module.scss";

// импорт компонент
import { Link } from "react-router-dom";
// интерфейс
interface InfoClassRoomBtn{
    ClassRoomName:string;
    link:number;
    UserName:string;
}
const ClassRoomBtn:React.FC<InfoClassRoomBtn>=({ClassRoomName,link,UserName})=>{
    return(
        <div className={styles.ClassRoom_container}>
            <Link className={styles.ClassRoom_container__btn} to={`${UserName}/class/${link}`}>
                <h1>{ClassRoomName}</h1>
            </Link>
        </div>
    );
}

export default ClassRoomBtn;