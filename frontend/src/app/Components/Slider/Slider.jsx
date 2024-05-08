"use client";
import { useEffect, useState } from "react";
import styles from '@/app/Components/Slider/Slider.module.css';

// let arr = [
//     <div className={styles.imageItem}></div>
// ]

const Slider = () => {
    const [maxScrollLeft, setMaxScrollLeft] = useState(0);

    useEffect(() => {
        const imageList = document.querySelector(`.${styles.imageList}`);
        const slideButtons = document.querySelectorAll(`.${styles.slideButton}`);

        const updateMaxScrollLeft = () => {
            setMaxScrollLeft(imageList.scrollWidth - imageList.clientWidth);
        };

        const handleScroll = () => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
        };

        // Initialize slider
        const initSlider = () => {
            updateMaxScrollLeft();
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === styles.prevSlide ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
                });
            });

            imageList.addEventListener("scroll", handleScroll);
        };

        initSlider();
    }, [maxScrollLeft, styles.imageList, styles.slideButton]);

    return (
        <div className={styles.container}>
            <div className={styles.sliderWrapper}>
                <button id={styles.prevSlide} className={styles.slideButton}>
                    L
                </button>
                <ul className={styles.imageList} style={{ gridTemplateColumns: "repeat(200, 1fr)" }}>
                    {[...Array(200).keys()].map((index) => (
                        <div key={index} className={styles.imageItem}>
                            {index + 1}
                        </div>
                    ))}
                </ul>
                <button id={styles.nextSlide} className={styles.slideButton}>
                    R
                </button>
            </div>
        </div>
    );
};

export default Slider;
