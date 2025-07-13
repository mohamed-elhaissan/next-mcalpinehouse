"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import McAlpine_TEAM from "../../public/images/McAlpine_TEAM.webp";
import bobby from "../../public/partners/BobbyMcAlpine-500x500-f50_50.webp";
import greg from "../../public/partners/Greg-Tankersley_054-500x500-f50_50.webp";
import RayBooth from "../../public/partners/RayBooth_0572-2-500x500-f50_50.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);
export default function Team() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleText = "Team".split("");
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
      <div ref={imageContainer} className="relative  z-0">
        <Image
          ref={image}
          src={McAlpine_TEAM}
          className="mx-auto "
          alt="Image"
        />
      </div>
      <div className="h-screen mt-40  relative z-10 flex flex-col  w-[80%]  gap-20 mx-auto ">
        <div className="flex items-start text-xl justify-center ThinCanel">
          <h2 className="w-1/2">
            Happy are we who have been called to this work.
          </h2>
          <p className="w-1/3">
            We form a family of sorts. Everyone here is the right kind of clever
            and, as a result, we’ve made this work sublimely happy. The houses
            we make are held tightly to our chest. Over the years, an intuitive
            vision has been made manifest.
          </p>
        </div>
        <div className="flex flex-col items-center justify-around">
          <h2 className="text-7xl mb-20">Partners</h2>
          <div className="flex items-center justify-center gap-2">
            <Image
              src={bobby}
              className="mt-20 hover:scale-95 bg-zinc-300 hover:p-4 transition-all duration-200"
              alt={"bobby"}
            />
            <Image
              src={greg}
              alt={"greg"}
              className=" hover:scale-95 transition-all bg-zinc-300 hover:p-4  duration-200"
            />
            <Image
              src={RayBooth}
              alt={"ray"}
              className=" hover:scale-95 transition-all bg-zinc-300 hover:p-4  mt-52 duration-200"
            />
          </div>
        </div>
      </div>

      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}
