import styles from '@/app/Components/(liteComponents)/TextAreaComponent/TextArea.module.css'
const TextArea = ({ name, id, rows, onChange, placeholder, margin }) => {
    return (
        <textarea className={styles.textInput} placeholder={placeholder} name={name} id={id} cols="30" rows={rows} onChange={onChange} style={{ marginBottom: margin }} />
    )
}

export default TextArea;