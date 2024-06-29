import styles from "@/app/Components/GradientButton/GradientButton.module.css"
const GradientButton = ({ title, onClick }) => {
    return (
        <button className={styles.gradientBtn} onClick={onClick}>{title}</button>
    )
}
export default GradientButton;