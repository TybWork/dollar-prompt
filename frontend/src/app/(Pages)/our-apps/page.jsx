import styles from '@/app/(Pages)/our-apps/our-apps.module.css'
import Slider from '@/app/Components/Slider/Slider'
const page = () => {
    return (
        <div className={styles.parentContainer}>
            <Slider />
            <Slider />
            <Slider />
        </div>
    )
}

export default page;