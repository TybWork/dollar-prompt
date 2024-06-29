import styles from '@/app/Components/(liteComponents)/MultiFunctionBtn/MultiFunctionBtn.module.css'
const MultiFuntionBtn = ({ onClick, gradient, disabled }) => {
    return (
        <button disabled={disabled} className={gradient ? styles.gradient : styles.bordered} onClick={onClick}>Add example +</button>
    )
}

export default MultiFuntionBtn