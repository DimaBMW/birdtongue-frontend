// import libraries
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';  
import axios from "axios";
import Select, { SingleValue, MultiValue} from "react-select";
import makeAnimated from "react-select/animated";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import styles
import  "./Select.scss";
import styles from "./SingIn_Teacher.module.scss";
// import components
import ButtonOne from "../../../../Components/UI/ButtonOne/ButtonOne";

// interface <<Registration Teacher>>
interface InSignInForm{
  name:string;
  lastname:string;
  email:string;
  phone_number:number;
  languages: {
    name: string;
  }[];
  password:string;
}
// interface for Select Langusges
interface InOption {
    value: string;
    label: string;
}
// option languages mass
const options:InOption[]=[{
        value:'Russian',
        label:'Russian',
    },{
        value:'English',
        label:'English',
    },{
        value:'Spanish',
        label:'Spanish',
    },{
        value:'French',
        label:'French',
    },{
        value:'German',
        label:'German',
    },{
        value:'Chinese',
        label:'Chinese',
    }
]
const isMulti: boolean = true;
const animated = makeAnimated();

const SingIn_Teacher:React.FC=()=>{
    // ==========================
    //      sending data
    // ==========================
    const {register,handleSubmit,formState:{errors},setValue}=useForm<InSignInForm>({});
    const submit:SubmitHandler<InSignInForm>=async (data)=>{
        console.log(data)
        try {
          // post request to rest api
          const response=await axios.post('http://185.119.56.134:8000/api/v1/registration/teacher',data,{
            headers:{
                "Content-Type":"application/json",
            },
          }); 
          console.log('Data sent successfully');
          console.log('Data ->',data);
          console.log('Response data ->', response.data);
          // redirect to login page
        } catch (error) {
            console.error('Error sending data to server',error as Error);
        }
    }
    // ==========================
    //         select
    // ==========================
    const [currentMenu, setCurrentMenu] = useState<string[]>();
    const getValue = () => {
        if (currentMenu) {
          return isMulti
            ? options.filter((option) => currentMenu.indexOf(option.value) >= 0)
            : [];
        } else {
          return isMulti ? [] : [];
        }
    };
    type SingleValue<T> = {
        value: T;
    };  
    type MultiValue<T> = {
      value: T[];
    };
    const onChange = ( newValue: SingleValue<string | InOption> | MultiValue<string | InOption>) => {
      if (newValue != null) {
        const selectedValues = Array.isArray(newValue)
          ? newValue.map((v) => v.value)
          : [newValue.value];
        setCurrentMenu(selectedValues);
        console.log(selectedValues);
        setValue(`languages`, selectedValues.map(name => ({name})))
      } else {
        setCurrentMenu([]);
        setValue('languages', []); 
      }
    };
    return(
        <section className={styles.singin_container}>
            <div className={styles.singin_container_formcontainer}>
                <h1 className={styles.singin_container_formcontainer_title}>Sign up</h1>
                <form className={styles.form} onSubmit={handleSubmit(submit)}>
                    <div className={styles.form_inputs}>
                        <div className={styles.form_inputbox}>
                            <h2>Name</h2>
                            <input type="text" {...register('name',{required:'Error Description',maxLength:{value:50,message:"Maximum name length - 50 characters"}})} className={`${errors.name? styles.input_form_errors:styles.input_form}`}/>
                            {errors?.name && (<div className={styles.errors}>{errors.name.message}</div>)}
                        </div>
                        <div className={styles.form_inputbox}>
                            <h2>Lastname</h2>
                            <input type="text" {...register('lastname',{required:'Error Description',maxLength:{value:50,message:"Maximum lastname length - 50 characters"}})} className={`${errors.lastname? styles.input_form_errors:styles.input_form}`}/>
                            {errors?.lastname && (<div className={styles.errors}>{errors.lastname.message}</div>)}
                        </div>
                        <div className={styles.form_inputbox}>
                            <h2>E-mail</h2>
                            <input type="text" {...register('email',{required:'Error Description',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid phone number Email"}})} className={`${errors.email? styles.input_form_errors:styles.input_form}`}/>
                            {errors?.email && (<div className={styles.errors}>{errors.email.message}</div>)}
                        </div>
                        <div className={styles.form_inputbox}>
                            <h2>Phone number</h2>
                            <input type="telephone" {...register('phone_number',{required:'Error Description',pattern:{value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/,message:"Invalid phone number format"}})} className={`${errors.phone_number? styles.input_form_errors:styles.input_form}`}/>
                            {errors?.phone_number && (<div className={styles.errors}>{errors.phone_number.message}</div>)}
                        </div>
                        <div className={styles.form_inputbox}>
                            <h2>Language</h2>
                            <Select
                                onChange={onChange}
                                value={getValue()}
                                options={options}
                                isMulti={isMulti}
                                classNamePrefix="select"
                                components={animated}
                            />
                        </div>
                        <div className={styles.form_inputbox}>
                            <h2>Password</h2>
                            <input autoComplete='password' type="password" {...register('password',{required:'Error Description',minLength: {value: 8,message: "Minimum password length - 8 characters"} })} className={`${errors.password? styles.input_form_errors:styles.input_form}`}/>
                            {errors?.password && (<div className={styles.errors}>{errors.password.message}</div>)}
                        </div>
                    </div>
                    <div className={styles.form_buttons}>
                        <button type="submit" className={styles.form_btn}>
                             <ButtonOne name="Create account" icon={0} className="login__btn"/>
                        </button>
                    </div>
                </form>
                <div className={styles.login_link}>
                    <h2>Don’t have an account? <Link to="/teacher/login" className={styles.login_link_LinkTo}>Log in</Link></h2>
                </div>
            </div>
        </section>
        
    );
}

export default SingIn_Teacher;