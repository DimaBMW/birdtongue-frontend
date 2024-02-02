// импорт библиотек 
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// импорт стидей
import styles from "./Reject.module.scss";
// интерфейс
interface InReject{
    isActive:boolean;
    onChangePropValue: (newValue: boolean) => void
}
interface InRejectFrom{
    textarea:string;
}
const Reject:React.FC<InReject>=({isActive,onChangePropValue})=>{
    // close form
    const closeForm=()=>{
        onChangePropValue(false);
        setIsWrite(false);
    }
    // write
    const {handleSubmit,register,formState:{errors}}=useForm<InRejectFrom>({
        mode:"onChange",
        defaultValues:{
          textarea:'',
        }
      })
      const submit: SubmitHandler<InRejectFrom> = (data) => { 
        if(isWrite){
            setIsWrite(false);
            onChangePropValue(false);
        }
        console.log(data);
      };



    const [isWrite,setIsWrite]=useState(false);
    const handelWrite=()=>{
        setIsWrite(true);
    }

    return(
        <div className={`${styles.Reject_container} ${isActive?styles.active:''}`}>
            <div className={styles.Reject_box}>
                <h1>Reject</h1>
                {isWrite?
                    <form onSubmit={handleSubmit(submit)}>
                        <div className={styles.form_inputbox}>
                            <h2>Explanatory letter</h2>
                            <textarea {...register('textarea',{required:'Error Description'})} className={`${errors.textarea? styles.input_form_errors:styles.input_form}`}/>
                            {errors?.textarea && (<div className={styles.errors}>{errors.textarea.message}</div>)}
                        </div>
                    </form>
                    :
                    <p>Do you want to write an explanatory letter?</p>
                }
                <div className={styles.Reject_box__btn}>
                    <button className={styles.btn_opacity} onClick={closeForm}>Cancel</button>
                    {isWrite?
                        <button className={styles.btn_full} onClick={handleSubmit(submit)}>Send</button>
                        :
                        <button className={styles.btn_full} onClick={handelWrite}>Write</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Reject;