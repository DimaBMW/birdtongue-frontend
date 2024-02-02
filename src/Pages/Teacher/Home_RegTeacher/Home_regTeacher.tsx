import styles from "./Home_regTeacher.module.scss";
import React,{useState,createContext} from "react";
// компоненты
import ButtonOne from "../../../Components/UI/ButtonOne/ButtonOne";
import Pagination from "../../../Components/UI/Pagination/Pagination";
import ListItem from "../../../Components/UI/ListItem/ListItem";

interface IAppcontext{
    searchTerm:string;
    setSearchTerm:React.Dispatch<React.SetStateAction<string>>;
}

export const HomeContext=createContext<IAppcontext>({
    searchTerm:'',
    setSearchTerm:()=>{},
});

const HomeReg_Teacher:React.FC=()=>{
    const [searchTerm,setSearchTerm]=useState('');

    return(
        <section className={styles.HomeRegUser}>
            <div className={styles.HomeRegUser_container}>
                <HomeContext.Provider value={{searchTerm,setSearchTerm}}>
                    <div className={styles.HomeRegUser_container_saitbar}>
                        <ButtonOne name="Dictionaries" icon={0} className="default"/>
                        <ButtonOne name="Classrooms" icon={0} className="default"/>
                        <div className={styles.saitbar_list}>
                            <ul>
                                <h1 className={styles.saitbar_title}>Genre</h1>
                                <li className={styles.saitbar_li}>
                                    <a href="#" className={styles.saitbar_link}>Art House</a>
                                </li>
                                <li className={styles.saitbar_li}>
                                    <a href="#" className={styles.saitbar_link}>Biography</a>
                                </li>
                                <li className={styles.saitbar_li}>
                                    <a href="#" className={styles.saitbar_link}>Fighters</a>
                                </li>
                                <li className={styles.saitbar_li}>
                                    <a href="#" className={styles.saitbar_link}>Western</a>
                                </li>
                                <li className={styles.saitbar_li}>
                                    <a href="#" className={styles.saitbar_link}>Military</a>
                                </li>
                                <ListItem name="Detectives" SerchTerm="detectiv"/>
                                <ListItem name="Show All" SerchTerm="film"/>
                            </ul>
                            <ul>
                                <h1 className={styles.saitbar_title}>Language</h1>
                                <li className={styles.saitbar_li}>
                                    <a href="#" className={styles.saitbar_link}>Lorem</a>
                                </li>
                                <li className={styles.saitbar_li}>
                                    <a href="#" className={styles.saitbar_link}>Lorem</a>
                                </li>
                                <li className={styles.saitbar_li}>
                                    <a href="#" className={styles.saitbar_link}>Lorem</a>
                                </li>
                            </ul>
                            <ul>
                                <h1 className={styles.saitbar_title}>Language level</h1>
                                <ListItem name="A1 - Beginner" SerchTerm="English A1"/>
                                <ListItem name="A2 - Elementary" SerchTerm="English A1"/>
                                <ListItem name="B1 - Intermediate" SerchTerm="English A1"/>
                                <ListItem name="B2 - Upper-Intermediate" SerchTerm="English A1"/>
                                <ListItem name="C1 - Advanced" SerchTerm="English A1"/>
                                <ListItem name="C2 - Proficiency" SerchTerm="English A1"/>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.HomeRegUser_container_main}>
                        <div className={styles.main_titleBox}>
                            <h1>Movies</h1>
                        </div>
                        <div className={styles.main_paginationBox}>
                            <Pagination/>
                        </div>
                    </div>
                </HomeContext.Provider>
            </div>
        </section>
    );
}

export default HomeReg_Teacher;