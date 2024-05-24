import styles from '@/app/Components/(liteComponents)/RangeSlider/RangeSlider.module.css'
import { useState } from 'react'
const RangeSlider = ({ title, max, min, value, step }) => {
    const [outPutValue, setOutPutValue] = useState(0)
    function onChange(e) {
        console.log(e.target.value)
        setOutPutValue(e.target.value)
    }
    return (
        <div className={styles.parentContainer}>
            <div className={styles.title}>{title}</div>
            <div className={styles.rangeSliderContainer}>
                <input className={styles.rangeSlider} step={step} value={outPutValue} max={max} min={min} type="range" name="" id="" onChange={onChange} />
                <span>{outPutValue}{value}</span>
            </div>
        </div>
    )
}

export default RangeSlider