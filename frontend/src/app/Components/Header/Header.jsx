'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineMessage } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "@/app/Components/Header/Header.module.css"
import { RxHamburgerMenu } from "react-icons/rx";

// bottom nav imports
import { TbBoxModel } from "react-icons/tb";
import Search from "../(liteComponents)/Search/Search";
import { useDispatch } from "react-redux";
import { showNav } from "@/app/Redux/Features/navbar/navbarSlice";
import categoriesArr from "@/app/jsonFiles/promptsCategories";
import { ImArrowRight2 } from "react-icons/im";
import { PiCaretRightBold } from "react-icons/pi";

const Header = () => {
    const [categoryHeading, setcategoryHeading] = useState()
    const [subHeadingTitle, setsubHeadingTitle] = useState()
    const [showHeaderBox, setshowHeaderBox] = useState(false)
    const [checkActiveHeader, setcheckActiveHeader] = useState(false)
    const [subCategory, setsubCategory] = useState([]);
    const [innerLinks, setinnerLinks] = useState([])
    const dispatch = useDispatch();


    function mainCategory(val) {
        setsubCategory(val.SubCategories);
        setcategoryHeading(val.name);

        if (setcheckActiveHeader(true)) {
            setshowHeaderBox(true);
        }
        else (
            setshowHeaderBox(false)
        )
    }

    // showing innerLinks function 
    function innerLinksFunc(showCategory) {
        setsubHeadingTitle(showCategory.subCategoryTitle);
        setinnerLinks(showCategory.innerCategroies);
    }
    return (
        <>
            <header className={styles.headerContainer}>
                {/* ------------- top header------------- */}
                <div className={styles.topHeader}>
                    <div className={styles.logo}></div>
                    {/* <Image src="/assets/imageAssets/logo.svg" width={150} height={150} /> */}
                    <img src="/assets/imageAssets/logo.svg" style={{ width: "180px" }} alt="" />

                    {/* search component */}
                    <Search placeholder="Search Prompts" />

                    {/* top nav icons */}
                    <nav className={styles.mainNav}>
                        <ul>
                            <li><Link className={styles.link} href="/Marketplace">Marketplace</Link></li>
                            <li><Link className={styles.link} href="/our-apps">Apps</Link></li>
                            <li><Link className={styles.link} href="/create">Create</Link></li>
                            <li><Link className={styles.link} href="/Hire">Hire</Link></li>
                            <li><Link className={styles.link} href="/sell">Sell</Link></li>
                        </ul>
                    </nav>
                    <div className={styles.topNavIconsContainer}>
                        <MdOutlineMessage className={styles.topNavIcons} />
                        <GoBell className={`${styles.topNavIcons} ${styles.bellIcon}`} />
                        <div className={styles.cartContainer}>
                            <HiOutlineShoppingCart className={styles.topNavIcons} />
                            <div className={styles.cartCounter}>99</div>
                        </div>
                        <RxHamburgerMenu className={`${styles.topNavIcons} ${styles.hamburgerIcon}`} onClick={() => dispatch(showNav())} />
                    </div>
                </div>
                {/*------------- bottom navbar --------------- */}
                <nav className={styles.bottomNav}>
                    <ul>
                        {
                            categoriesArr.map((val, index) =>
                                <li onMouseEnter={() => mainCategory(val, index)} key={index}><TbBoxModel /> <span>{val.name}</span></li>
                            )
                        }
                    </ul>
                </nav>
            </header>
            {/* subcategories links */}
            <div className={styles.subCategoriesContainer} style={{ display: `${checkActiveHeader ? 'none' : 'none'}` }}
                onMouseEnter={() => setcheckActiveHeader(true)} onMouseLeave={() => setcheckActiveHeader(false)}
            >

                <div className={styles.subCategories}>

                    <div className={styles.categoryHeading}>All {categoryHeading}<ImArrowRight2 className={styles.arrowIcons} /></div>

                    {
                        subCategory.map((val, subIndex) => <div className={styles.singleSubCategory} key={subIndex} onMouseEnter={() => innerLinksFunc(val, subIndex)}>{val.subCategoryTitle} <PiCaretRightBold className={styles.arrowIcons} /></div>
                        )
                    }
                </div>

                <div className={styles.innerPromptLinksContainer}>
                    <div className={styles.subHeadingTitle}>All {subHeadingTitle}</div>
                    {
                        innerLinks.map((e) =>
                            <div className={styles.innerPromptLink}>{e.name}</div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Header;