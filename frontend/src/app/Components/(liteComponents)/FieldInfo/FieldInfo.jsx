import styles from "@/app/Components/(liteComponents)/FieldInfo/FieldInfo.module.css"
const FieldInfo = (props) => {
    return (
        <div className={styles.fieldContainer}>
            <div className={styles.fieldTitle}>{props.title}</div>
            <i className={styles.fieldDescription}>{props.description}</i>
        </div>
    )
}

export default FieldInfo