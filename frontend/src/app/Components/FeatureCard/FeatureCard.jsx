import React from 'react'
import Image from 'next/image';
import styles from '@/app/Components/FeatureCard/FeatureCard.module.css'

const FeatureCard = () => {
    return (
        <div className={styles.featuredCardContainer}>
            <Image className={styles.image} src="/assets/imageAssets/featureCard.webp" width={350} height={200} />
            <div className={styles.label}>Featured Prompt</div>
            <div className={styles.bottomText}>
                <h3 className={styles.title}>Vibrant Graphic Design Posters</h3>
                <div className={styles.infoText}>Palette perfect posters</div>
            </div>
        </div>
    )
}

export default FeatureCard;