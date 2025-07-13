import AnimatedText from "./AnimatedText";

interface Projects {
  title: string;
  description: string;
}

export default function SectionTree() {
  return (
    <div className="mt-20 flex flex-col items-center   justify-center ">
      <h2 className="mb-20 text-9xl">Projects</h2>
      {projects.map((word, index) => {
        return (
          <div
            key={index}
            className="flex text-8xl ThinCanel projectContainer  hover:cursor-pointer  transition-all  hover:border-t hover:border-b   text-[#30363c] justify-center w-full p-4 text-center "
          >
            <AnimatedText title={word.title} description={word.description} />
          </div>
        );
      })}
    </div>
  );
}
const projects: Projects[] = [
  { title: "Wellness I", description: "Minimalist modern retreat" },
  { title: "Portal II", description: "Sleek contemporary entryway" },
  { title: "Idyll III", description: "Tropical bungalow with windows" },
  { title: "Goodness IV", description: "Grand New England mansion" },
  { title: "Radiance V", description: "Modern mansion with black windows" },
  { title: "Joy VI", description: "Ornate white brick house" },
  { title: "Boundless VII", description: "Modern home with open patio" },
  {
    title: "Manse VIII",
    description: "Contemporary estate with minimalist interiors",
  },
  { title: "Exuberance IX", description: "White brick house with chimney" },
  { title: "Camelot X", description: "Majestic elegant residence" },
  { title: "Intrigue XI", description: "Stucco courtyard with cypress trees" },
  { title: "Lantern XII", description: "Modernist home with pool" },
  { title: "Prospect XIII", description: "Sophisticated airy residence" },
  { title: "Palace XIV", description: "Minimalist beachfront mansion" },
  { title: "Heart XV", description: "Cozy home with porch" },
  { title: "Cape Dutch XVI", description: "Colonial house with blue door" },
  { title: "Harmonious XVIII", description: "Stone farmhouse with blue roof" },
  { title: "History XIX", description: "Timeless home with pool" },
  { title: "Romance XX", description: "Ivy-covered archway home" },
  { title: "Kindness XXI", description: "White house with courtyard lantern" },
  { title: "Baroque XXII", description: "Stone home with arched hallway" },
  {
    title: "Invitation XXIII",
    description: "Elegant house with warm lighting",
  },
  { title: "Ramble XXIV", description: "Colonial home with rustic barn" },
];
