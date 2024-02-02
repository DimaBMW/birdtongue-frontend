// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./UserVocabulary.module.scss";
// импорт data
import { InfoCard } from "../../../../../Data/PopularCard.data";
// импорт компонент
import UserVocabular from "../../../../../Components/UI/UserVocabular/UserVocabular";
// интерфейс
interface InUser{
    username:string;
}
const UserVocabulary:React.FC<InUser>=({username})=>{
    return(
        <div className={styles.userVocabulary_container}>
            {
                InfoCard.map((item)=>{
                    if(item.nameStudent==username){
                        return(
                            <div>
                                <UserVocabular name={item.name} Words={item.Words} Language={item.Language} Level={item.Level} Repost={item.Repost} Views={item.Views}/>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default UserVocabulary;