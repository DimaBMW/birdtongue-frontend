// import libraries
import React, { useState } from "react";
import {Link} from "react-router-dom";
// import styles
import styles from "./Home_Student.module.scss";
// import components
import Rectangle from "./Personal_components/Rectangle/Rectangle";
import SelectorHome from "../../../Components/UI/SelectorHome/SelectorHome";
// import img
import Rectangle1 from "../../../assets/Icon/Home/Rectangle1.svg";
import Rectangle2 from "../../../assets/Icon/Home/Rectangle2.svg";
import Rectangle3 from "../../../assets/Icon/Home/Rectangle3.svg";

const Home_Student:React.FC=()=>{
    // status for questions
    const [isActive, setIsActive] = useState([false, false, false, false]);
    const handleActiveQuestion = (index: number) => {
      setIsActive((prev) => {
        const updatedState = [...prev];
        updatedState[index] = !updatedState[index];
        return updatedState;
      });
    };    

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
                        <Link to="/login" className={styles.Title_link__LInk1}>Log in</Link>
                        <Link to="/singin" className={styles.Title_link__LInk2}>Sign in</Link>
                </div>
           </div>
           <div className={styles.Home_container__aboutme}>
                <h1>About our platform</h1>
                <div className={styles.Rectangle_box}>
                    <Rectangle name="A free platform. Pay only for lessons" text="Education is available to everyone. Pay only for knowledge, the rest is free. Learning has become easier than ever." img={Rectangle1}/>
                    <Rectangle name="Find and choose the teachers you like" text="Create your own unique learning path. Find someone who is right for you. Your learning experience is your choice." img={Rectangle2}/>
                    <Rectangle name="Tests, dictionaries, group classes and more" text="Diversify your learning process with our tests, dictionaries and group classes. Discover the world of education with our unique platform." img={Rectangle3}/>
                </div>
            </div>
            <div className={styles.Home_container__quetions}>
                <h1 className={styles.home_h1}>Frequently Asked Questions</h1>
                <div className={styles.Quetions_box}>
                    <SelectorHome name="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices?" text="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices." onChangePropValue={() => handleActiveQuestion(0)} isActive={isActive[0]}/>
                    <SelectorHome name="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices?" text="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices." onChangePropValue={() => handleActiveQuestion(1)} isActive={isActive[1]}/>
                    <SelectorHome name="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices?" text="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices." onChangePropValue={() => handleActiveQuestion(2)} isActive={isActive[2]}/>
                    <SelectorHome name="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices?" text="Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices. Lorem ipsum dolor sit amet consectetur. Sit facilisis quam facilisi ultrices." onChangePropValue={() => handleActiveQuestion(3)} isActive={isActive[3]}/>
                </div>
            </div>
        </section>
    );
}

export default Home_Student;