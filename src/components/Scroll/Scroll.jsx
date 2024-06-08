import { useEffect, useState } from "react";
import "./scroll.css";

const Scroll = () => {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = window.innerHeight + window.scrollY;
      const bodyHeight = window.document.body.offsetHeight;

      if (totalHeight >= bodyHeight) setCount((prev) => prev + 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count]);

  const items = [];

  for (let i = 1; i < count + 1; i++) {
    items.push(<span key={i}>{i}</span>);
  }

  return <div className="scroll__container">{items}</div>;
};

export default Scroll;
