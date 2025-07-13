"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Footer from "../components/Footer";
import image1 from "../../public/books/imgi_13_Helm-feeatured-image-450x600-f50_50.webp";
import image2 from "../../public/books/imgi_14_HCG-Main-Street-Stunner-H8-November-December-2023_Page_1-scaled-1-450x600-f50_50.webp";
import image3 from "../../public/books/imgi_15_Sifford-Trad-Home-Fall-2023-spreads-1_Page_1-scaled-1-450x600-f50_50.webp";
import image4 from "../../public/books/imgi_24_Ocean-Home-Jan-2021_Page_cov-450x600-f50_50.webp";
import image5 from "../../public/books/imgi_25_052-057_CCwinter20_High-Design_cover-450x600-f50_50.webp";
import image6 from "../../public/books/imgi_26_SU855_McA_Palmer_Flower_HeroB-copy-crop-1024x1358-1-450x600-f50_50.webp";
import image7 from "../../public/books/imgi_27_LX_SE10_Cover-1024x1238-1-450x600-f50_50.webp";
import image8 from "../../public/books/imgi_28_LUXE-Sept-Web-Small_Page_001-450x600-f50_50.webp";

export default function Book() {
  const allImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
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
      <div className=" my-40  relative z-10 flex flex-col  w-[80%]  gap-20 mx-auto ">
        <div className="flex items-start text-xl justify-center ThinCanel">
          <h2 className="w-1/2">Our Books</h2>
          <p className="w-1/3">
            & Press Our Books We are chameleons of sorts, changing to meet our
            clients' needs. Our variety is evidenced here.
          </p>
        </div>
      </div>

      <div className="h-[100vh] flex items-center justify-center ">
        <div className="text-9xl ThinCanel text-center flex flex-wrap items-center justify-center ">
          {allImages.map((item, index) => {
            return (
              <Image
                src={item}
                key={index}
                className={` bg-zinc-200 p-6 scale-70 transition-all duration-150 ease-in-out   `}
                alt={`${item}`}
              />
            );
          })}
        </div>
      </div>
      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}
