"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);
export default function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleText = "Contact section coming soon ".split("");
  const imageContainer = useRef<HTMLDivElement>(null);
  const image = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power1.in",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.in",
      }
    );
  }, []);
  useEffect(() => {
    const context = gsap.context(() => {
      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: imageContainer.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      timeLine.fromTo(
        image.current,
        { scale: 0.5 },
        {
          scale: 1,
        },
        0
      );
    });
    return () => context.revert();
  }, []);
  return (
    <div>
      <div className="h-[80vh]  flex items-center justify-center sticky top-0 left-0">
        <h2
          ref={titleRef}
          className="text-8xl ThinCanel selection:bg-[var(--selectionBackground)] selection:text-white "
        >
          {titleText.map((l, i) => {
            return <span key={i}>{l}</span>;
          })}
        </h2>
      </div>

      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}
