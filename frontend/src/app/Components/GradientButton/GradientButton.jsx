import styles from "@/app/Components/GradientButton/GradientButton.module.css"
const GradientButton = (props) => {
    return (
        <button className={styles.gradientBtn} onClick={props.onClick}>{props.title}</button>
    )
}
export default GradientButton