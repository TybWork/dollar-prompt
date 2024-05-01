import styles from '@/app/Components/(liteComponents)/DropDownList/DropDownList.module.css'
const DropDownList = () => {
    return (
        <div>
            <select className={styles.select} name="promptType" id="cars">
                <option value="dall">Dall-E</option>
                <option value="gpt">GPT</option>
                <option value="leonardoai">LeonardoAi</option>
                <option value="llama">Llama</option>
                <option value="midjourney">Midjourney</option>
                <option value="stablediffusion">Stable Diffusion</option>
            </select>
        </div>
    )
}

export default DropDownList