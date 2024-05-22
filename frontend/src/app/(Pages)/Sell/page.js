'use client'
import { useState } from "react"
import First from "./firststep/First"
import Second from "./secondstep/Second"
import Dall3 from "./ThirdStep/dall/Dall3"

import Gpt3 from "./ThirdStep/gpt/Gpt3"
import StepsCounter from "@/app/Components/(liteComponents)/StepsCounter/StepsCounter"
import styles from '@/app/(Pages)/sell/sell.module.css'
import SelectCountry from "./fourthstep/SelectCountry"

const page = () => {
    const [step, setstep] = useState(1);
    const [selected, setselected] = useState('');
    const [counter, setcounter] = useState(20);
    const [stepCount, setstepCount] = useState(1)
    const [user, setuser] = useState({})

    // next button handle
    function handleNext() {
        setstep((prev) => prev + 1)
        setcounter(prev => prev + 20)
        setstepCount(prev => prev + 1)
    }
    // previous button handle
    function handlePrev() {
        if (stepCount < 2) {
            setstepCount(1)
        } else {
            setstep(prev => prev - 1)
            setcounter(prev => prev - 20)
            setstepCount(prev => prev - 1)
        }
    }
    function handleSelect(e) {
        const seletedValue = e.target.value;
        setselected(`${seletedValue}`)
    }

    function handleOnchange(e) {
        // console.log(e.target.value)
        const { name, value } = e.target
        console.log(name, value)
        setuser({ ...user, [name]: value })
        console.log(user)
    }
    return (
        <div className={styles.parentContainer}>
            <StepsCounter stepCount={stepCount} onPrev={handlePrev} width={counter} />
            {step === 1 && <First onNext={handleNext} />}
            {step === 2 && <Second onSelect={handleSelect} onNext={handleNext} />}


            {/* *************conditional rendering (step3)*********** */}

            {/* dalle prompt sell */}
            {selected === "Dall-E" && step >= 3 && (
                <div>
                    {step === 3 && <Dall3 onNext={handleNext} onChange={handleOnchange} />}
                </div>
            )}

            {/* dalle prompt sell */}
            {selected === "GPT" && step >= 3 && (
                <div>
                    {step === 3 && <Gpt3 onNext={handleNext} onChange={handleOnchange} />}
                </div>
            )}

            {/* ************* select Country (step4)*********** */}
            {step === 4 && <SelectCountry />}

        </div >
    )
}

export default page