import Image from 'next/image';
import styles from '@/app/Components/SellerPromptCard/SellerPromptCard.module.css'
import { BsThreeDots } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { useState } from 'react';
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const SellerPromptCard = ({ label, description, image }) => {
    const [dropdownMenu, setdropdownMenu] = useState('0')
    function dropdownFunc() {
        setdropdownMenu((prev) => prev == '0' ? '1' : '0')
    }

    function hideDropdownFunc() {
        setdropdownMenu('0')
    }
    return (
        <div className={styles.featuredCardContainer}>
            <Image className={styles.image} alt='demo_image' src={image} width={350} height={200} />
            <div className={styles.label}>{label}</div>
            <div className={styles.shareIconContainer}>
                <FaShareAlt className={styles.shareIcon} />
            </div>
            <div className={styles.optionsContainer}>
                <div className={styles.infoText}>{description}</div>

                <div >
                    <BsThreeDots className={styles.options} onClick={dropdownFunc} />
                </div>
            </div>

            {/* dropdown */}
            <ul className={styles.dropdown} onMouseLeave={hideDropdownFunc} style={{ transform: `scale(${dropdownMenu})` }}>
                <li>Edit <BiSolidEdit /> </li>
                <li>Delete <MdDeleteForever /></li>
            </ul>
        </div>
    )
}
export default SellerPromptCard;