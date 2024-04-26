import Image from "next/image";
import styles from "./page.module.css";
import HomeTopSlider from "./Components/HomeTopSlider/HomeTopSlider";
import FeatureCard from "./Components/FeatureCard/FeatureCard";
import SinglePromptCard from "./Components/SinglePromptCard/SinglePromptCard";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      {/* top slider */}
      <HomeTopSlider />
      {/* FeatureCard card */}
      <FeatureCard />
      {/* Service`s Card */}
      <SinglePromptCard />
    </div>
  );
}
