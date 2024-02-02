// import libraries
import React,{useEffect, useState} from "react";
// import styles
import styles from "./ClassRoom_Student.module.scss";
// import components
import { useParams } from "react-router-dom";
import Image from "../../../Components/UI/Image/Image";
import CommunityTest from "../../../Components/UI/CommunityTest/CommunityTest";
import ButtonOne from "../../../Components/UI/ButtonOne/ButtonOne";
import LogOut from "../PersonalArea_Student/PersonalComponent/LogOut/LogOut";
// icon
import repost from "../../../assets/Icon/PopularCard/share.svg";
import bookmark from "../../../assets/Icon/PopularCard/bookmark.svg";
import ActiveBookmark from "../../../assets/Icon/PopularCard/Active_Bookmark.svg";
// data
import { InfoClassRoom } from "../../../Data/ClassRooms.data";
import { InfoTests } from "../../../Data/Tests.data";
import { InfoUser } from "../../../Data/Layout.data";

const ClassRoom_Student:React.FC=()=>{
    // обработка contexta
    const { id } = useParams();
    const isId = typeof id === "string" ? parseInt(id) : undefined;
    let CountTest=0;
    let kol=0;
    // bookmark
    const [activeBookmark,setActiveBookmark]=useState(false);//сщстояние кнопки активации bookmarka
    const handleBoolmark=()=>{
        setActiveBookmark(!activeBookmark);
    }
    // Progress

    const [progress,setProgress]=useState(0); // состояние прогресса

    useEffect(()=>{
        let CompleteTest=0;
        InfoTests.map((element)=>{
            if(element.staus=='complete'){
                CompleteTest+=1;
            }
        })
        setProgress((CompleteTest*100)/CountTest);
    },[CountTest])

    // logout
    const [islogout,setislogout]=useState(false);
        // открытие формы LogOut
        const handelLogOut=()=>{
            setislogout(!islogout);
        }

    return(
        <section className={styles.Class_container}>
            <div className={styles.Class_container__ProgressBar}>
                <div className={styles.progress_label}>
                    <h1>Your progress:</h1>
                    <h2>{Math.floor(progress)}%</h2>
                </div>
                <div className={styles.progress_bar}>
                    <div className={styles.progress_bar__fill} style={{width:`${progress}%`}}></div>
                </div>
            </div>
            <div className={styles.Class_container__Menu}>
                <h1 className={styles.Menu_title}>Tests</h1>
                <div className={styles.Menu_Option}>
                    <h2>{InfoClassRoom[isId || 0]?.name}</h2>
                    <h2>{InfoClassRoom[isId || 0]?.TeacherName}</h2>
                    <button className={styles.Menu_Option__logout} onClick={handelLogOut}>
                        <Image src={repost} alt="repost" className="img-class"/>
                    </button>
                    <button className={styles.Menu_Option__boomark} onClick={handleBoolmark}>
                        <Image src={`${activeBookmark?ActiveBookmark:bookmark}`} alt="bookmark" className="img-popularcard"/>
                    </button>
                </div>
            </div>
            <div className={styles.Class_container__Tests}>
                {
                    InfoTests.map((item)=>{
                        let flag=false;
                        let flag2=false;
                        // проверка что студента отметили на прохождение этого теста
                        InfoTests[item.id].nameStydents.map((nameArray)=>{
                            nameArray.forEach((name)=>{
                                if(name==InfoUser.name){
                                    flag=true;
                                }
                            })
                        })
                        // проверка что класс в котором мы находмся имее этот тест
                        InfoTests[item.id].nameClass.map((nameArray)=>{
                            nameArray.forEach((name)=>{
                                if(name==(InfoClassRoom[isId || 0]?.name)){
                                    flag2=true;
                                }
                            })
                        })
                        if(flag && flag2){
                            CountTest+=1;
                            return(
                                <CommunityTest classID={InfoClassRoom[isId || 0]?.id} forChildren={item.forChildren} level={item.level} CountQuetions={item.CountQuetions} id={item.id}/>
                            );
                        }
                    })
                }
            </div>
            <div className={styles.Class_container__btn}>
                <ButtonOne name="Show more" icon={0} className="admin-opacity"/>
                <ButtonOne name="Vocabularies" icon={0} className="admin-default"/>
            </div>
            <LogOut active={islogout?true:false} onChangePropValue={handelLogOut}/>
        </section>
    );
}

export default ClassRoom_Student;


// {InfoClassRoom[isId || 0]?.name}