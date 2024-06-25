'use client'
import styles from '@/app/(Pages)/seller/seller.module.css'
import Image from 'next/image'
import Tab from '@/app/Components/Tab/Tab';
// import { HiPlus } from "react-icons/hi";
import { IoMdCreate } from "react-icons/io";
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';

const page = ({ params }) => {
    const { userid } = params;

    const [sellerData, setsellerData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:4001/api/seller/getseller?userId=${userid}`)
            .then((response) => {
                setsellerData(response.data[0])
            })

    }, [])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.bannerOuterContainer}>
                <div className={styles.banner}>
                    {sellerData.profileBanner && (  // ensures that logging only happens when sellerData and sellerData.profileBanner
                        <Image
                            className={styles.bannerImage}
                            src={sellerData.profileBanner[0]}
                            width={0}
                            height={0}
                            sizes='100vw'
                            alt='Banner'
                        />
                    )}
                </div>
                <div className={styles.userLogo}>
                    {
                        sellerData.profileImage && (
                            <Image className={styles.logoImage} alt="profile Image" src={sellerData.profileImage[0]} width={0} height={0} sizes='100vw' />
                        )
                    }
                </div>
            </div>

            {/* profile content wrapper */}
            <div className={styles.profileWrapper}>

                {/* user name links */}
                <div className={styles.userNameLinks}>
                    <div className={styles.userName}>@{sellerData.profileHandle}
                    </div>
                </div>

                {/* profile bio */}
                <div className={styles.profileBio}>
                    {sellerData.profileDescription}
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