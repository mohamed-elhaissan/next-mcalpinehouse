import SectionOne from "./components/Section-one";
import SectionTree from "./components/Section-tree";
import SectionTwo from "./components/Section-Two";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <div className=" relative  bg-white w-full z-20">
        <SectionTwo />
        <SectionTree />
      </div>
    </div>
  );
}
