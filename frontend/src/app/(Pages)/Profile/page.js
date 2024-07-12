import styles from '@/app/(Pages)/Profile/page.module.css'
import Image from 'next/image'

import { LuGlobe } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import Search from '@/app/Components/(liteComponents)/Search/Search';
import Loading from '@/app/Components/(liteComponents)/Loading/Loading';


const page = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.bannerOuterContainer}>
                <div className={styles.banner}>
                    <Image className={styles.bannerImage} src="/assets/imageAssets/profileBanner.webp" width={0} height={0} sizes='100vw' />
                </div>
                <div className={styles.userLogo}>
                    <Image className={styles.logoImage} src="/assets/imageAssets/logo.webp" width={0} height={0} sizes='100vw' />
                </div>
                {/* follow button */}
                <button className={styles.followBtn}>
                    Follow <FaUserPlus />
                </button>
            </div>

            {/* profile content wrapper */}
            <div className={styles.profileWrapper}>

                {/* user name links */}
                <div className={styles.userNameLinks}>
                    <div className={styles.userName}>@charismaenigma
                    </div>
                    <div className={styles.socialIcons}>

                        <a href="/">
                            <LuGlobe />
                        </a>

                        <a href="/">
                            <LuInstagram />
                        </a>

                        <a href="/">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>

                {/* profile bio */}
                <div className={styles.profileBio}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique expedita officiis nesciunt voluptatem possimus repellat repudiandae? Aperiam distinctio fuga omnis veniam, a ab veritatis quas unde voluptates consequuntur enim quam ducimus iusto accusantium sit!
                </div>

                {/*---------------- user stats--------- */}
                <div className={styles.userStats}>

                    {/* stats */}
                    <div className={styles.stats}>
                        <IoMdEye /> 100
                    </div>
                    {/* success badge */}
                    <div className={styles.successBadge}>
                        Top Seller <BsFillGearFill />
                    </div>

                    {/*---- profile sub details----- */}
                    {/* profile rank */}
                    <div className={styles.profileSubDetail}>
                        PromptBase Rank: <b className={styles.detail}>#8</b>
                    </div>

                    {/* joining date */}
                    <div className={styles.profileSubDetail}>
                        Joined: <b className={styles.detail}>September 2024</b>
                    </div>
                </div>

                {/* models wrapper */}
                <div className={styles.modelsWrapper}>
                    <div className={styles.singleModel}>🎨 Dall-E</div>
                </div>

                {/* ----------profileWrapper--------- */}
                <div className={styles.profileReviews}>
                    {/* ratings */}
                    <div className={styles.ratingContainer}>
                        <div className={styles.starRating}>4.9</div>
                        <div className={styles.starsContainer}>
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <MdStar />
                            <MdStar />
                        </div>
                        <div className={styles.reviewCount}>(<span>147</span>)</div>
                    </div>

                    {/* followers  */}
                    <div className={styles.numFollows}>
                        0<span> Followers</span>
                    </div>

                    {/* followings  */}
                    <div className={styles.numFollows}>
                        266<span> Followings</span>
                    </div>
                </div>

                {/* search bar */}
                <Search placeholder="Search @charismaenigma's prompts" />
            </div>

        </div>
    )
}

export default page