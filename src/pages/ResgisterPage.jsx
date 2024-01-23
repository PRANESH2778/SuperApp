import React from 'react'
import styles from './Registerpage.module.css'
import Banner from '../components/Register/Banner'
import SignUpForm from '../components/Register/SignUpForm'
const ResgisterPage = () => {
  return (
    <div className={styles.main}>
        <Banner/>
        <SignUpForm />
    </div>
  )
}

export default ResgisterPage