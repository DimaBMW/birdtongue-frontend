// импорт библиотек
import React, { useState } from "react";
import {Link} from "react-router-dom";
// импорт стилей
import styles from "./Home_Teacher.module.scss";
// импорт компонент
import Rectangle from "./Personal_components/Rectangle/Rectangle";
import SelectorHome from "../../../Components/UI/SelectorHome/SelectorHome";
// импорт img
import Rectangle1 from "../../../assets/Icon/Home/_x33_.svg";
import Rectangle2 from "../../../assets/Icon/Home/_x34_.svg";
import Rectangle3 from "../../../assets/Icon/Home/Rectangle3.svg";
const Home_Teacher:React.FC=()=>{
    // состояния для quetions
    const [isactiveq1,setIsactiveq1]=useState(false);
    const [isactiveq2,setIsactiveq2]=useState(false);
    const [isactiveq3,setIsactiveq3]=useState(false);
    const [isactiveq4,setIsactiveq4]=useState(false);
    const handldeActiveQuestion=()=>{
        setIsactiveq1(!isactiveq1);
    }
    const handldeActiveQuestion2=()=>{
        setIsactiveq2(!isactiveq2);
    }
    const handldeActiveQuestion3=()=>{
        setIsactiveq3(!isactiveq3);
    }
    const handldeActiveQuestion4=()=>{
        setIsactiveq4(!isactiveq4);
    }
    return(
        <section className={styles.Home_container}>
           <div className={styles.Home_container__title}>
                <div className={styles.Title_text}>
                    <div>
                        <h1>Learn <span>languages</span> by watching movies and TV shows</h1>
                    </div>
                    <p>It is interesting, useful, and also convenient to learn a variety of languages from movies and TV series through our video player</p>
                </div>
                <div className={styles.Title_link}>
                        <Link to="/teacher/login" className={styles.Title_link__LInk1}>Log in</Link>
                        <Link to="/teacher/singin" className={styles.Title_link__LInk2}>Sign in</Link>
                </div>
           </div>
           <div className={styles.Home_container__aboutme}>
                <h1>About our platform</h1>
                <div className={styles.Rectangle_box}>
                    <Rectangle name="Engage with students online anywhere, anytime" text="Open the doors to endless online learning opportunities on our platform. Your learning environment, schedule, and lessons are always at hand." img={Rectangle1}/>
                    <Rectangle name="Teaching students individually or in Classrooms" text="Only you decide how to teach. Individually, creating customized paths, or use the Classrooms for group learning. You choose!" img={Rectangle2}/>
                    <Rectangle name="Tests, dictionaries, group classes and more" text="Diversify your learning process with our tests, dictionaries and group classes. Discover the world of education with our unique platform." img={Rectangle3}/>
                </div>
            </div>
            <div className={styles.Home_container__quetions}>
                <h1 className={styles.home_h1}>Frequently Asked Questions</h1>
                <div className={styles.Quetions_box}>
                    <SelectorHome name="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices?" text="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices." onChangePropValue={handldeActiveQuestion} isActive={isactiveq1}/>
                    <SelectorHome name="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices?" text="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices." onChangePropValue={handldeActiveQuestion2} isActive={isactiveq2}/>
                    <SelectorHome name="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices?" text="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices." onChangePropValue={handldeActiveQuestion3} isActive={isactiveq3}/>
                    <SelectorHome name="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices?" text="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices." onChangePropValue={handldeActiveQuestion4} isActive={isactiveq4}/>
                </div>
            </div>
        </section>
    );
}

export default Home_Teacher;