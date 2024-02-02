// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./ChoosingAnAnswer.module.scss";
// импорт компонент
import Image from "../../../../../../Components/UI/Image/Image";
// импорт icon
import icon1 from "../../../../../../assets/Icon/svg/plus(black).svg";
interface InputChoosingAnswerProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
const ChoosingAnAnswer:React.FC<InputChoosingAnswerProps>=({onChange,value})=>{
    return(
        <div className={styles.ChoosingAnswer_container}>
            <div className={styles.ChoosingAnswer_container__title}>
                <h2>Response options</h2>
            </div>
            <div className={styles.ChoosingAnswer_container__box}>
                <div className={styles.answer_contaner}>
                    <div className={styles.answer_contaner__inputbox}>
                        <input type="text" value={value} placeholder="answer..." className={`${styles.answer_contaner__input} ${value==''?styles.errors:''}`}/>
                        {value==''?
                            <div className={styles.text_errors}>Error Description</div>
                            :
                            ''
                        }
                    </div>
                    <div className={styles.answer_contaner__trueanswer}>
                        <button className={styles.answer_contaner__trueanswerBtn}>
                            <div className={styles.radio_border}>

                            </div>
                            <h2>Correct answer</h2>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.ChoosingAnswer_container__btn}>
                <button className={styles.addAnsver_btn}>
                    Add an option
                    <Image src={icon1} alt="plus" className={`button__icon`}/>
                </button>
            </div>
        </div>
    )
}

export default ChoosingAnAnswer;