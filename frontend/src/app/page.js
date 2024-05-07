"use client"
import styles from "./page.module.css";
import HomeTopSlider from "./Components/HomeTopSlider/HomeTopSlider";
import FeatureCard from "./Components/FeatureCard/FeatureCard";
import SinglePromptCard from "./Components/SinglePromptCard/SinglePromptCard";
import SimpleSlider from "./Components/SimpleSlider/SimpleSlider";
import SinglePrompt from "./Components/SinglePrompt/SinglePrompt";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./Redux/Features/counter/CounterSlice";
export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
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

      <button onClick={() => dispatch(increment())}>increment</button>
      <div>{count}</div>
    </div>
  );
}