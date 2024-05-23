'use client'
import { useState } from "react"
import First from "./firststep/First"
import Second from "./secondstep/Second"
import Dall3 from "./ThirdStep/dall/Dall3"

import Gpt3 from "./ThirdStep/gpt/Gpt3"
import StepsCounter from "@/app/Components/(liteComponents)/StepsCounter/StepsCounter"
import styles from '@/app/(Pages)/sell/sell.module.css'
import SelectCountry from "./fourthstep/SelectCountry"
import axios from "axios"

const page = () => {
    const [step, setstep] = useState(1);
    const [selected, setselected] = useState('');
    const [counter, setcounter] = useState(20);
    const [stepCount, setstepCount] = useState(1)
    const [user, setuser] = useState({})
    const [data, setdata] = useState(user)

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
    function handleSelect(select) {
        const seletedValue = select.target.value;
        setselected(`${seletedValue}`)
    }

    function handleOnchange(changeVal) {
        const { name, value } = changeVal.target
        setuser({ ...user, [name]: value })
        setdata(user)
        console.log(user)
    }

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:4001/api/prompt/dalle/create", data)
            setdata(user)
        } catch (error) {
            console.log("myErrro is here :", error)
        }
    }
    return (
        <div className={styles.parentContainer}>
            <StepsCounter stepCount={stepCount} onPrev={handlePrev} width={counter} />
            {step === 1 && <First onNext={handleNext} />}
            {step === 2 && <Second onSelect={handleSelect} onNext={handleNext} onChange={handleOnchange} />}


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
            {step === 4 && <SelectCountry onClick={handleSubmit} />}

        </div >
    )
}

export default page