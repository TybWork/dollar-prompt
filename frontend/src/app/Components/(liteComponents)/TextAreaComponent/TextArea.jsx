import styles from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea.module.css'
const TextArea = (props) => {
    return (
        <div>
            <textarea className={styles.textInput} placeholder={props.placeholder} name="" id="" cols="30" rows={props.rows} />
        </div>
    )
}

export default TextArea;