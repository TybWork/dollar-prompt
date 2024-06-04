import styles from '@/app/Components/(liteComponents)/InputImage/InputImage.module.css'
const InputImage = ({ onChange }) => {
    return (
        <div className={styles.ImageContainer}>
            <input onChange={onChange} className={styles.imageInput} type="file" name="myfiles" accept="image/jpeg,image/png,video/*" multiple required />
        </div>
    )
}

export default InputImage;