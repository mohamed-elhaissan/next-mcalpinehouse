"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import PlaceMainImage from "../../public/images/McAlpine_Palace_Main_2-1.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Philosophy() {
  const titleRef = useRef<HTMLHeadElement>(null);
  const titleText = "Philosophy".split("");
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
          target: imageContainer.current,
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
          y: 100,
        },
        0
      );
    });
    return () => context.revert();
  }, []);
  return (
    <div className="h-[800vh]">
      <div className="h-[80vh]  flex items-center justify-center">
        <h2
          ref={titleRef}
          className="text-8xl ThinCanel selection:bg-[var(--selectionBackground)] selection:text-white "
        >
          {titleText.map((l, i) => {
            return <span key={i}>{l}</span>;
          })}
        </h2>
      </div>
      <div ref={imageContainer}>
        <Image
          ref={image}
          src={PlaceMainImage}
          className="mx-auto "
          alt="Image"
        />
      </div>
      <div className="h-screen">
        <div className="flex items-center justify-">
          <h2>Our story</h2>
          <p>
            Home is inside us — the place where we find everything that is true.
          </p>
        </div>
      </div>
    </div>
  );
}
