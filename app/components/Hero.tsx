"use client";
import Image from "next/image";
import TouchIcon from "../../public/apple-touch-icon.png";
import { useState } from "react";

export default function Hero() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen  ">
      <video
        className=" absolute left-0 top-0 h-full w-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://player.vimeo.com/progressive_redirect/playback/1046552673/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a91fc6a125f61e799d124bd21ddfd907a8e26a8f838c0c79fdd7eeac01bc918b" />
      </video>
      <header className="flex items-center justify-start gap-2.5 p-4">
        <Image
          src={TouchIcon}
          alt="Icon-Png "
          width={55}
          height={55}
          className="rounded-lg hover:rounded-full transition-all duration-300 ease-in cursor-pointer"
        />
        <div
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          className={`w-14 h-14  gap-1  relative hover:cursor-pointer rounded-full p-2 ${
            !isNavOpen ? "bg-[var(--background)]" : "bg-[var(--foreground)]"
          }`}
        >
          <span
            className={`inline-block absolute left-1/2 -translate-x-1/2  rounded-full w-1/2 h-[2px] transition-all duration-300 ease-in-out ${
              !isNavOpen
                ? "bg-[var(--foreground)] top-[40%]"
                : "bg-[var(--background)] top-[50%]"
            }`}
          ></span>
          <span
            className={`inline-block absolute left-1/2 -translate-x-1/2 top-[50%]  rounded-full w-1/2 h-[2px] transition-all duration-300 ease-in-out ${
              !isNavOpen ? "bg-[var(--foreground)]" : "bg-[var(--background)]"
            }`}
          ></span>
          <span
            className={`inline-block absolute left-1/2 -translate-x-1/2   rounded-full w-1/2 h-[2px] transition-all duration-300 ease-in-out ${
              !isNavOpen
                ? "bg-[var(--foreground)] top-[60%]"
                : "bg-[var(--background)] top-[50%]"
            }`}
          ></span>
        </div>
      </header>
    </div>
  );
}
