// импорт библиотек
import React,{useState} from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { SubmitHandler, useForm } from "react-hook-form";
// импорт стилей
import styles from "./TestRoom_Student.module.scss";
import 'react-datepicker/dist/react-datepicker.css';
// импорт компонентов
import Image from "../../../Components/UI/Image/Image";
import ButtonOne from "../../../Components/UI/ButtonOne/ButtonOne";
import AddQuetions from "./PersonalComponents/AddQuetions/AddQuetions";
import Quetion from "./PersonalComponents/Quetion/Quetion";
// импорт изображений
import calendar from "../../../assets/Icon/TestRoom/calendar.svg";
import plus from "../../../assets/Icon/PopularCard/plus.svg";
import plus2 from "../../../assets/Icon/TestRoom/plus.svg";
// импорт data
import { InfoTests } from "../../../Data/Tests.data";
import { InfoClassRoom } from "../../../Data/ClassRooms.data";
import { InfoUser } from "../../../Data/Layout.data";
import { InfoPracticants } from "../../../Data/Practicants.data";
import { InfoQuetions } from "../../../Data/Quetions.data";
// интерфейс для FormQuetions
interface InFormQuetions{
  TestName:string;
  valueInputField:string[];
  valueChoosingAnswer:string[];
  valueMoviesQuetion:string[];
}
const  TestRoom_Student:React.FC=()=>{
    // обработка id теста
    const { id ,idClass} = useParams();
    const isId = typeof id === "string" ? parseInt(id) : undefined;
    const isIdClass = typeof idClass === "string" ? parseInt(idClass) : undefined;
    // переменные
    const descriptionTest=`Task: Choose the correct answer. In each task there is a pass that must be filled in by selecting the most appropriate answer from the presented ones.
    Take the test before ${InfoTests[isId || 0]?.deadline}`;//хранение описания теста
    let kolQuetions=0;//номер вопросса в тесте
    // состояния
    const [addPracticant,setAddPracticant]=useState(false);
    const [addActive,setAddActive]=useState(false);


    // активация формы addQuetions
    const handleAddQuetions=()=>{
      setAddActive(!addActive);
    }
    // при открытии админ формы, лишаем body скрола.
    addActive?document.body.classList.add("no-scroll"):document.body.classList.remove('no-scroll')

    // =================================
    //       FROM for a Quetion
    //==================================
    const {handleSubmit,setValue,getValues}=useForm<InFormQuetions>({
      mode:"onChange",
      defaultValues:{
        TestName:`${InfoTests[isId || 0]?.name}`,
        valueInputField:[],
        valueChoosingAnswer:[],
        valueMoviesQuetion:[],
      }
    })
    const [valueInputField, setValueInputField] = useState<string[]>([]);

    

    const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueInputField([event.target.value]);
    };
    let mass=[''];
    let ChoosingAnswerMass=[''];
    let MovieQuestionMass=[''];
    const submit: SubmitHandler<InFormQuetions> = (data) => { 
      const uniqueArr = [...new Set(mass)];
      setValue('valueInputField',uniqueArr);
      const uniqueArr2 = [...new Set(ChoosingAnswerMass)];
      setValue('valueChoosingAnswer',uniqueArr2);
      console.log(data);
    };
    return (
        <section className={styles.TestRoom_container}>
            <div className={styles.TestRoom_container__titles}>
            <div className={styles.title_head}>
                    <h1>{InfoTests[isId || 0]?.name}</h1>
                    <h2>{InfoClassRoom[isIdClass || 0]?.TeacherName}</h2>
                  </div>
                  <p className={styles.title_text}>
                    {descriptionTest}
                  </p>
            </div>
            <form className={styles.TestRoom_container__questions} onSubmit={handleSubmit(submit)}>
              {InfoQuetions.map((quetion)=>{
                  if(quetion.TestName==InfoTests[isId || 0]?.name){
                    kolQuetions+=1;
                    return(
                      <>
                        <Quetion number={kolQuetions} name={quetion.name} type={quetion.type} onChange={onChangeForm} mass={mass} ChoosingAnswer={quetion.ChoosingAnswer} MovieQuestion={quetion.ChoosingAnswer} ChoosingAnswerMass={ChoosingAnswerMass} MovieQuestionMass={MovieQuestionMass}/>
                      </>
                    )
                  }
              })
              }
              <div className={styles.TestRoom_container__buttons}>
                <ButtonOne name="Cancel" icon={0} className="admin-opacity"/>
                <ButtonOne name="Complete" icon={0} className="admin-default"/>
              </div>
            </form>
            <AddQuetions active={addActive?true:false} TestName={InfoTests[isId || 0]?.name} onChangePropValue={handleAddQuetions}/>
        </section>
    );
}

export default TestRoom_Student;

// {InfoClassRoom[isId || 0]?.name}