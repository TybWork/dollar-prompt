import FieldInfo from "@/app/Components/(liteComponents)/FieldInfo/FieldInfo"
import styles from '@/app/(Pages)/sell/ThirdStep/Llama/Llama.module.css'
import TextArea from "@/app/Components/(liteComponents)/TextAreaComponent/TextArea"
import RangeSlider from "@/app/Components/(liteComponents)/RangeSlider/RangeSlider"
import MultiFuntionBtn from "@/app/Components/(liteComponents)/MultiFunctionBtn/MultiFuntionBtn"
const Llama = () => {
    return (
        <div className={styles.LlamaContainer}>
            {/* main field */}
            <div className={styles.mainField}>
                <FieldInfo title="*Prompt" description="Put any variables in [square brackets]." />
                <TextArea placeholder="An Impressionist oil painting of [Flower] in a purple vase.." rows={15} margin="0px" />
            </div>

            {/* model field */}
            <div className={styles.modelField}>
                <FieldInfo title="*Model" description="What Llama model does this prompt use?" />
                {/* selection tab */}
                <select style={{ width: "180px" }} defaultValue="Selelct Llama Model" className="select" name="LlamaModel" id="LlamaModel">
                    <option key="Selelct Llama Model" value="Selelct Llama Model" disabled>Selelct Llama Model</option>
                    <option key="3 70b Chat" value="3 70b Chat">3 70b Chat</option>
                    <option key="3 8b Chat" value="3 8b Chat">3 8b Chat</option>
                    <option key="3 70b" value="3 70b">3 70b</option>
                    <option key="3 8b" value="3 8b">3 8b</option>
                    <option key="2 70b Chat" value="2 70b Chat">2 70b Chat</option>
                    <option key="2 13b Chat" value="2 13b Chat">2 13b Chat</option>
                    <option key="2 7b Chat" value="2 7b Chat">2 7b Chat</option>
                    <option key="2 70b" value="2 70b">2 70b</option>
                    <option key="2 7b" value="2 7b">2 7b</option>
                </select>
            </div>

            {/* range sliders */}
            <div className={styles.rangeSlider}>
                <RangeSlider title="Max Tokens" min="3" max="3993" />
                <RangeSlider title="Temperature" step=".05" min="0.0" max="3.0" />
                <RangeSlider title="Top p" step="0.05" min="0" max="1" />
                <RangeSlider title="Repitition Penalty" step="0.05" min="0" max="3" />
            </div>

            {/* textUploader container */}
            <div className={styles.textUploaderContainer}>
                {/* example text container */}
                <div className={styles.exampleWrapper}>
                    <div>
                        <FieldInfo title="*Example outputs" description="Add 4 example outputs from your prompt." />
                        <TextArea rows={5} placeholder="Paste your output here" margin="0px" />
                    </div>
                    {/* multi functional button */}
                    <MultiFuntionBtn border="red" background="transparent" />
                    {/* afterbutton clicked active */}
                    <div>
                        <FieldInfo title="*Example prompts" description="Learn more about prompt exampels" linkText="here" linkUrl="/" />
                        <div className={styles.examplesContainer}></div>
                    </div>
                </div>
            </div>

            {/* *Prompt Instructions*/}
            <div className={styles.mainField}>
                <FieldInfo title="*Prompt Instructions" description="Any extra tips or examples for the buyer on how to use this prompt." />
                <TextArea placeholder="To get the most out of this prompt you need to.." rows={20} />
            </div>
        </div>
    )
}

export default Llama