import styles from '@/app/Components/Filter/Filter.module.css'
import SingleFilter from '../(liteComponents)/SingleFilter/SingleFilter'
const Filter = () => {
    return (
        <div className={styles.parentContainer}>
            <div className={styles.heading}>Product</div>
            <SingleFilter />

            <div className={styles.heading}>Type</div>
            <SingleFilter />

            <div className={styles.heading}>Sort by</div>
            <SingleFilter />

            <div className={styles.heading}>Categories</div>
            <SingleFilter />
        </div>
    )
}

export default Filter