// импорт библиотек
import React,{useRef} from "react";
// импорт стилей
import styles from "./Quetion.module.scss";
// интерфейс
interface InQuetion{
    number:number;
    name:string;
    type:string;
    mass:string[];
    // reacthookform
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Quetion:React.FC<InQuetion>=({number,name,type,onChange,mass})=>{
    const userf=useRef<HTMLInputElement>(null);
    if(userf.current?.value==null || userf.current?.value==undefined){
        console.log('0');
    }else{
        mass.push(userf.current?.value);
    }
    // console.log(ref.current?.value);
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
                default:
                  return null;
              }
            })()}
            </div>
        </div>
    );
}

export default Quetion;