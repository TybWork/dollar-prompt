import Image from "next/image";
import { MdOutlineMessage } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "@/app/Components/Header/Header.module.css"
import { RxHamburgerMenu } from "react-icons/rx";

// bottom nav imports
import { TbBoxModel } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbWriting } from "react-icons/tb";
import { PiBagSimpleLight } from "react-icons/pi";
import { IoCameraOutline } from "react-icons/io5";
import Search from "../(liteComponents)/Search/Search";

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            {/* ------------- top header------------- */}
            <div className={styles.topHeader}>
                <div className={styles.logo}></div>
                <Image src="/assets/imageAssets/logo.png" width={30} height={30} />

                {/* search component */}
                <Search placeholder="Search Prompts" />

                {/* top nav icons */}
                <nav className={styles.mainNav}>
                    <ul>
                        <li>Marketplace</li>
                        <li>Apps</li>
                        <li>Create</li>
                        <li>Hire</li>
                        <li>Sell</li>
                    </ul>
                </nav>
                <div className={styles.topNavIconsContainer}>
                    <MdOutlineMessage className={styles.topNavIcons} />
                    <GoBell className={`${styles.topNavIcons} ${styles.bellIcon}`} />
                    <div className={styles.cartContainer}>
                        <HiOutlineShoppingCart className={styles.topNavIcons} />
                        <div className={styles.cartCounter}>99</div>
                    </div>
                    <RxHamburgerMenu className={`${styles.topNavIcons} ${styles.hamburgerIcon}`} />
                </div>
            </div>
            {/*------------- bottom navbar --------------- */}
            <nav className={styles.bottomNav}>
                <ul>
                    <li><TbBoxModel /> <span>Ai Models</span></li>
                    <li><IoColorPaletteOutline /> <span>Art & Illustrations</span></li>
                    <li><TbBoxModel /> <span>Logos & Icons</span></li>
                    <li><IoColorPaletteOutline /> <span>Graphics & Design</span></li>
                    <li><TbWriting /> <span>Productivity & Writing</span></li>
                    <li><PiBagSimpleLight /> <span>Marketing & Business</span></li>
                    <li><IoCameraOutline /> <span>IoCameraOutline</span></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header