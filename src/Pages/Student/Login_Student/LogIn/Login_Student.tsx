// import libraries
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React ,{useState} from "react";
// import styles
import styles from "./Login_Student.module.scss";
// import components
import ButtonOne from "../../../../Components/UI/ButtonOne/ButtonOne";
import iconOn from "../../../../assets/Icon/LK/eye.svg";
import iconOff from "../../../../assets/Icon/LK/eye-off.svg";
import Image from "../../../../Components/UI/Image/Image";
import axios from "axios";
// interface for login
interface InLoginForm{
  username:string;
  password:string;
}

const Login_Student:React.FC=()=>{
    // get the url
    const navigate = useNavigate();
    // show password
    const [showpassword,setShowPassword]=useState(false);
    const handleOpenPasswod=()=>{showpassword==false?setShowPassword(true):setShowPassword(false);} 
    // login form
    const {register,handleSubmit,formState:{errors}}=useForm<InLoginForm>();
    const submit:SubmitHandler<InLoginForm>=async (data)=>{
        try {
          // post request to rest api
          const response=await axios.post('http://185.119.56.134:8000/login',data,{
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
            },
          });  
          console.log('Data sent successfully');
          console.log('Data ->',data);
          console.log('Response data ->', response.data);
          if(response.data.access_token){
            localStorage.setItem('user_token',response.data.access_token);
            navigate('/');
            location.reload();
          }else{
            console.log('Authorisation Error');
          }
        } catch (error) {
          console.error('Error sending data to server',error);
        }
        console.log(data);
    }

    return (
      <section className={styles.login_container} >
        <div className={styles.login_container_formcontainer}>
            <h1 className={styles.login_container_formcontainer_title}>Log in</h1>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <div className={styles.form_inputs}>
                    <div className={styles.form_inputbox}>
                        <h2>E-mail</h2>
                        <input type="text"  {...register('username',{required:'Error Description',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Invalid phone number Email"}})} className={`${errors.username? styles.input_form_errors:styles.input_form}`}/>
                        {errors?.username && (<div className={styles.errors}>{errors.username.message}</div>)}
                    </div>
                    <div className={styles.form_inputbox}>
                        <h2>Password</h2>
                         <div className={styles.inputboxIcons} >
                            <input {...register('password',{required: "Error Description",minLength: {value: 6,message: "Minimum password length - 6 characters"}})} className={`${errors.password? styles.input_form_errors:styles.input_form}`} type={`${showpassword?'text':'password'}`} />
                            <button className={styles.userform_btn} onClick={handleOpenPasswod} type="button">
                                <Image src={showpassword?iconOn:iconOff} alt="глазик" className="persone__areaimgon"/>
                            </button>
                        </div>
                        {errors?.password && (<div className={styles.errors}>{errors.password.message}</div>)}
                    </div>
                </div>
                <div className={styles.form_buttons}>
                    <button type="submit" className={styles.form_btn}>
                      <ButtonOne name="Log in" icon={0} className="login__btn"/>
                    </button>
                </div>
            </form>
            <div className={styles.login_link}>
                <h2>Don’t have an account? <Link to="/singin" className={styles.login_link_LinkTo}>Sing In</Link></h2>
                <button className={styles.login_ForgotBtn}>
                    <h2>Forgot password?</h2>
                </button>
            </div>
        </div>
      </section>
    );
}

export default Login_Student;