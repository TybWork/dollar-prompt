"use clients"
import Image from 'next/image';
import styles from '@/app/Components/SinglePromptCard/SinglePromptCard.module.css'

const SinglePromptCard = ({ image, label, title, price, onClick }) => {
    return (
        <div className={`${styles.promptCardContainer}`} onClick={onClick}>
            <Image className={styles.image} alt="image" src={image || "/assets/imageAssets/featureCard.webp"} width={250} height={140} />
            <div className={styles.label}>{label || 'Midjourney'}</div>
            <div className={styles.bottomText}>
                <h3 className={styles.title}>{title || "Character Design"}</h3>
                <div className={styles.infoText}>{price || "$4.55"}</div>
            </div>
        </div>
    )
}
export default SinglePromptCard;