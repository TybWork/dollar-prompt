'use client'
import { useState } from 'react';
import styles from '@/app/Components/(liteComponents)/StepsCounter/StepsCounter.module.css';
import { LiaAngleLeftSolid } from "react-icons/lia";

const StepsCounter = () => {
    const [backBtn, setbackBtn] = useState('0px')
    function backBtnEnter() {
        setbackBtn('4px')
    }
    function backBtnLeave() {
        setbackBtn('0px')
    }
    return (
        <div className={styles.container}>
            <div className={styles.backBtn} onMouseLeave={backBtnEnter} onMouseEnter={backBtnLeave} style={{ transform: `translateX(${backBtn})` }}>
                <LiaAngleLeftSolid />
                Back
            </div>
            <div className={styles.stepsPercentage}>
                <div className={styles.realPercentage}></div>
            </div>
            <div className={styles.stepCounter}>Step 1/6</div>
        </div>
    )
}

export default StepsCounter;