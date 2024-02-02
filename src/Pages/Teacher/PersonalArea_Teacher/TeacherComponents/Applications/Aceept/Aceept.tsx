// импорт библиотек 
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TeacherClassRoom from "../../TeacherClassRoom/TeacherClassRoom";
// импорт стидей
import styles from "./Aceept.module.scss";
// интерфейс
interface InReject{
    isActive:boolean;
    onChangePropValue: (newValue: boolean) => void;
    TeacherName:string;
}
interface InRejectFrom{
    newclassname:string;
}
const Aceept:React.FC<InReject>=({isActive,onChangePropValue,TeacherName})=>{
    // close form
    const closeForm=()=>{
        onChangePropValue(false);
        setCreatBrn(false);
        setNextBtn(false);
        setAddBtn(false);
        setSelectValue('');
    }
    // ========================
    //          Btns
    // ========================
    const [creatbtn,setCreatBrn]=useState(false);
    const [Addbtn,setAddBtn]=useState(false);
    const [nextbtn,setNextBtn]=useState(false);
    const [selectValue,setSelectValue]=useState('');
    const handleCreat=()=>{
        setCreatBrn(!creatbtn);
        setAddBtn(false);
        setSelectValue('CreatFroStudenAClass');
    }
    const handleAdd=()=>{
        setCreatBrn(false);
        setAddBtn(!Addbtn);
        setSelectValue('AddStudentInClass');
    }

    const HandleNextValue=()=>{
        if(selectValue==''){
            setNextBtn(false);
            return alert('Веберите пункт')
        }else{
            setNextBtn(true);
        }
    }
    // ======================
    //        FROM
    // ======================
    const {handleSubmit,register,formState:{errors}}=useForm<InRejectFrom>({
        mode:"onChange",
        defaultValues:{
          newclassname:'',
        }
      })
      const submit: SubmitHandler<InRejectFrom> = (data) => { 
        console.log(data);
      };

    return(
        <div className={`${styles.Reject_container} ${isActive?styles.active:''}`}>
            <div className={styles.Reject_box}>
                {nextbtn&&selectValue=='CreatFroStudenAClass'?
                    <div className={styles.CreatindClass}>
                        <h1>Creating a classroom</h1>
                        <form onSubmit={handleSubmit(submit)}>
                            <div className={styles.form_inputbox}>
                                <h2>Explanatory letter</h2>
                                <input {...register('newclassname',{required:'Error Description'})} className={`${errors.newclassname? styles.input_form_errors:styles.input_form}`} placeholder="Classroom name"/>
                                {errors?.newclassname && (<div className={styles.errors}>{errors.newclassname.message}</div>)}
                            </div>
                        </form>
                    </div>
                    :
                    <></>
                }
                {nextbtn&&selectValue=='AddStudentInClass'?
                    <div className={styles.CreatindClass}>
                        <h1>Accept</h1>
                        <TeacherClassRoom TeacherName={TeacherName}/>
                    </div>
                    :
                    <></>
                }
                {nextbtn==false?
                                        <div className={styles.CreatindClass}>
                                        <h1>Accept</h1>
                                          <div className={styles.Accept_radio}>
                                              <div className={styles.Accept_radio__box}>
                                                  <button className={styles.Accept_radio__btnMain} onClick={handleAdd}>
                                                      <div className={styles.Accept_radio__btn}>
                                                          <div className={`${styles.Accept_radio__bluebox} ${Addbtn?styles.active:''}`}></div>
                                                      </div>
                                                      Add a student to the classroom
                                                  </button>
                                              </div>
                                          </div>
                                          <div className={styles.Accept_radio}>
                                              <div className={styles.Accept_radio__box}>
                                                  <button className={styles.Accept_radio__btnMain} onClick={handleCreat}>
                                                      <div className={styles.Accept_radio__btn}>
                                                          <div className={`${styles.Accept_radio__bluebox} ${creatbtn?styles.active:''}`}></div>
                                                      </div>
                                                      Create a new classroom
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                      :
                                      <></>
                }
                <div className={styles.Reject_box__btn}>
                    <button className={styles.btn_opacity} onClick={closeForm}>Cancel</button>
                    {nextbtn&&selectValue=='CreatFroStudenAClass'?
                        <button className={styles.btn_full} onClick={handleSubmit(submit)}>Save</button>
                        :
                        <button className={styles.btn_full} onClick={HandleNextValue}>Nex</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Aceept;