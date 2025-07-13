"use client";

import { useEffect } from "react";
import Footer from "./components/Footer";
import SectionOne from "./components/Section-one";
import SectionTree from "./components/Section-tree";
import SectionTwo from "./components/Section-Two";
import Lenis from "lenis";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);
  return (
    <div className="ThinCanel">
      <SectionOne />
      <div className=" relative  bg-white w-full z-20">
        <SectionTwo />
        <SectionTree />
        <Footer />
      </div>
    </div>
  );
}
