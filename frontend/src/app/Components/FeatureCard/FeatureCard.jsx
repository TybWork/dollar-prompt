'use client'
import Image from 'next/image';
import styles from '@/app/Components/FeatureCard/FeatureCard.module.css';
import { useRouter } from 'next/navigation';
export const FeatureCard = ({ data }) => {
    const router = useRouter();
    if (!data) {
        return <div>Loading...</div>; // Or any loading indicator
    }

    return (
        <div className={styles.featuredCardContainer} style={{ cursor: 'pointer' }} onClick={() => { router.push(`/dallprompt/${data._id}`) }}>
            <Image className={styles.image} alt={data.title} src={data.Image_Url[0]} width={350} height={200} />
            <div className={styles.label}>{data.promptType}</div>
            <div className={styles.bottomText}>
                <h3 className={styles.title}>{data.title}</h3>
                <div className={styles.infoText}>{data.description}</div>
            </div>
        </div>
    );
};

export default FeatureCard;
