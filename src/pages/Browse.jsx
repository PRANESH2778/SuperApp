import React from 'react'
import styles from './Browse.module.css'
import Info from '../components/Browse/Info'
import Weather from '../components/Browse/Weather'
import News from '../components/Browse/News'
import Notes from '../components/Browse/Notes'
import Timer from '../components/Browse/Timer'
import { useNavigate } from 'react-router-dom'

const Browse = () => {
  const navigate = useNavigate();
  const handlesubmit=()=>{
    navigate("/movies")
  }
  return (
    <div className={styles.body}>
        <div className={styles.left}>
            <div className={styles.top}>
                <div className={styles.userdetail}><Info/></div>
                <div className={styles.weather}><Weather/></div>
                <div className={styles.notes}><Notes/></div>
            </div>
            <div className={styles.timer}><Timer/></div>
        </div>
        <div className={styles.right}><News/>
        <button className={styles.btn1} onClick={handlesubmit}>Browse</button></div>
    </div>
  )
}

export default Browse