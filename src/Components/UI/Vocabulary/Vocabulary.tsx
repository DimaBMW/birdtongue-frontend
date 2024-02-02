import styles from "./Vocabulary.module.scss";
import React,{useState} from "react";
// компоненты
import Image from "../Image/Image";
// icon
import repost from "../../../assets/Icon/PopularCard/share.svg";
import views from "../../../assets/Icon/PopularCard/eye.svg";

type words = string[];


interface InVocabulary{
    LevelLanguage:string;
    CountRepost:number;
    CountViews:number;
    Words:words[];
}


const Vocabulary:React.FC<InVocabulary>=({LevelLanguage,CountRepost,CountViews,Words})=>{
    // кнопка EN
    const [isEn,setIsEn]=useState(true);
    const handleIsEn=()=>{
       if(isRu==true){
        setIsRu(!isRu);
        setIsEn(!isEn);    
       }
    }
    // кнопка RU
    const [isRu,setIsRu]=useState(false);
    const handleIsRu=()=>{
       if(isEn==true){
        setIsEn(!isEn);
        setIsRu(!isRu);
       }
    };

     // управление checkbox
     const [isChecked, setIsChecked] = useState(false);

     const handleCheckboxChange = () => {
       setIsChecked(!isChecked);
     }
   
      
    // вывод
    return(
        <div className={styles.vocabulary_container}>
            <div className={styles.vocabulary_container__title}>
                <div className={styles.title_part1}>
                    <h1>My vocabulary: {LevelLanguage}</h1>
                    <div className={styles.title_part1__btnbox}>
                        <button onClick={handleIsEn} className={`${isEn?styles.title_part1__btn1Active:styles.title_part1__btn1}`}>EN</button>
                        <button onClick={handleIsRu} className={`${isRu?styles.title_part1__btn2Active:styles.title_part1__btn2}`}>RU</button>
                    </div>
                </div>
                <div className={styles.title_part2}>
                    <div className={styles.title_part2__checkbox}>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            id="myCheckbox"
                            className={styles.custom_checkbox}
                        />
                        <label htmlFor="myCheckbox">Public</label>
                    </div>
                    <h1>{Words.length}</h1>
                </div>
            </div>
            <div className={styles.vocabulary_container__main}>
                {
                    Words.map((item)=>{
                       return(
                        <h1>{item}</h1>
                       )
                    })
                }
            </div>
            <div className={styles.vocabulary_container__back}>
                <div className={styles.back_repost}>
                    <Image src={repost} alt="bookmark" className="img-popularcard"/>
                    <h1>{CountRepost}</h1>
                </div>
                <div className={styles.back_views}>
                    <Image src={views} alt="bookmark" className="img-popularcard"/>
                    <h1>{CountViews}</h1>
                </div>
            </div>
        </div>
    );
}

export default Vocabulary;