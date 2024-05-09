import styles from '@/app/(Pages)/our-apps/our-apps.module.css'
import FeatureCard from '@/app/Components/FeatureCard/FeatureCard';
import SinglePrompt from '@/app/Components/SinglePrompt/SinglePrompt';
import SinglePromptCard from '@/app/Components/SinglePromptCard/SinglePromptCard';
import Slider from '@/app/Components/Slider/Slider'
const page = () => {
    return (
        <div className={styles.parentContainer}>
            <Slider component={<SinglePromptCard />} />
            <Slider component={<SinglePrompt />} />
            <Slider component={<FeatureCard />} />
        </div>
    )
}

export default page;