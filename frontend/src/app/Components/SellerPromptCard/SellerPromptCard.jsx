import Image from 'next/image';
import styles from '@/app/Components/SellerPromptCard/SellerPromptCard.module.css'
import GradientButton from '../GradientButton/GradientButton';

const SellerPromptCard = () => {
    return (
        <div className={styles.featuredCardContainer}>
            <Image className={styles.image} alt='demo_image' src="/assets/imageAssets/featureCard.webp" width={350} height={200} />
            <div className={styles.label}>Featured Prompt</div>
            <div className={styles.bottomText}>
                <h3 className={styles.title}>Vibrant Graphic Design Posters</h3>
                <div className={styles.infoText}>Palette perfect posters</div>
            </div>
            <div className={styles.editBtn}>
                <GradientButton title="edit" />
            </div>
        </div>
    )
}
export default SellerPromptCard;