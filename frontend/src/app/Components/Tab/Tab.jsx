'use client'
import { useEffect, useState } from 'react';
import styles from '@/app/Components/Tab/Tab.module.css'
import CategoriesBtn from '@/app/Components/(liteComponents)/categoriesBtn/categoriesBtn';
import Search from '../(liteComponents)/Search/Search';
import Slider from '../Slider/Slider';
import SinglePromptCard from '../SinglePromptCard/SinglePromptCard';
import { IoMdEye } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import Image from 'next/image';

const Tab = ({ sellerId }) => {
    const [activeTab, setactiveTab] = useState('PROMPTS')
    //switch categroy function for tab buttons
    function switchCategory(e) {
        const buttonText = e.target.innerText;
        setactiveTab(buttonText)
    }

    useEffect(() => {
        console.log(activeTab)
    }, [activeTab])
    return (
        <div className={styles.categories}>

            {/* categories buttons */}
            <div className={styles.btns}>
                <CategoriesBtn onClick={switchCategory} title="PROMPTS" btnClass={activeTab === "PROMPTS" ? 'active' : 'inActive'} />
                <CategoriesBtn onClick={switchCategory} title="ANALYTICS" btnClass={activeTab === "ANALYTICS" ? 'active' : 'inActive'} />
                <CategoriesBtn onClick={switchCategory} title="REVENUE" btnClass={activeTab === "REVENUE" ? 'active' : 'inActive'} />
            </div>

            {/* prompts section */}
            {
                activeTab === "PROMPTS" &&
                <div className={styles.prompt}>
                    <select name="promptCategories" id="" className='select'>
                        <option key="dall" value="dall">DallE</option>
                        <option key="gpt" value="gpt">GPT</option>
                    </select>

                    <Search placeholder={`Search ${sellerId}'s Prompts`} />

                    <Slider component={<SinglePromptCard />} />
                </div>
            }

            {/* analytics section */}
            {
                activeTab === "ANALYTICS" &&
                <div className={styles.prompt}>
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

                    </div>cs
                </div>
            }

            {/* revenue section */}
            {
                activeTab === "REVENUE" &&
                <div className={styles.prompt}>
                    <Image className={styles.graph} src="/assets/imageAssets/graph.svg" width={0} height={0} sizes='100vw' />
                </div>
            }

        </div >
    )
}

export default Tab