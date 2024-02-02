// импорт библиотек
import React,{useRef, useState} from "react";
// импорт стилей
import styles from "./Quetion.module.scss";
// импорт компонент
import Movies_Test from "../FormsQuetions/Movies/Movies";

// интерфейс
interface InQuetion{
    number:number;
    name:string;
    type:string;
    mass:string[];
    // reacthookform
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ChoosingAnswer:string[];
    ChoosingAnswerMass:string[];
    MovieQuestion:string[];
    MovieQuestionMass:string[];
}
const Quetion:React.FC<InQuetion>=({number,name,type,onChange,mass,ChoosingAnswer,ChoosingAnswerMass,MovieQuestion,MovieQuestionMass})=>{
    const userf=useRef<HTMLInputElement>(null);
    if(userf.current?.value==null || userf.current?.value==undefined){
        ''
    }else{
        mass.push(userf.current?.value);
    }
    // console.log(ref.current?.value);
    // ================================
    //         Chossing Answer
    // ================================
    const [isTrueAnswer,setIsTrueAnswer]=useState('');
    const [isAnswer,setIsAnswer]=useState<boolean[]>(ChoosingAnswer.map(()=>false));
    const testref=useRef<HTMLInputElement[]>([]);
    const handleIsTrueAnswerClick=(index:number)=>{
        setIsAnswer((prev)=>{
            const newState=[...prev];
            newState[index]=!prev[index];
            return newState;
        });
        if(!isAnswer[index]){
            ChoosingAnswerMass.push(testref.current[index].value);
            console.log('выбрал',testref.current[index].value);
        }else{
            const idToDelete = testref.current[index].value;
            const indexToDelete = ChoosingAnswerMass.findIndex((element) => element === idToDelete);
            if (indexToDelete !== -1) {
                ChoosingAnswerMass.splice(indexToDelete, 1);
                console.log('удалил', idToDelete);
            }
            console.log('удалил',testref.current[index].value);
        }
    }
    const handleIsTrueAnswerChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setIsTrueAnswer(event.target.value);
    }
    
 
    return(
        <div className={styles.Quetion_container}>
            <div className={styles.Quetion_container__title}>
                <h1>{number}{name}</h1>
            </div>
            <div className={styles.Quetion_container__typesQution}>
            {(() => {
              switch (type){
                case 'Input field':
                    return <div className={styles.InputField}>
                        <input key={number} type="text" onChange={onChange} className={styles.InputField_input} ref={userf}/>
                    </div>
                case 'Choosing an answer':
                    return <div className={styles.ChoosingAnswer}>
                        {ChoosingAnswer.map((item,index:number)=>{
                            return <button key={index} className={`${styles.InputField_inputbtn} ${isAnswer[index]?styles.active:''}`} onClick={()=>handleIsTrueAnswerClick(index)} type="button">
                                <input type="text" key={index} className={styles.input} value={item} onChange={handleIsTrueAnswerChange} disabled ref={(el)=>el && (testref.current[index]=el)}/>
                            </button>
                        })
                        }
                    </div>
                case 'Movie':
                    return <div>
                        <Movies_Test MovieChosingAnswersMass={MovieQuestionMass} MovieChosingAnswers={MovieQuestion}/>
                    </div>
                default:
                  return null;
              }
            })()}
            </div>
        </div>
    );
}

export default Quetion;