import React from 'react'
import styles from "@/app/Components/HomeTopSlider/HomTopSlider.module.css"
import GradientButton from '../GradientButton/GradientButton'
import BorderButton from '../BorderButton/BorderButton'

const HomeTopSlider = () => {
    return (
        <div className={styles.sliderContainer}>
            <img src="/assets/imageAssets/Home/HomeTopSlider.webp" alt="" />
            <div className={styles.content}>
                <h1 className={styles.heading}>Prompt Marketplace</h1>
                <h2 className={styles.subHeading}>Search 100,000 AI prompts from the world's best AI creators</h2>
                <div className={styles.highligtedText}>Midjourney, ChatGPT, DALL.E, Stable Diffusion & more</div>
                <div className={styles.buttonContainer}>
                    <GradientButton title="Explore prompts" />
                    <BorderButton title="Sell prompts" />
                </div>

            </div>
        </div>
    )
}

export default HomeTopSlider