import styles from '@/app/Components/Filter/Filter.module.css'
import SingleFilter from '../(liteComponents)/SingleFilter/SingleFilter'
const Filter = () => {
    return (
        <div className={styles.parentContainer}>
            <div>
                <div className={styles.heading}>Product</div>
                <SingleFilter />
            </div>


            <div>
                <div className={styles.heading}>Type</div>
                <SingleFilter />
            </div>

            <div>
                <div className={styles.heading}>Sort by</div>
                <SingleFilter />
            </div>

            <div>
                <div className={styles.heading}>Categories</div>
                <SingleFilter />
            </div>
        </div>
    )
}

export default Filter