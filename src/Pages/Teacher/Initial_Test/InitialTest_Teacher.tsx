// импорт библиотек
import React,{useState,useRef} from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { SubmitHandler, useForm } from "react-hook-form";
// импорт стилей
import styles from "./InitialTest_Teacher.module.scss";
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
}
const  InitialTest_Teacher:React.FC=()=>{
    // переменные
    const descriptionTest=`Task: Choose the correct answer. In each task there is a pass that must be filled in by selecting the most appropriate answer from the presented ones.
    Take the test before`;//хранение описания теста
    let kolQuetions=0;//номер вопросса в тесте

    // =================================
    //       FROM for a Quetion
    //==================================
    const {handleSubmit,setValue,getValues}=useForm<InFormQuetions>({
      mode:"onChange",
      defaultValues:{
        TestName:`Initial Test`,
        valueInputField:[],
      }
    })
    const [valueInputField, setValueInputField] = useState<string[]>([]);

    const onChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueInputField([event.target.value]);
    };
    const currentvalue=getValues('valueInputField');
    let mass=[''];
    const submit: SubmitHandler<InFormQuetions> = (data) => { 
      const uniqueArr = [...new Set(mass)];
      setValue('valueInputField',uniqueArr);
      console.log(data);
    };
    return (
        <section className={styles.TestRoom_container}>
            <div className={styles.TestRoom_container__titles}>
                  <div className={styles.title_head}>
                    <h1>Initian Test</h1>
                    <h2>{InfoUser.name}</h2>
                  </div>
                  <p className={styles.title_text}>
                    {descriptionTest}
                  </p>
            </div>
            <form className={styles.TestRoom_container__questions} onSubmit={handleSubmit(submit)}>
              <Quetion number={kolQuetions} name={'test'} type={'Input field'} onChange={onChangeForm} mass={mass}/>
              <Quetion number={kolQuetions} name={'test'} type={'Input field'} onChange={onChangeForm} mass={mass}/>
              <Quetion number={kolQuetions} name={'test'} type={'Input field'} onChange={onChangeForm} mass={mass}/>
              <Quetion number={kolQuetions} name={'test'} type={'Input field'} onChange={onChangeForm} mass={mass}/>
              <Quetion number={kolQuetions} name={'test'} type={'Input field'} onChange={onChangeForm} mass={mass}/>
                      <div className={styles.TestRoom_container__buttons}>
                        <ButtonOne name="Cancel" icon={0} className="admin-opacity"/>
                        <ButtonOne name="Complete" icon={0} className="admin-default"/>
                      </div>      
            </form>
        </section>
    );
}

export default InitialTest_Teacher;

// {InfoClassRoom[isId || 0]?.name}