"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import PlaceMainImage from "../../public/images/McAlpine_Palace_Main_2-1.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Placeholder1 from "../../public/images/Placeholder1.webp";
import Footer from "../components/Footer";

export default function Book() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleText = "Books & Press".split("");
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
  return (
    <div>
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
      <div ref={imageContainer} className="relative z-0">
        <Image
          ref={image}
          src={PlaceMainImage}
          className="mx-auto "
          alt="Image"
        />
      </div>
      <div
        ref={imageContainer}
        className="h-screen mt-40 relative z-10 flex flex-col  w-[80%]  gap-20 mx-auto "
      >
        <div className="flex items-start justify-center text-xl ThinCanel">
          <h2 className="w-1/2">Our story</h2>
          <p className="w-1/3">
            Home is inside us — the place where we find everything that is true.
          </p>
        </div>
     
      </div>
      <div className="h-[100vh] flex items-center justify-center sticky top-0 left-0">
        <div className="text-9xl ThinCanel text-center">
          <div className="relative">
            <h2 className="relative z-20">"I Know a Place."</h2>
          </div>
          <p className="text-zinc-300 ">A poem by Bobby McAlpine</p>
        </div>
      </div>
      <div className="relative z-30">
      <Footer/>
      </div>
    </div>
  );
}
