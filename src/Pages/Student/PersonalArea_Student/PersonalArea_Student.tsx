// import libraries
import React,{useEffect, useState} from "react";
import { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
// import styles
import styles from "./PersonalArea_Student.module.scss";
// user data
import { InfoUser } from "../../../Data/Layout.data"; 
// import components
import Image from "../../../Components/UI/Image/Image";
import UserForm from "./PersonalComponent/UserForm/UserForm/UserForm";
import UserClassRoom from "./PersonalComponent/UserClassRoom/UserClassRoom";
import UserTests from "./PersonalComponent/UserTests/UserTests";
import UserVocabulary from "./PersonalComponent/UserVocabulary/UserVocabulary";
import LogOut from "./PersonalComponent/LogOut/LogOut";
import Subscriptions from "./PersonalComponent/Subscriptions/Subscriptions";
// import icons
import MoreVertical from "../../../assets/Icon/LK/more-vertical.svg";
import edit from "../../../assets/Icon/LK/edit-2.svg";
import delet from "../../../assets/Icon/LK/trash.svg";
import logout from "../../../assets/Icon/LK/log-out-small.svg";

const PersonalArea_Student:React.FC=()=>{
    const [userData, setUserData] = useState<JwtPayload | null>(null);
    useEffect(()=>{
    const token=localStorage.getItem('user_token');
    if(token){setUserData(jwtDecode<JwtPayload>(token) as JwtPayload);}
    },[])
    // ================================================================
    //                            STUDENT
    // ================================================================
    // состояния кнопок
    const [isBtn,setIsBtn]=useState('UserInfo');
    const [islogout,setislogout]=useState(false);
    const [isSubscribe,setIsSubscribe]=useState(false);
    // Card edit
    const [cardEdit,setCardEdit]=useState(false);
    const handleCardEdit=()=>{
        setCardEdit(!cardEdit);
    }
    // subscriptions
    const handelSubscribe=()=>{
        setIsSubscribe(!isSubscribe);
    }
    // открытие формы LogOut
    const handelLogOut=()=>{
        setislogout(!islogout);
    }
    // управлeние состоянием
    const handeUserInfo=()=>{
        isActiveMenu('UserInfo');
        if(cardEdit){
            setCardEdit(!cardEdit);
        }
    }
    const handeUserClassRoom=()=>{
        isActiveMenu('UserClassRoom');
        if(cardEdit){
            setCardEdit(!cardEdit);
        }
    }
    const handelTests=()=>{
        isActiveMenu('UserTest');
        if(cardEdit){
            setCardEdit(!cardEdit);
        }
    }
    const handelVocabulary=()=>{
        isActiveMenu('UserVocabulary');
        if(cardEdit){
            setCardEdit(!cardEdit);
        }
    }
    // фунекция замены значения меню
    function isActiveMenu(str:string){
        setIsBtn(str);
    }
    // hover for logout
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return(
        <section className={styles.PersonalArea_container}>
            <div className={styles.PersonalArea_container_title}>
                <h1>My profile</h1>
            </div>
            <div className={styles.PersonalArea_container_main}>
                <div className={styles.UserCard}>
                <div className={styles.container}>
                            <div className={styles.UserCard_prewie}>
                                <Image src={InfoUser.logo} alt="аватарка" className="usercard__img"/>
                                <div className={styles.UserCard_prewie_titleEdit}>
                                    {cardEdit?
                                    <>
                                        <button>
                                            Upload
                                            <Image src={edit} alt="глазик" className="button-admin__icon"/>
                                        </button>
                                        <button>
                                            Delete
                                            <Image src={delet} alt="глазик" className="button-admin__icon"/>
                                        </button>
                                    </>
                                    :
                                        <></>
                                    }
                                </div>
                                <div className={styles.UserCard_prewie_title}>
                                    <h1>{userData != null ?userData.user.name : ''}</h1>
                                    <h2>{InfoUser.subscription}</h2>
                                </div>
                            </div>
                            <div className={styles.UserCard_dataReg}>
                                <h1>Subscription: {InfoUser.dataReg}</h1>
                            </div>
                        </div>
                </div>
                <div className={styles.UserInfo}>
                <div className={styles.container_student}>
                            <div className={styles.UserInfo_title}>
                                    <div className={styles.UserInfo_title__btnbox}>
                                        <button className={`${styles.UserInfo_title__btn} ${isBtn=='UserInfo'?styles.UserInfo_title__btnActive:''}`} onClick={handeUserInfo}>UserInfo</button>
                                        <button className={`${styles.UserInfo_title__btn} ${isBtn=='UserClassRoom'?styles.UserInfo_title__btnActive:''}`} onClick={handeUserClassRoom}>Classrooms</button>
                                        <button className={`${styles.UserInfo_title__btn} ${isBtn=='UserTest'?styles.UserInfo_title__btnActive:''}`} onClick={handelTests}>Tests</button>
                                        <button className={`${styles.UserInfo_title__btn} ${isBtn=='UserVocabulary'?styles.UserInfo_title__btnActive:''}`} onClick={handelVocabulary}>Vocabularies</button>
                                    </div>
                                    <button className={styles.UserInfo_title__btn} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <Image src={MoreVertical} alt="аватарка" className="button-admin__icon"/>
                                    </button>
                            </div>
                            <div className={`${styles.UserInfo_title__logout} ${isHovered?styles.activelogout:''}`}>
                                    <button onClick={handelLogOut} >
                                        <Image src={logout} alt="глазик" className="button-admin__icon"/>
                                        Log out
                                    </button>
                            </div>
                            <div className={styles.UserInfo_from}>
                                        {(() => {
                                            switch (isBtn) {
                                                case 'UserInfo':
                                                    return <UserForm onChangePropValue={handleCardEdit} onChangePropValueSubscribe={handelSubscribe}/>;
                                                case 'UserClassRoom':
                                                    return <UserClassRoom username={InfoUser.name}/>
                                                case 'UserTest':
                                                    return <UserTests username={InfoUser.name}/>
                                                case 'UserVocabulary':
                                                    return <UserVocabulary username={InfoUser.name}/>
                                                    default:
                                                    return null;
                                            }
                                        })()}
                            </div>
                        </div>
                </div>
            </div>
            <LogOut active={islogout?true:false} onChangePropValue={handelLogOut}/>
            <Subscriptions active={isSubscribe?true:false} onChangePropValue={handelSubscribe}/>
        </section>
    );
}

export default PersonalArea_Student;