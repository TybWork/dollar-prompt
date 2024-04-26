import Image from "next/image";
import styles from "./page.module.css";
import HomeTopSlider from "./Components/HomeTopSlider/HomeTopSlider";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <HomeTopSlider />
    </div>
  );
}
