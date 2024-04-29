import styles from '@/app/Components/(liteComponents)/IconText/IconText.module.css'
const IconText = (props) => {
    return (
        <div className={styles.container}>
            <div>{props.text}</div>
            <div>{props.icon}</div>
        </div>
    )
}

export default IconText