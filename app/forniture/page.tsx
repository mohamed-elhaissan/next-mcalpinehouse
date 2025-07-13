"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import McAlpine_TEAM from "../../public/images/McAlpine_Manse_Main_2.webp";
import arrow from "../../public/images/arrowSvg.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
export default function Team() {
  const [isHovered, setIshovered] = useState<string>("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleText = "Furniture Lines".split("");
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
          scale: 1.5,
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
      <div ref={imageContainer} className="relative overflow-hidden z-0">
        <Image
          ref={image}
          src={McAlpine_TEAM}
          className="mx-auto "
          alt="Image"
        />
      </div>
      <div className="h-screen mt-40  relative z-10 flex flex-col  w-full  gap-20 mx-auto ">
        <div className="flex items-start text-xl justify-evenly ThinCanel">
          <h2 className="w-1/2">
            For decades McAlpine has created custom furniture to fulfill the
            desires of our clients.
          </h2>
          <p className="w-1/3">
            Here is a sampling of our hand crafted furnishings available
            nationwide. Look for new products releasing seasonally.
          </p>
        </div>
        <div className="h-screen ThinCanel">
          <div
            className="flex justify-between items-center p-20"
            style={{
              border: "1px solid #ebebeb",
            }}
          >
            <h2 className="text-3xl">McAlpine Home</h2>
            <div className="flex flex-col justify-between w-1/2 items-start text-4xl">
              <Link
                style={{
                  borderBottom: "1px solid #ebebeb",
                }}
                onMouseEnter={() => setIshovered("Lee Industries")}
                onMouseLeave={() => setIshovered("")}
                className="border-b w-full p-4 flex items-end gap-1"
                href={"https://www.leeindustries.com/Product/Category/MCALPINE"}
              >
                <Image
                  src={arrow}
                  alt="arrow"
                  className={`scale-75 transition-opacity duration-300 ${
                    isHovered === "Lee Industries" ? "opacity-100" : "opacity-0"
                  }`}
                />
                Lee Industries
              </Link>

              <Link
                style={{
                  borderBottom: "1px solid #ebebeb",
                }}
                onMouseEnter={() => setIshovered("Holland Macrae")}
                onMouseLeave={() => setIshovered("")}
                className="border-b w-full p-4 flex items-end gap-1"
                href={
                  "https://www.hollandmacrae.com/mcalpine-house-furniture?page=3"
                }
              >
                <Image
                  src={arrow}
                  alt="arrow"
                  className={`scale-75 transition-opacity duration-300 ${
                    isHovered === "Holland Macrae" ? "opacity-100" : "opacity-0"
                  }`}
                />
                Holland Macrae
              </Link>

              <Link
                style={{
                  borderBottom: "1px solid #ebebeb",
                }}
                onMouseEnter={() => setIshovered("Elegant Earth")}
                onMouseLeave={() => setIshovered("")}
                className="border-b w-full  p-4 flex items-end gap-1"
                href={"https://elegantearth.com/"}
              >
                <Image
                  src={arrow}
                  alt="arrow"
                  className={`scale-75  transition-opacity duration-300 ${
                    isHovered === "Elegant Earth" ? "opacity-100" : "opacity-0"
                  }`}
                />
                Elegant Earth
              </Link>
            </div>
          </div>
          <div
            className="flex justify-between items-center  p-20"
            style={{
              border: "1px solid #ebebeb",
            }}
          >
            <h2 className="text-3xl">Ray Booth</h2>
            <div className="flex flex-col justify-between w-1/2 items-start text-4xl">
              <Link
                onMouseEnter={() => setIshovered("Hickory Chair")}
                onMouseLeave={() => setIshovered("")}
                style={{
                  borderBottom: "1px solid #ebebeb",
                }}
                className=" w-full p-4 flex items-end gap-1"
                href={
                  "http://www.hickorychair.com/Products/ShowResults?CollectionID=FM,FN&SearchName=Ray+Booth%C2%AE"
                }
              >
                <Image
                  src={arrow}
                  alt="arrow"
                  className={`scale-75 transition-opacity duration-300 ${
                    isHovered === "Hickory Chair" ? "opacity-100" : "opacity-0"
                  }`}
                />
                Hickory Chair
              </Link>

              <Link
                style={{
                  borderBottom: "1px solid #ebebeb",
                }}
                onMouseEnter={() => setIshovered("Visual Comfort & Co.")}
                onMouseLeave={() => setIshovered("")}
                className="border-b w-full  p-4 flex items-end gap-1"
                href={
                  "https://www.visualcomfort.com/us/c/our-designers/ray-booth"
                }
              >
                <Image
                  src={arrow}
                  alt="arrow"
                  className={`scale-75  transition-opacity duration-300 ${
                    isHovered === "Visual Comfort & Co."
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
                Visual Comfort & Co.
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}
