import { IoSearchOutline } from "react-icons/io5";
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
import { IoGameControllerOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            {/* ------------- top header------------- */}
            <div className={styles.topHeader}>
                <div className={styles.logo}>logo</div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type="text" name="" id="" placeholder="Search Prompts" />
                    <IoSearchOutline className={styles.searchIcon} />
                </div>
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
                    <li><IoGameControllerOutline /> <span>Games & 3D</span></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header