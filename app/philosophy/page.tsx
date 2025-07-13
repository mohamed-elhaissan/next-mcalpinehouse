"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import PlaceMainImage from "../../public/images/McAlpine_Palace_Main_2-1.webp";
export default function Philosophy() {
  const titleRef = useRef<HTMLHeadElement>(null);
  const titleText = "Philosophy".split("");
  const imageContainer  = useRef<HTMLDivElement>(null)
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
  useEffect(()=>{
    const context = gsap.context(()=>{
        const timeLine = gsap.timeline({
            scrollTrigger : {
                target : imageContainer.current,
                start : 'top bottom',
                end : 'bottom top',
                

            }
        })
    })
  },[])
  return (
    <div>
      <div className="h-screen  flex items-center justify-center">
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
        <Image src={PlaceMainImage} className="mx-auto scale-50" alt="Image" />
      </div>
    </div>
  );
}
