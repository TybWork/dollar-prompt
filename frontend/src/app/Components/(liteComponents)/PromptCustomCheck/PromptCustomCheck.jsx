import styles from '@/app/Components/(liteComponents)/PromptCustomCheck/PromptCustomCheck.module.css'
const PromptCustomCheck = ({ title }) => {
    return (
        <div className={styles.checkBoxContainer}>
            <div className={styles.title}>{title}</div>
            <input className={styles.checkInput} type="checkbox" name="" id="" />
        </div>
    )
}

export default PromptCustomCheck