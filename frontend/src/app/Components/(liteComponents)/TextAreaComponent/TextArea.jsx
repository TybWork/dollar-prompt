import styles from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea.module.css'
const TextArea = ({ name, id, rows, onChange, placeholder }) => {
    return (
        <div>
            <textarea className={styles.textInput} placeholder={placeholder} name={name} id={id} cols="30" rows={rows} onChange={onChange} />
        </div>
    )
}

export default TextArea;