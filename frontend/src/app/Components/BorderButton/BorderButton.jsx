import styles from "@/app/Components/BorderButton/BorderButton.module.css"
const BorderButton = (props) => {
    return (
        <button className={styles.borderBtn}>{props.title}</button>
    )
}
export default BorderButton;