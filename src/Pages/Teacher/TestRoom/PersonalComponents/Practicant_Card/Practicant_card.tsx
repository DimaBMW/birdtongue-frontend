// компонента картояка практиканта в всплывашке Practicants
// импорт библиотек
import React from "react";
// импорт стилей
import styles from "./Practicant_card.module.scss";
// импорт Icon
import remove from "../../../../../assets/Icon/AddFilm_Admin/trash.svg";
// импорт компонент
import Image from "../../../../../Components/UI/Image/Image";

// интерфейс для пропс
interface InPracticantCard{
    logo:string;
    name:string;
    deadline:string;
    progress:number;
}
const PracticantCard: React.FC<InPracticantCard>= ({logo,name,deadline,progress}) => {
  return (
    <div className={styles.PracticntCard_container}>
      <div className={styles.PracticntCard_container__info}>
        <div className={styles.personal_data}>
            <div className={styles.personal_data__logo}>
                <Image src={logo} alt="аватарка" className="practicant__img"/>
            </div>
            <div className={styles.personal_data__text}>
                <h1>{name}</h1>
                <h2>Deadline {deadline}</h2>
            </div>
        </div>
        <button className={styles.remove_btn}>
          <Image
            src={remove}
            alt="remove practicant"
            className="button-admin__icon"
          />
        </button>
      </div>
      <div className={styles.PracticntCard_container__progressBar}>
        <div className={styles.ProgressBar_title}>
            <h1>Progress:</h1>
            <h2>{progress}%</h2>
        </div>
        <div className={styles.ProgressBar_bar}>
            <div className={styles.ProgressBar_bar__fill} style={{width:`${progress}%`}}></div>
        </div>
      </div>
    </div>
  );
};

export default PracticantCard;
