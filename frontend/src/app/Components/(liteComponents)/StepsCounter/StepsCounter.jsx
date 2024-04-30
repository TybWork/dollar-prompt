import React from 'react'
import styles from '@/app/Components/(liteComponents)/StepsCounter/StepsCounter.module.css'

const StepsCounter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.stepsPercentage}></div>
            <div className={styles.stepCounter}>Step 1/6</div>
        </div>
    )
}

export default StepsCounter;