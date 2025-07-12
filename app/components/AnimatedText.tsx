"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const AnimatedText = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const spanRef = useRef<HTMLSpanElement>(null);
  const animatedSpan = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (isHovered) {
      gsap.to(spanRef.current, {
        y: "-100%",
        opacity: 0,
      });
      gsap.to(animatedSpan.current, {
        y: 0,
        opacity: 1,
      });
    } else {
      gsap.to(spanRef.current, {
        y: 0,
        opacity: 1,
      });
      gsap.to(animatedSpan.current, {
        y: "100%",
        opacity: 0,
      });
    }
  }, [isHovered]);
  return (
    <span
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className=" relative     rounded overflow-hidden "
    >
      <span className="inline-block " ref={spanRef}>
        {title.split("").map((l, i) => {
          return <span key={i}>{l}</span>;
        })}
      </span>
      <span className="inline-block  absolute inset-0 " ref={animatedSpan}>
        {description}
      </span>
    </span>
  );
};

export default AnimatedText;
