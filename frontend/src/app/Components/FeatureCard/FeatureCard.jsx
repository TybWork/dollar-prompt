'use client'
import Image from 'next/image';
import styles from '@/app/Components/FeatureCard/FeatureCard.module.css';
import { useRouter } from 'next/navigation';

export const FeatureCard = ({ data }) => {
    const router = useRouter();
    return (
        <div className={styles.featuredCardContainer} onClick={() => { router.push(`/dallprompt/${data._id}`) }}>
            <Image className={styles.image} alt={data.title} src={data.Image_Url[0]} width={350} height={200} />
            <div className={styles.label}>{data.label}</div>
            <div className={styles.bottomText}>
                <h3 className={styles.title}>{data.title}</h3>
                <div className={styles.infoText}>{data.description}</div>
            </div>
        </div>
    );
};

export default FeatureCard;
