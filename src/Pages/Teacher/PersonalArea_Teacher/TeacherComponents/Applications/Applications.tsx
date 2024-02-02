// импорт библиотек
import React, { useState } from "react";
// импорт стилей
import styles from "./Applications.module.scss";
// импорт компонент
import Image from "../../../../../Components/UI/Image/Image";
import Reject from "./Reject/Reject";
import Aceept from "./Aceept/Aceept";
// импорт data
import { InfoRequestTeachers } from "../../../../../Data/requestforTeacher.data";
// импорт icon
import accept from "../../../../../assets/Icon/PersonalArea/check.svg";
import reject from "../../../../../assets/Icon/PersonalArea/x.svg";
import chat from "../../../../../assets/Icon/PersonalArea/message-circle.svg";
// интерфейс
interface InRequest {
  NameTeacher: string;
}
const Applications: React.FC<InRequest> = ({ NameTeacher }) => {
    // =============================
    //            Reject
    // =============================
    const [isActiveReject,setIsActiveReject]=useState(false);
    const handelisActiveReject=()=>{
        setIsActiveReject(!isActiveReject);
    }
    // =============================
    //          Accept
    // =============================
    const [isActiveAccept,setisActiveAccept]=useState(false);
    const handelisActiveAccept=()=>{
        setisActiveAccept(!isActiveAccept);
    }
  return (
    <div className={styles.Applications}>
      {InfoRequestTeachers.map((item) => {
        if (item.nameTeacher == NameTeacher) {
          return (
            <div className={styles.Applications_container} key={item.id}>
              <div className={styles.Applications_container__title}>
                <Image
                  src={item.logo}
                  alt="аватарка"
                  className="practicant__img"
                />
                <h1>{item.nameStudents}</h1>
              </div>
              <div className={styles.Applications_container__btn}>
                <button className={styles.btn__accept} onClick={handelisActiveAccept}>
                  <h1>Accept</h1>
                  <Image
                    src={accept}
                    alt="аватарка"
                    className="button-admin__icon"
                  />
                </button>
                <button className={styles.btn__reject} onClick={handelisActiveReject}>
                  <h1>Reject</h1>
                  <Image
                    src={reject}
                    alt="аватарка"
                    className="button-admin__icon"
                  />
                </button>
                <button className={styles.btn__chat}>
                  <h1>Chat</h1>
                  <Image
                    src={chat}
                    alt="аватарка"
                    className="button-admin__icon"
                  />
                </button>
              </div>
            </div>
          ); 
        }
      })}
      <Aceept isActive={isActiveAccept?true:false} onChangePropValue={handelisActiveAccept} TeacherName={NameTeacher}/>
      <Reject isActive={isActiveReject?true:false} onChangePropValue={handelisActiveReject}/>
    </div>
  );
};

export default Applications;
