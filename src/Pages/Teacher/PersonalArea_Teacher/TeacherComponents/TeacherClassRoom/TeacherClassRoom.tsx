import React from "react";
import styles from "./TeacherClassRoom.module.scss";
// импорт компонент
import ClassRoomBtn from "../../../../../Components/UI/ClassRoom/ClassRoom";
// data
import { InfoClassRoom } from "../../../../../Data/ClassRooms.data";
import { InfoUser } from "../../../../../Data/Layout.data";
// интерфейс
interface InTeacheClass{
    TeacherName:string;
}

const TeacherClassRoom:React.FC<InTeacheClass>=({TeacherName})=>{
    return(
        <div className={styles.classroom_contaiter}>
            {InfoClassRoom.map((item)=>{
                if(item.TeacherName==TeacherName){
                    return(
                        <div>
                            <ClassRoomBtn ClassRoomName={item.name} link={item.id} UserName={InfoUser.name}/>
                        </div>
                    );
                }
            })
            }
        </div>
    );
}

export default TeacherClassRoom;