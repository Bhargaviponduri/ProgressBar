import "./styles.css";
import { useState, useEffect } from "react";
const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 1000);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{ transform: `translateX(-${100 - animatedProgress}%)` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [10, 20, 50, 60, 70, 80];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((item) => (
        <ProgressBar progress={item} />
      ))}
    </div>
  );
}
