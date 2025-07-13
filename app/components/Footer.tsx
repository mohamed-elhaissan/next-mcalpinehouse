import Link from "next/link";
import AnimatedText from "./AnimatedText";

const AnimatedLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href} className="relative overflow-hidden hover:opacity-60 ">
      <AnimatedText title={text} description={text} />
    </Link>
  );
};

export default function Footer() {
  const currentDate: Date = new Date();
  return (
    <div className="mt-40 bg-[#3d3c44] ">
      <div className="flex  items-center justify-between p-20">
        <h2 className="text-white text-7xl ThinCanel">MCALPINE</h2>
        <div className="w-1/2">
          <nav className="flex flex-col gap-3 text-6xl justify-center h-full text-white ThinCanel">
            <AnimatedLink text="Projects" href="/projects" />
            <AnimatedLink text="Philosophy" href="/philosophy" />
            <AnimatedLink text="Teams" href="/team" />
            <AnimatedLink text="Books & Press" href="/book" />
            <AnimatedLink text="Forniture Lines" href="/forniture" />
            <AnimatedLink text="Contact" href="/contact" />
          </nav>
        </div>
      </div>
      <span className="text-white ThinCanel border-t opacity-60 text-center p-3 w-full inline-block">
        &copy; {currentDate.getFullYear()} Mcapline
      </span>
    </div>
  );
}
