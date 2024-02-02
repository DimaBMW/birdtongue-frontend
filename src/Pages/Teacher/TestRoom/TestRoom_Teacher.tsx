// импорт библиотек
import React,{useState} from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { SubmitHandler, useForm } from "react-hook-form";
// импорт стилей
import styles from "./TestRoom_Teacher.module.scss";
import 'react-datepicker/dist/react-datepicker.css';
// импорт компонентов
import Image from "../../../Components/UI/Image/Image";
import ButtonOne from "../../../Components/UI/ButtonOne/ButtonOne";
import AddQuetions from "./PersonalComponents/AddQuetions/AddQuetions";
import Quetion from "./PersonalComponents/Quetion/Quetion";
import AddPracticants from "../Class/PersonalComponents/Practicants/Practicants";
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
const  TestRoom_Teacher:React.FC=()=>{
    // обработка id теста
    const { id ,idClass} = useParams();
    const isId = typeof id === "string" ? parseInt(id) : undefined;
    const isIdClass = typeof idClass === "string" ? parseInt(idClass) : undefined;
    // переменные
    let kolQuetions=0;//номер вопросса в тесте
    let kol=0;
    // состояния
    const [addPracticant,setAddPracticant]=useState(false);
    const [addActive,setAddActive]=useState(false);

    const handleAddPracticants=()=>{
      setAddPracticant(!addPracticant);
    }
    // активация формы addQuetions
    const handleAddQuetions=()=>{
      setAddActive(!addActive);
    }
    // при открытии админ формы, лишаем body скрола.
    addActive?document.body.classList.add("no-scroll"):document.body.classList.remove('no-scroll')
    addPracticant?document.body.classList.add("no-scroll"):document.body.classList.remove('no-scroll')

    // =================================
    //       FROM for a Quetion
    //==================================
    const {handleSubmit,setValue}=useForm<InFormQuetions>({
      mode:"onChange",
      defaultValues:{
        TestName:`${InfoTests[isId || 0]?.name}`,
        valueInputField:[],
        valueChoosingAnswer:[],
        valueMoviesQuetion:[],
      }
    })
    const [valueInputField, setValueInputField] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);//datapicker
    
    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };

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
                    <div className={styles.title_head_title}>
                      <div className={styles.title_head__inputName}>
                        <h1>Name</h1>
                        <input type="text" value={InfoTests[isId || 0]?.name} disabled/>
                      </div>
                      <div className={styles.title_head__datapicker}>
                        <h1>Deadline</h1>
                        <div className={styles.databox}>
                          <Image src={calendar} alt="calendar" className="selector-admin__icon"/>
                          <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          dateFormat="dd/MM/yyyy"
                          className={styles.datapicker}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.title_head__Practicants}>
                        <div className={styles.Practicants_logo}>
                          {InfoPracticants.map((item)=>{
                            let flag=false,flag2=false;
                            InfoPracticants[item.id].nameClass.map((nameArray)=>{
                              nameArray.forEach((name)=>{
                                if(name===InfoClassRoom[isIdClass || 0]?.name){
                                  flag=true;
                                }
                              })
                            })
                            InfoPracticants[item.id].nameTests.map((nameArray)=>{
                              nameArray.forEach((name)=>{
                                if(name===InfoTests[isId || 0]?.name){
                                  flag2=true;
                                }
                              })
                            })
                            if(flag && flag2 && item.id<=3){
                              return(
                                <div className={styles.practicantbox} style={{right:`${5*item.id}px`}}>
                                  <Image src={item.logo} alt="аватарка" className="practicant__img"/>
                              </div>
                              )
                            }
                            if(flag && item.id>3){
                              kol+=1;
                            }
                          })
                          }
                          <div className={styles.koll}>
                              +{kol}
                          </div>
                        </div>
                        <div className={styles.Practicants_add}>
                            <button className={styles.Practicants_add__btn} onClick={handleAddPracticants}>
                                <Image src={plus} alt="аватарка" className="practicant-plus__img"/>
                            </button>
                        </div>
                    </div>
                  </div>
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
                <div className={styles.btnbox}>
                  <button className={styles.TestRoom_container__buttonsAdd} onClick={handleAddQuetions}>
                    Add test 
                    <Image src={plus2} alt="аватарка" className="practicant-plus__img"/>
                  </button>
                </div>
                <div className={styles.TestRoom_container__buttons}>
                  <ButtonOne name="Cancel" icon={0} className="admin-opacity"/>
                  <ButtonOne name="Save" icon={0} className="admin-default"/>
                </div>
            </form>
            <AddQuetions active={addActive?true:false} TestName={InfoTests[isId || 0]?.name} onChangePropValue={handleAddQuetions}/>
            <AddPracticants className={InfoClassRoom[isId || 0]?.name} classActive={addPracticant?true:false} onChangePropValue={handleAddPracticants}/>
        </section>
    );
}

export default TestRoom_Teacher;

// {InfoClassRoom[isId || 0]?.name}