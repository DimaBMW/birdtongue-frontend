import React from "react";
import styles from "./Students.module.scss";
import { InfoPracticants } from "../../../../../Data/Practicants.data";
// импорт компоненты
import PracticantCard from "../../../Class/PersonalComponents/Practicant_Card/Practicant_card";
// интерфейс 
interface InStudents{
    NameTeacher:string;
}

const Students:React.FC<InStudents>=({NameTeacher})=>{
    return(
        <div className={styles.Students_container}>
             {InfoPracticants.map((item)=>{
                let flag=false;
                InfoPracticants[item.id].NameTeachers.map((Arrayname)=>{
                    Arrayname.forEach((name)=>{
                        if(name==NameTeacher){
                            flag=true;
                        }
                    })
                })
                if(flag){
                    return(
                        <div className={styles.stydents_container}>
                            <PracticantCard logo={item.logo} name={item.name} deadline={item.DeadLine} progress={item.Progress}/>
                        </div>
                    )
                }
             })
             }
        </div>
    );
}

export default Students;