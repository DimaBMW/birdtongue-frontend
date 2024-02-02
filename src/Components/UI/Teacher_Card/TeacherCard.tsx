import React from "react";
import styles from "./TeacherCard.module.scss";
import { Link } from "react-router-dom";
import Image from "../Image/Image";

interface InTeacherCard{
    id:number;
    name:string;
    logo:string;
    testResult:number;
    languages: string[];
}
const TeacherCard:React.FC<InTeacherCard>=({id,name,logo,testResult,languages})=>{
    return(
        <div className={styles.TeacherCard_container}>
            <Link to={`/PersonalAreaTeacher/${id} ${name}`} className={styles.link}>
                <div className={styles.TeacherCard_box}>
                    <div className={styles.TeacherCard_teacherInfo}>
                        <Image
                            src={logo}
                            alt="аватарка"
                            className="teacherlogo__img"
                        />
                        <div className={styles.TeacherCard_teacherInfo__text}>
                            <h1>{name}</h1>
                            <h2>Test result:{testResult}%</h2>
                        </div>
                    </div>
                    <div className={styles.TeacherCard_teacherLanguage}>
                        {languages.map((item)=>{
                            return(
                                <div className={styles.languages_box}>
                                    {item}
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default TeacherCard;