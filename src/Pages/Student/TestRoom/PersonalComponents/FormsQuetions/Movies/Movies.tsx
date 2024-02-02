// импорт библиотек
import React,{useState,useRef} from "react";
// импорт стилей
import styles from "./Movies.module.scss";
// импорт видео
import CustomVideoPlayer from "../../../../../../Components/UI/CustomVideoPlayer/CustomVideoPlayer";
// data
import video from "../../../../../../assets/Video/BMWM5.mp4";
import sub from "../../../../../../assets/Subtitles/BMW.vtt";

interface InMovie{
    MovieChosingAnswers:string[];
    MovieChosingAnswersMass:string[];
}
const Movies_Test:React.FC<InMovie>=({MovieChosingAnswers,MovieChosingAnswersMass})=>{
    const [isTrueAnswer,setIsTrueAnswer]=useState('');
    const [isAnswer,setIsAnswer]=useState<boolean[]>(MovieChosingAnswers.map(()=>false));
    const testref=useRef<HTMLInputElement[]>([]);
    const handleIsTrueAnswerClick=(index:number)=>{
        setIsAnswer((prev)=>{
            const newState=[...prev];
            newState[index]=!prev[index];
            return newState;
        });
        if(!isAnswer[index]){
            MovieChosingAnswersMass.push(testref.current[index].value);
            console.log('выбрал',testref.current[index].value);
        }else{
            const idToDelete = testref.current[index].value;
            const indexToDelete = MovieChosingAnswersMass.findIndex((element) => element === idToDelete);
            if (indexToDelete !== -1) {
                MovieChosingAnswersMass.splice(indexToDelete, 1);
                console.log('удалил', idToDelete);
            }
            console.log('удалил',testref.current[index].value);
        }
    }
    const handleIsTrueAnswerChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setIsTrueAnswer(event.target.value);
    }
    return(
        <div className={styles.MovieQuestion_container}>
            <div className={styles.MovieQuestion_video}>
                <CustomVideoPlayer source={video} src={sub}/>
                <div className={styles.moviename}>
                    <h1>Title of the film</h1>
                    <h2>Copyright holder</h2>
                </div>
            </div>
            <div className={styles.MovieQuestion_choosinganswer}>
                        {MovieChosingAnswers.map((item,index:number)=>{
                            return <button key={index} className={`${styles.InputField_inputbtn} ${isAnswer[index]?styles.active:''}`} onClick={()=>handleIsTrueAnswerClick(index)} type="button">
                                <input type="text" key={index} className={styles.input} value={item} onChange={handleIsTrueAnswerChange} disabled ref={(el)=>el && (testref.current[index]=el)}/>
                            </button>
                        })
                        }
            </div>
        </div>
    )
}

export default Movies_Test;