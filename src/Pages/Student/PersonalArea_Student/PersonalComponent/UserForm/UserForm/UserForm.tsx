import styles from "./UserForm.module.scss";
import React, { useState } from 'react';
import { useForm,SubmitHandler } from "react-hook-form";
// user data
import { InfoUser, TypeInfoUser } from "../../../../../../Data/Layout.data";
// компоненты
import ButtonOne from "../../../../../../Components/UI/ButtonOne/ButtonOne";
import Image from "../../../../../../Components/UI/Image/Image";
import iconOn from "../../../../../../assets/Icon/LK/eye.svg";
import iconOff from "../../../../../../assets/Icon/LK/eye-off.svg";
// интерфейс
interface InEdit{
    onChangePropValue: (newValue: boolean) => void;
    onChangePropValueSubscribe: (newValue: boolean) => void;
}

const UserForm: React.FC<InEdit>=({onChangePropValue,onChangePropValueSubscribe})=>{
    const handelSubscribe=()=>{
        onChangePropValueSubscribe(true);
    }
    // блокировака input
    const [isEditing, setIsEditing] = useState(false);
    const [isopen,setIsopen]=useState(false);
    const [isopen2,setIsopen2]=useState(false);

    const {register,handleSubmit,watch,reset,formState:{errors}}=useForm<TypeInfoUser>({
        mode:'onChange',
        defaultValues:{
            name:`${InfoUser.name}`,
            FullName:`${InfoUser.FullName}`,
            Email:`${InfoUser.Email}`,
            PhoneNumber:InfoUser.PhoneNumber,
            Password:`${InfoUser.Password}`,
        }
    })

    const password = React.useRef({});
    password.current = watch("Password", "");

      const handleEditClick = () => {
        setIsEditing(true);
        onChangePropValue(false);
      };

      const handleSaveClick = () => {
        setIsEditing(false);
        onChangePropValue(true);
        reset({
            name:`${InfoUser.name}`,
            FullName:`${InfoUser.FullName}`,
            Email:`${InfoUser.Email}`,
            PhoneNumber:InfoUser.PhoneNumber,
            Password:`${InfoUser.Password}`,
        });
      };

      const handleOpenPasswod=()=>{
        if(isopen==false){
            setIsopen(true);
        }else{
            setIsopen(false);
        }
      }
      const handleOpenPasswod2=()=>{
        if(isopen2==false){
            setIsopen2(true);
        }else{
            setIsopen2(false);
        }
      }

      const onSubmit:SubmitHandler<TypeInfoUser>=(data)=>{
           console.log(data.name);
      }


    return(
        <div>
            <form className={styles.userform} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.userform_data}> 
                    <div className={styles.userform_data_part1}>
                        <div className={styles.userform_inputbox}>
                            <h1>Username</h1>
                            <input {...register('name',{required:'Error Description',})} type="text" className={`${!isEditing?styles.userform_input:styles.userform_input_active} ${errors.name?styles.userform_input_active_errors:''}`} disabled={!isEditing} placeholder="Username"/>
                            {errors?.name && (<div className={styles.errors}>{errors.name.message}</div>)}
                        </div>
                        <div className={styles.userform_inputbox}>
                            <h1>Full name</h1>
                            <input {...register('FullName',{required:'Error Description',})} type="text" className={`${!isEditing?styles.userform_input:styles.userform_input_active} ${errors.FullName?styles.userform_input_active_errors:''}`} disabled={!isEditing} placeholder="Full name"/>
                            {errors?.FullName && (<div className={styles.errors}>{errors.FullName.message}</div>)}
                        </div>
                        <div className={styles.userform_inputbox}>
                            <h1>E-mail</h1>
                            <input {...register('Email',{required:'Error Description',})} type="text" className={`${!isEditing?styles.userform_input:styles.userform_input_active} ${errors.Email?styles.userform_input_active_errors:''}`} disabled={!isEditing} placeholder="E-mail"/>
                            {errors?.Email && (<div className={styles.errors}>{errors.Email.message}</div>)}
                        </div>
                        <div className={styles.userform_inputbox}>
                            <h1>Phone number</h1>
                            <input {...register('PhoneNumber',{required:'Error Description',})} type="text" className={`${!isEditing?styles.userform_input:styles.userform_input_active} ${errors.PhoneNumber?styles.userform_input_active_errors:''}`} disabled={!isEditing} placeholder="Phone number"/>
                            {errors?.PhoneNumber && (<div className={styles.errors}>{errors.PhoneNumber.message}</div>)}
                        </div>
                    </div>
                    <div className={styles.userform_data_part2}>
                        <div className={styles.userform_inputbox}>
                            <h1>Password</h1>
                                <div className={`${styles.inputboxIcons} ${errors.Password?styles.inputboxIcons_errors:''}`} >
                                    <input {...register('Password',{required: "Поле пароля обязательно для заполнения",minLength: {value: 6,message: "Минимальная длина пароля - 6 символов"}})} type={`${isopen?'text':'password'}`} disabled={!isEditing} placeholder="Password" />
                                    <button className={styles.userform_btn} onClick={handleOpenPasswod}>
                                        <Image src={isopen?iconOn:iconOff} alt="глазик" className="persone__areaimgon"/>
                                    </button>
                                </div>
                                {errors?.Password && (<div className={styles.errors}>{errors.Password.message}</div>)}
                        </div>
                        <div className={`${styles.userform_inputboxConfim} ${isEditing?styles.userform_inputboxConfim_active:''}`}>
                            <h1>Confirm password</h1>
                            <div className={`${styles.inputboxIcons} ${errors.Password?styles.inputboxIcons_errors:''}`}>
                                <input {...register('confirmPassword',{validate: (value) =>value === password.current || "Пароли не совпадают"})} type={`${isopen2?'text':'password'}`}  disabled={!isEditing} placeholder="Confim Password"/>
                                    <button className={styles.userform_btn} onClick={handleOpenPasswod2}>
                                        <Image src={isopen2?iconOn:iconOff} alt="глазик" className="persone__areaimgon"/>
                                    </button>
                            </div>
                            {errors?.confirmPassword && (<div className={styles.errors}>{errors.confirmPassword.message}</div>)}
                        </div>
                    </div>
                </div>
                <div className={`${styles.userform_btnbox} ${isEditing?styles.userform_btnbox_active:''}`}>
                    <button onClick={handleEditClick} className={styles.userform_btn}>
                            <ButtonOne name="Edit profile" icon={0} className="opacity"/>
                    </button>
                    <button className={styles.userform_btn} onClick={handelSubscribe}>
                        <ButtonOne name="Subscriptions" icon={0} className="default"/>
                    </button>
                </div>
                <div className={`${styles.userform_btnbox2} ${isEditing?styles.userform_btnbox2_active:''}`}>
                    <button onClick={handleSaveClick} className={styles.userform_btn}>
                            <ButtonOne name="Cancel" icon={0} className="opacity"/>
                    </button>
                    <button className={styles.userform_btn} type="submit">
                        <ButtonOne name="Save" icon={0} className="default"/>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;
