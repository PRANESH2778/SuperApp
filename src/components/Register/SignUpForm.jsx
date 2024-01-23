import React, { useState } from 'react'
import styles from "./Form.module.css"
import { json ,useNavigate} from 'react-router-dom'

const SignUpForm = () => {
    const [formValues,setFormvalues] = useState({
        check: false,
        name:"",
        username:"",
        mail:"",
        mobile:"",
    })
    const [nameError,setNameError] = useState(false)
    const [usernameError,setUserNameError] = useState(false)
    const [mailError,setMailError] = useState(false)
    const [mobileError,setMobileError] = useState(false)
    const [signUpError,setSignUpError] = useState(false)
    const navigate = useNavigate();
    const handleChange = (e)=>{
        setFormvalues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let valid = true;
        if(!(formValues.name.trim().length > 0)){
            setNameError(true);
            valid = false;
        }else{
            setNameError(false)
        }
        if(!(formValues.username.trim().length > 0)){
            setUserNameError(true);
            valid = false;
        }else{
            setUserNameError(false)
        }
        if(!(formValues.mail.trim().length > 0)){
            setMailError(true);
            valid = false;
        }else{
            setMailError(false)
        }
        if(!(formValues.mobile.trim().length > 0)){
            setMobileError(true);
            valid = false;
        }else{
            setMobileError(false)
        }
        if(!formValues.check){
            setSignUpError(true)
            valid = false;
        }else{
            setSignUpError(false)
        }
        if(valid){
            window.localStorage.setItem("userData",JSON.stringify(formValues))
            navigate("/genre");
        }
    }

  return (
    <div className={styles.signup}>
        <h2>Super app</h2>
        <p id={styles.create}>Create your new account</p>
        <form className={styles.form}>
            <input type='text' name='name' placeholder='Name' onChange={(e)=>{handleChange(e)}}/>
            {nameError ? (
            <p className={styles.error}>Please fill correctly</p>
            ) : (
            <></>
            )}
            <input type='text' name='username' placeholder='UserName' onChange={(e)=>{handleChange(e)}}/>
            {usernameError ? (
            <p className={styles.error}>Please fill correctly</p>
            ) : (
            <></>
            )}
            <input type='mail' name='mail' placeholder='Email' onChange={(e)=>{handleChange(e)}}/>
            {mailError ? (
            <p className={styles.error}>Please fill correctly</p>
            ) : (
            <></>
            )}
            <input type='number' name='mobile' placeholder='Mobile' onChange={(e)=>{handleChange(e)}}/>
            {mobileError ? (
            <p className={styles.error}>Please fill correctly</p>
            ) : (
            <></>
            )}
            <label><input onChange={(e) =>
              setFormvalues({
                ...formValues,
                [e.target.name]: e.target.checked,
              })}type="checkbox" name="check"/> Share my registration data with Superapp</label>
            {signUpError ? <p className={styles.error}>Please tick this</p> : <></>}
            <button className={styles.Btn1} onClick={(e)=>{handleSubmit(e)}}>SIGN UP</button>
            <p>By clicking on Sign up. you agree to Superapp <span>Terms and <br/>Conditions of Use</span></p>
            <p>To learn more about how Superapp collects, uses, shares and <br/>protects your personal data please head Superapp <span>Privacy <br/>Policy</span></p>
        </form>
    
    </div>
  )
}

export default SignUpForm