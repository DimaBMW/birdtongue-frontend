// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./UserTests.module.scss";
// импорт компонент
import CommunityTest from "../../../../../Components/UI/CommunityTest/CommunityTest";
// импорт data
import { InfoTests } from "../../../../../Data/Tests.data";
import { InfoClassRoom } from "../../../../../Data/ClassRooms.data";
// интерфейс
interface InUser{
    username:string;
}
const UserTests:React.FC<InUser>=({username})=>{
    return(
        <div className={styles.UserTest_container}>
                            {
                    InfoTests.map((item)=>{
                        let flag=false;
                        let flag2=0;
                        let flag3=false;
                        const classname=[''];
                        // проверка что студента отметили на прохождение этого теста
                        InfoTests[item.id].nameStydents.map((nameArray)=>{
                            nameArray.forEach((name)=>{
                                if(name==username){
                                    flag=true;
                                }
                            })
                        })
                        InfoTests[item.id].nameClass.map((nameArray)=>{
                            nameArray.forEach((name)=>{
                               classname.push(name);
                            })
                        })
                        classname.forEach((element)=>{
                            console.log(element,InfoClassRoom[item.id].name);
                            for (let index = 0; index < InfoClassRoom.length; index++) {
                                if(InfoClassRoom[index].name==element){
                                    // console.log(element,InfoClassRoom[item.id].name);
                                    InfoClassRoom[item.id].StudentName.map((nameArray)=>{
                                        nameArray.forEach((name)=>{
                                            if(name==username){
                                                flag2=InfoClassRoom[item.id].id;
                                                flag3=true;
                                            }
                                        })
                                    })
                                }   
                            }
                        })
                        if(flag && flag3){
                            console.log(flag2);
                            return(
                                <CommunityTest classID={flag2} forChildren={item.forChildren} level={item.level} CountQuetions={item.CountQuetions} id={item.id}/>
                            );
                        }
                    })
                }
        </div>
    );
}

export default UserTests;