import styles from "@/app/Components/GradientButton/GradientButton.module.css"
const GradientButton = (props) => {
    return (
        <button className={styles.gradientBtn}>{props.title}</button>
    )
}
export default GradientButton