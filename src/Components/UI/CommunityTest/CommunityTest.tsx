// компонента CommunityTest
// ипорт библиотек
import React from "react";
import { useLocation } from "react-router-dom";
// импорт стилей
import styles from "./CommunityTest.module.scss";
// импорт icon
// импорт компонент
import {Link} from "react-router-dom";
// инетрфейс
interface InCommunityTest{
    forChildren:number;
    level:string;
    CountQuetions:number;
    id:number;
    classID:number;
}
const CommunityTest:React.FC<InCommunityTest>=({forChildren,level,CountQuetions,id,classID})=>{
    const location=useLocation();
    return(
        <div className={styles.CommunityTests_container}>
            {location.pathname.startsWith('/teacher')?
                <>
                    <Link to={`/teacher/class/${classID}/test/${id}`} className={styles.CommunityTests_link}>
                        <div className={styles.CommunityTests_container__header}>
                            {forChildren==1?
                                <h1>For children</h1>
                                :
                                <>
                                    <h1>{level}</h1>
                                    <h2>Upper-Intermediate</h2>
                                </>
                            }
                        </div>
                        <div className={styles.CommunityTests_container__footer}>
                            {forChildren==1?
                                <h1>English proficiency test for children</h1>
                                :
                                <h1>English Proficiency Test {level}</h1>
                            }
                            <h2>{CountQuetions} questions</h2>
                        </div>
                    </Link>
                </>
                :
                <>
                    <Link to={`/class/${classID}/test/${id}`} className={styles.CommunityTests_link}>
                        <div className={styles.CommunityTests_container__header}>
                            {forChildren==1?
                                <h1>For children</h1>
                                :
                                <>
                                    <h1>{level}</h1>
                                    <h2>Upper-Intermediate</h2>
                                </>
                            }
                        </div>
                        <div className={styles.CommunityTests_container__footer}>
                            {forChildren==1?
                                <h1>English proficiency test for children</h1>
                                :
                                <h1>English Proficiency Test {level}</h1>
                            }
                            <h2>{CountQuetions} questions</h2>
                        </div>
                    </Link>
                </>
            }
        </div>
    );
}

export default CommunityTest;
