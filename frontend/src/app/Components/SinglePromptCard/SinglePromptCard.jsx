import React from 'react'
import Image from 'next/image';
import styles from '@/app/Components/SinglePromptCard/SinglePromptCard.module.css'

const SinglePromptCard = () => {
    return (
        <div className={styles.promptCardContainer}>
            <Image className={styles.image} src="/assets/imageAssets/featureCard.webp" width={250} height={140} />
            <div className={styles.label}>Midjourney </div>
            <div className={styles.bottomText}>
                <h3 className={styles.title}>Character Design</h3>
                <div className={styles.infoText}>$4.55</div>
            </div>
        </div>
    )
}

export default SinglePromptCard;