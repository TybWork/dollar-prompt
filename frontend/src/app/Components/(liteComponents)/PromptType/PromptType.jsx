import styles from "@/app/Components/(liteComponents)/PromptType/PromptType.module.css";
import FieldInfo from "../FieldInfo/FieldInfo"
import GradientButton from "../../GradientButton/GradientButton";
import TextArea from "../TextAreaComponent/TextArea";
const PromptType = () => {
    return (
        <div>
            <FieldInfo title="Prompt Type" description="Select the type of prompt you want to sell" />

            {/* promptType */}
            <select className={styles.select} name="promptType" id="cars">
                <option value="dall">Dall-E</option>
                <option value="gpt">GPT</option>
                <option value="leonardoai">LeonardoAi</option>
                <option value="llama">Llama</option>
                <option value="midjourney">Midjourney</option>
                <option value="stablediffusion">Stable Diffusion</option>
            </select>

            {/* name field */}
            <FieldInfo title="Name" description="Suggest a title for this prompt." />
            <input className={styles.textInput} placeholder="Movie to Emoji Generator" type="text" name="" id="" />

            {/* textArea field */}
            <FieldInfo title="Description" description="Describe what your prompt does to a potential buyer. A more detailed description will increase your sales." />
            <TextArea placeholder="Movie to Emoji Generator" rows="3" />

            {/* price */}
            <FieldInfo title="Estimated Price" description="What do you think the price of this prompt should be?" />
            <div className={styles.pricingContainer}>
                <select className={styles.select} name="promptType" id="cars">
                    <option value="dall">$2.99</option>
                    <option value="gpt">$3.99</option>
                    <option value="leonardoai">$4.99</option>
                    <option value="llama">$5.99</option>
                    <option value="midjourney">$6.99</option>
                </select>

                {/* button */}
                <GradientButton title="Next" />
            </div>

        </div>
    )
}

export default PromptType;