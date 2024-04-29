import React from 'react'
import styles from "@/app/(Pages)/SingleProduct/page.module.css"
import Image from 'next/image';
import { IoMdHeart } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import Favourites from '@/app/Components/Favourites/Favourites';

const page = () => {
    return (
        <div>
            {/* leftContainer */}
            <div>
                <div className={styles.logo}>promptLogo</div>
                <h1 className={styles.heading}>Coloring Book Images For Kids</h1>
                {/* image section */}
                <div className={styles.smallImageSection}>
                    <Image className={styles.image} src="/assets/imageAssets/productSmallImage.webp" width={120} height={60} />

                    {/* favourites Container */}
                    <Favourites icon={<IoMdHeart />} text="Favourites" />

                    {/* views container */}
                    <Favourites icon={<MdRemoveRedEye />} text="Favourites" />
                </div>
            </div>

            {/* right container */}
            <div></div>
        </div >
    )
}

export default page