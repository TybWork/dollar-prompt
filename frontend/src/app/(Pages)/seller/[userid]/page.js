import styles from '@/app/(Pages)/seller/seller.module.css'
import Image from 'next/image'
import Tab from '@/app/Components/Tab/Tab';
// import { HiPlus } from "react-icons/hi";
import { IoMdCreate } from "react-icons/io";
import Link from 'next/link';


const page = async ({ params }) => {
    const { userid } = params;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.bannerOuterContainer}>
                <div className={styles.banner}>
                    <Image className={styles.bannerImage} src="/assets/imageAssets/profileBanner.webp" width={0} height={0} sizes='100vw' />
                </div>
                <div className={styles.userLogo}>
                    <Image className={styles.logoImage} src="/assets/imageAssets/logo.webp" width={0} height={0} sizes='100vw' />
                </div>
            </div>

            {/* profile content wrapper */}
            <div className={styles.profileWrapper}>

                {/* user name links */}
                <div className={styles.userNameLinks}>
                    <div className={styles.userName}>@{userid}
                    </div>
                </div>

                {/* profile bio */}
                <div className={styles.profileBio}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique expedita officiis nesciunt voluptatem possimus repellat repudiandae? Aperiam distinctio fuga omnis veniam, a ab veritatis quas unde voluptates consequuntur enim quam ducimus iusto accusantium sit!
                </div>

                {/* ................categories............ */}
                <Tab sellerId={userid} />
            </div>

            <div className={styles.createPrompt}>
                <Link href='/sell'>
                    <div className={styles.createPromptIcon}>
                        <IoMdCreate />
                    </div>
                    {/* Create Prompt */}
                </Link>
            </div>
        </div>
    )
}

export default page