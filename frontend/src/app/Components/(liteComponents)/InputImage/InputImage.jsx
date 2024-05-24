import styles from '@/app/Components/(liteComponents)/InputImage/InputImage.module.css'
const InputImage = () => {
    return (
        <div className={styles.ImageContainer}>
            <input className={styles.imageInput} type="file" multiple name="" id="" />
        </div>
    )
}

export default InputImage