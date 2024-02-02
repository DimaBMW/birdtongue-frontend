import styles from "./Layout_mobile.module.scss";
import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
// данные о пользователе
import { InfoUser } from "../../../Data/Layout.data";
// Компоненты
import Logo from "../../UI/Logo/Logo";
import Image from "../../UI/Image/Image";
import ButtonOne from "../../UI/ButtonOne/ButtonOne";
// Icon
import icon from "../../../../public/Logo/Logo.svg"
import arrow from "../../../assets/Icon/Home/arrow-right.svg";


function Layout_Mobile(){
    const [isActive, setIsActive] = useState(false);
    const [activeselector, setactiveselector] = useState(false);

    const activeMenu = () => {
        setIsActive(!isActive);
    };
    
    const activeSel=()=>{
        setactiveselector(!activeselector);
    };


    return(
        <div className={styles.layout_container}>
            <header className={styles.header}>
                <div className={styles.header_container}>
                    <div className={styles.header_container_logo}>
                        <button className={`${styles.header_burgerMenu} ${isActive?styles.activeMenu:''}`} onClick={activeMenu}>
                            <span></span>
                        </button>
                        <Logo src={icon}/>
                    </div>
                    <div className={styles.header_container_profile}>
                        {InfoUser.register==true?
                            <div className={styles.logout_Registered}>
                                <h1>{InfoUser.name}</h1>
                                <div className={styles.logout_Registered_imgbox}>
                                    <Image src={InfoUser.logo} alt="аватарка" className="user__img"/>
                                </div>
                            </div>
                        :
                            <div className={styles.logout_NoRegistered}>
                                <Link to="/login" className={styles.logout_link__login}>Log in</Link>
                            </div>
                        }
                    </div>
                    <div className={`${styles.header_container_menu} ${isActive?styles.activeMenu:''}`}>
                        <nav className={styles.navigation}>
                            <ul className={styles.navigation_ul}>
                                <li className={styles.navigation_li}>
                                    <Link to="/" className={styles.navigation_link}>Movies</Link>
                                </li>
                                <div className={styles.navigation_li__hoverbox}>
                                    <div className={styles.navigation_li__hoverbox}>
                                        <li className={styles.navigation_li__hover}>
                                            <button className={styles.navigation_btn} onClick={activeSel}>
                                                <h1 className={styles.navigation_link__hover}>Education</h1>
                                                <Image src={arrow} alt="стрелка вправо" className={`layoutmobile__img ${activeselector?"active":""}`}/>
                                            </button>
                                        </li>
                                    </div>
                                    <div className={`${styles.nav_podmenu} ${activeselector?"active":""}`}>
                                        <Link to="/classrooms" className={styles.navigation_link}>Classrooms</Link>
                                        <Link to="/forteachers" className={styles.navigation_link}>For teachers</Link>
                                        <Link to="/forstudents" className={styles.navigation_link}>For students</Link>
                                    </div>
                                </div>
                                <li className={styles.navigation_li}>
                                    <Link to="/community" className={styles.navigation_link}>Community</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles.header_container_btnbox}>
                            <ButtonOne name="Profile" icon={0} className="default"/>
                            <Link to="/login" className={styles.logout_link__login}>Log in</Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.layout_main}>
                <Outlet/>
            </div>
            <footer className={styles.footer}>
                <div className={styles.footer}>
                </div>
            </footer>
        </div>
    );
}

export default Layout_Mobile;