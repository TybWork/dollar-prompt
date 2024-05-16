"use client"
import styles from "./page.module.css";
import HomeTopSlider from "./Components/HomeTopSlider/HomeTopSlider";
import FeatureCard from "./Components/FeatureCard/FeatureCard";
import SinglePromptCard from "./Components/SinglePromptCard/SinglePromptCard";
import SimpleSlider from "./Components/SimpleSlider/SimpleSlider";
import SinglePrompt from "./Components/SinglePrompt/SinglePrompt";
import Slider from "./Components/Slider/Slider";
import AnimatedHeading from "./Components/(liteComponents)/AnimatedHeading/AnimatedHeading";
import ItemTopList from "./Components/ItemTopList/ItemTopList";
import TopItemSingleList from "./Components/TopItemSingleList/TopItemSingleList";
export default function Home() {
  return (
    <div className={styles.mainContainer}>
      {/* top slider */}
      <HomeTopSlider />
      {/* FeatureCard card */}
      <Slider component={<FeatureCard />} />

      {/* item top list */}
      <ItemTopList mainComponent={<Slider component={<TopItemSingleList />} />} />

      {/*Hire Card */}
      <Slider component={<FeatureCard />} />

      {/* featured card */}
      <AnimatedHeading title="Featured Prompts" />
      <Slider component={<SinglePromptCard />} />

      {/* featured card */}
      <AnimatedHeading title="Newest Prompts" />
      <Slider component={<SinglePromptCard />} />


      {/* top item single list */}
      {/* <div className={styles.threeCategoriesContainer}>
        <ItemTopList mainComponent={<TopItemSingleList />} />
        <ItemTopList mainComponent={<TopItemSingleList />} />
        <ItemTopList mainComponent={<TopItemSingleList />} />
      </div> */}

      {/* most popular prompt bundles */}
      <AnimatedHeading title="Most Popular Prompts Bundles" />
      <Slider component={<SinglePromptCard />} />

      {/* build an app slider */}
      <SimpleSlider />

      {/* Art & Illustration Prompts */}
      <AnimatedHeading title="Art & Illustration Prompts" />
      <Slider component={<SinglePromptCard />} />

      {/* Logo & Icon Prompts */}
      <AnimatedHeading title="Logo & Icon Prompts" />
      <Slider component={<SinglePromptCard />} />

      {/* Portrait Photography Prompts */}
      <AnimatedHeading title="Portrait Photography Prompts" />
      <Slider component={<SinglePromptCard />} />

      {/* build an app slider */}
      <SimpleSlider />

      {/* Pattern Prompts */}
      <AnimatedHeading title="Pattern Prompts" />
      <Slider component={<SinglePromptCard />} />

      {/* Sticker Prompts */}
      <AnimatedHeading title="Sticker Prompts" />
      <Slider component={<SinglePromptCard />} />

      {/* T-shirt Print Prompts */}
      <AnimatedHeading title="T-shirt Print Prompts" />
      <Slider component={<SinglePromptCard />} />

      {/* Poster Print Prompts*/}
      <AnimatedHeading title="Poster Print Prompts" />
      <Slider component={<SinglePromptCard />} />

      {/* Explore the App Store slider */}
      <SimpleSlider />

    </div>
  );
}