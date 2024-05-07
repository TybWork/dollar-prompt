import styles from '@/app/Components/(liteComponents)/SingleFilter/SingleFilter.module.css'
const SingleFilter = () => {
    return (
        <>
            <div className={styles.singleFilterContainer}>
                <div className={styles.line}></div>
                <input className={styles.inputBox} type="checkbox" name="" id="html" />
                <label htmlFor="html">Prompts</label>
            </div>
            <div className={styles.singleFilterContainer}>
                <div className={styles.line}></div>
                <input className={styles.inputBox} type="checkbox" name="" id="css" />
                <label htmlFor="css">Prompts</label>
            </div>
            <div className={styles.singleFilterContainer}>
                <div className={styles.line}></div>
                <input className={styles.inputBox} type="checkbox" name="" id="js" />
                <label htmlFor="js">Prompts</label>
            </div>
        </>
    )
}

export default SingleFilter