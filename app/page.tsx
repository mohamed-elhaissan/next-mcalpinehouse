"use client";

import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import SectionOne from "./components/Section-one";
import gsap from "gsap";
import SectionTree from "./components/Section-tree";
import SectionTwo from "./components/Section-Two";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const imageContainer = useRef<HTMLDivElement>(null);
  const image = useRef(null);
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
        { scale: 0.3, y: 0 },
        {
          scale: 1,
          y: 50,
        },
        0
      );
    });
    return () => context.revert();
  }, []);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="ThinCanel">
      <SectionOne />
      <div ref={imageContainer} className=" relative  bg-white w-full z-20">
        <div ref={image}>
          <SectionTwo />
          <SectionTree />
          <Footer />
        </div>
      </div>
    </div>
  );
}
