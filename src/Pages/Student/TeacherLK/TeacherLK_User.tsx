/** ЗАМЕТКИ
 * TODO:
 * Оптимизировать все функции
 * Разбить блок препода и блок студента на разные компоненты
 * 
 */

// импорт библиотек
import { useParams } from "react-router-dom";
// импорт стилей
import styles from "./TeacherLK_User.module.scss";
// user data
import { InfoUser } from "../../../Data/Layout.data"; 
import { InfoTeacher } from "../../../Data/Teacher.data";
// компоненты
import Schedule from "./TeacherComponents/Schedule/Schedule";
import Image from "../../../Components/UI/Image/Image";
import Sertificate from "./TeacherComponents/Sertificate/Sertificate";
// импорт icon


const TeacherLK_User:React.FC=()=>{
    const { id } = useParams();
    const isId = typeof id === "string" ? parseInt(id) : undefined;
    //===============================================================
    //                             TEACHER
    // ===============================================================
    return(
        <section className={styles.PersonalArea_container}>
            <div className={styles.PersonalArea_container_title}>
                <h1>My profile</h1>
            </div>
            <div className={styles.PersonalArea_container_main}>
                <div className={styles.UserCard}>
                    <div className={styles.container_teacher}>
                                <div className={styles.UserCard_prewie}>
                                    <Image src={InfoUser.logo} alt="аватарка" className="usercard__img"/>
                                    <div className={styles.UserCard_prewie_title}>
                                        <h1>{InfoUser.name}</h1>
                                        <h2>{InfoUser.access}</h2>
                                    </div>
                                </div>
                            </div>
                    </div>
                <div className={styles.UserInfo}>
                    <div className={styles.UserInfo_Languages}>
                        <h1>Languages</h1>
                        <div className={styles.UserInfo_Languages__box}>
                            {InfoTeacher[isId || 0]?.languages.map((item)=>{
                                return(
                                    <div className={styles.languages_box}>
                                        {item}
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className={styles.UserInfo_Certificates}>
                        <h1>Certificates</h1>
                        <div className={styles.UserInfo_Certificates__SertificateBox}>
                            <Sertificate/>
                            <Sertificate/>
                            <Sertificate/>
                        </div>
                    </div>
                    <div className={styles.UserInfo_FreeTimeSchedule}>
                        <div>
                            <Schedule/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeacherLK_User;