'use client'
import { useState, useEffect } from "react"
import First from "./firststep/First"
import Second from "./secondstep/Second"
import Dall3 from "./ThirdStep/dall/Dall3"

import Gpt3 from "./ThirdStep/gpt/Gpt3"
import StepsCounter from "@/app/Components/(liteComponents)/StepsCounter/StepsCounter"
import styles from '@/app/(Pages)/sell/sell.module.css'
import SelectCountry from "./fourthstep/SelectCountry"
import axios from "axios"
import Leonardo from "./ThirdStep/leonardo/Leonardo"
import Llama from "./ThirdStep/Llama/Llama"
import Midjourney from "./ThirdStep/Midjourney/Midjourney"
import StableDiffusion from "./ThirdStep/StableDiffusion/StableDiffusion"

const page = () => {
    const [step, setstep] = useState(1);
    const [selected, setselected] = useState('');
    const [counter, setcounter] = useState(20);
    const [stepCount, setstepCount] = useState(1)
    const [user, setuser] = useState({})
    const [data, setdata] = useState(user)
    const [file, setfile] = useState([])

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
        const { name, value, type } = changeVal.target;

        if (type === 'file') {
            const files = changeVal.target.files[0]; // Get the selected files array
            console.log(files)
            setfile(prev => [...prev, files])
            setuser(prevUser => ({ ...prevUser, myfiles: file }));
            // Update user state with the files array
            setdata(user)
            console.log(data)
        } else {
            setuser((prevUser) => ({ ...prevUser, [name]: value })); // Update user state with the input value
            setdata(user)
            console.log(data)
        }
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        for (const key in user) {
            if (key === 'myfiles') {
                Array.from(user[key]).forEach(file => formData.append(key, file));
            } else {
                formData.append(key, user[key]);
            }
        }

        try {
            await axios.post("http://localhost:4001/api/prompt/dalle/create", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
        } catch (error) {
            console.log("myError is here:", error);
        }
    };
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

            {/* Leonardo prompt sell */}
            {selected === "Leonardo Ai" && step >= 3 && (
                <div>
                    {step === 3 && <Leonardo onNext={handleNext} onChange={handleOnchange} />}
                </div>
            )}

            {/* Leonardo prompt sell */}
            {selected === "Llama" && step >= 3 && (
                <div>
                    {step === 3 && <Llama onNext={handleNext} onChange={handleOnchange} />}
                </div>
            )}

            {/* Midjourney prompt sell */}
            {selected === "Midjourney" && step >= 3 && (
                <div>
                    {step === 3 && <Midjourney onNext={handleNext} onChange={handleOnchange} />}
                </div>
            )}

            {/* stable diffusion prompt sell */}
            {selected === "Stable Diffusion" && step >= 3 && (
                <div>
                    {step === 3 && <StableDiffusion onNext={handleNext} onChange={handleOnchange} />}
                </div>
            )}

            {/* ************* select Country (step4)*********** */}
            {step === 4 && <SelectCountry onClick={handleSubmit} />}

        </div >
    )
}

export default page