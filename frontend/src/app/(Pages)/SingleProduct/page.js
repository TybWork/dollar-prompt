import React from 'react'
import styles from "@/app/(Pages)/SingleProduct/page.module.css"
import Image from 'next/image';
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdRemoveRedEye } from "react-icons/md";
import Favourites from '@/app/Components/Favourites/Favourites';
import IconText from '@/app/Components/(liteComponents)/IconText/IconText';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { HiMiniPaintBrush } from "react-icons/hi2";
import GradientButton from '@/app/Components/GradientButton/GradientButton';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const page = () => {
    return (
        <div className={styles.mainContainer}>
            {/* leftContainer */}
            <div className={styles.leftContainer}>
                <CiHeart className={styles.favouriteIcon} />

                {/* background Hero Image */}
                <div className={styles.imageGradient}>
                    <img src="/assets/imageAssets/mainProductImage.webp" />
                    <div className={styles.gradient}></div>
                    <div className={styles.logo}>
                        <IconText text="⛵" icon="Midjourney" />
                    </div>
                </div>

                <h1 className={styles.heading}>Fantasy Character Generator For Ttrpgs
                </h1>
                {/* image section */}
                <div className={styles.smallImageSection}>
                    <Image className={styles.image} src="/assets/imageAssets/productSmallImage.webp" width={120} height={60} />

                    {/* favourites Container */}
                    <Favourites icon={<IoMdHeart />} text="Favourites" />

                    {/* views container */}
                    <Favourites icon={<MdRemoveRedEye />} text="Favourites" />
                </div>
                {/* other info  */}
                <div className={styles.verifiedInfo}>
                    <IconText text="58" icon="words" />
                    <IconText text="Tested" icon={<RiVerifiedBadgeFill />} />
                    <IconText text="Tips" icon={<RiVerifiedBadgeFill />} />
                    <IconText text="HQ images" icon={<RiVerifiedBadgeFill />} />
                    <IconText text={<HiMiniPaintBrush />} icon={<RiVerifiedBadgeFill />} />
                </div>

                {/* designerInfo */}
                <div className={styles.designerInfoContainer}>
                    <Image src="/assets/imageAssets/logo.png" width={25} height={25} />
                    <div className={styles.designerSocialHandle}>@darodesignsby</div>
                </div>

                {/* prompt info */}
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut libero eaque natus architecto voluptate vel provident odit ratione doloremque quas maiores animi omnis officiis vero aspernatur, nulla porro quam blanditiis minima quaerat! Dolorum quod aut, ipsa dolorem culpa rerum non eligendi aliquam asperiores ipsam quia consectetur necessitatibus impedit asperiores!
                </div>

                {/* price */}
                <div className={styles.price}><span>$</span>3.99</div>

                {/* Get your prompt */}
                <div className={styles.getPromptContainer}>
                    <GradientButton title="Get prompt" />
                    <div className={styles.cartContainer}>
                        <MdOutlineAddShoppingCart className={styles.cart} />
                    </div>
                </div>

                {/* purchasing benefits */}
                <div className={styles.purchasingBenefits}>
                    Lorem ipsum, dolor sit amet consectetur placeat non temporibus. Sequi accusantium ipsum dolorum eius ipsam odit incidu corporis saepe ducimus itaque ex maiores obcaecati voluptate perspiciatis quidem. Accusamus, soluta quos.
                </div>

                {/* creation date */}
                <div className={styles.timeStamp}>2 weeks ago</div>

            </div>

            {/* right container */}
            <div className={styles.rightContainer}>
                <Image src="/assets/imageAssets/img1.webp" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                <Image src="/assets/imageAssets/img2.webp" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                <Image src="/assets/imageAssets/img3.webp" width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            </div>
        </div >
    )
}

export default page