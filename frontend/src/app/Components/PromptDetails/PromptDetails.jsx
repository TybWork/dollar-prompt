import styles from '@/app/Components/PromptDetails/PromptDetails.module.css'
import PromptType from '../(liteComponents)/PromptType/PromptType';
const PromptDetails = () => {
    return (
        <div>
            {/* heading */}
            <h2 className={styles.heading}>Prompt Details</h2>

            {/* info text */}
            <div className={styles.infoContainer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, aperiam!</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            {/* prompt type */}
            <PromptType />

        </div>
    )
}

export default PromptDetails;