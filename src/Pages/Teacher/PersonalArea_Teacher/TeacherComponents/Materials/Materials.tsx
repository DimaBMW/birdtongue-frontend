/**
 * FIXME: нужно ли делать кликабельные тесты
 * 
 */

// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./Materials.module.scss";
// data
import { InfoArticl } from "../../../../../Data/Articles.data";
import { InfoTests } from "../../../../../Data/Tests.data";
import { InfoClassRoom } from "../  ../../../../Data/ClassRooms.data";
// импорт компонент
import CommunityTest from "../../../../../Components/UI/CommunityTest/CommunityTest";
// интерфейс
interface InfoArticls{
    NameTeacher:string;   
}
const Materials:React.FC<InfoArticls>=({NameTeacher})=>{
    let massclass=[];
    return(
        <div className={styles.Materials_container}>
            <div className={styles.titlebox}>
                <h1 className={styles.title}>Articles</h1>
                <span>{InfoArticl.length}</span>
            </div>
            <div className={styles.Materials_container__arcticlebox}>
                {InfoArticl.map((item)=>{
                    if(item.NameTeacher==NameTeacher){
                        return(
                            <div className={styles.textbox}>
                                <h2>{item.name}</h2>
                                <p>{item.text}</p>
                                <span>{item.data}</span>
                            </div>
                        )
                    }
                })
                }
            </div>
            <h1 className={styles.title}>Tests</h1>
            <div className={styles.Materials_container__testbox}>
                {InfoTests.map((item)=>{
                    if(item.testСreator==NameTeacher){
                        return(
                            <CommunityTest id={item.id} classID={0} forChildren={item.forChildren} level={item.level} CountQuetions={item.CountQuetions} />
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default Materials;