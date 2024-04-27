import styles from "./page.module.css";
import HomeTopSlider from "./Components/HomeTopSlider/HomeTopSlider";
import FeatureCard from "./Components/FeatureCard/FeatureCard";
import SinglePromptCard from "./Components/SinglePromptCard/SinglePromptCard";
import SimpleSlider from "./Components/SimpleSlider/SimpleSlider";
import SinglePrompt from "./Components/SinglePrompt/SinglePrompt";
export default function Home() {
  return (
    <div className={styles.mainContainer}>
      {/* top slider */}
      <HomeTopSlider />
      {/* FeatureCard card */}
      <FeatureCard />
      {/* Service`s Card */}
      <SinglePromptCard />
      {/* SimpleSlider */}
      <SimpleSlider />
      {/* single prompt */}
      <SinglePrompt />
    </div>
  );
}