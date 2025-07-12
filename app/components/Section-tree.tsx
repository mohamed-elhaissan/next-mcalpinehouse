

import AnimatedText from "./AnimatedText";

interface Projects {
  title: string;
  description: string;
}

export default function SectionTree() {
  return (
    <div className="mt-20 flex flex-col items-center  justify-center ">
      {project.map((word, index) => {
        return (
          <div
            key={index}
            className="flex text-8xl ThinCanel  justify-center w-full p-4 text-center "
          >
            <AnimatedText title={word.title} description={word.description} />
          </div>
        );
      })}
    </div>
  );
}
const project: Projects[] = [
  {
    title: "Wellness I",
    description: "A serene modern retreat with minimalist design.",
  },
  {
    title: "Portal II",
    description: "A contemporary entryway with sleek architectural details.",
  },
  {
    title: "Idyll III",
    description: "A tropical bungalow with large windows and a shingled roof.",
  },
  {
    title: "Goodness IV",
    description: "A grand New England-style mansion with a gable roof.",
  },
  {
    title: "Radiance V",
    description: "A modern mansion with symmetrical black windows.",
  },
  {
    title: "Joy VI",
    description: "An ornate house with white brick and stone accents.",
  },
  {
    title: "Boundless VII",
    description: "A modern home with black steel windows and an open patio.",
  },
  {
    title: "Manse VIII",
    description:
      "A contemporary estate with reflective windows and minimalist interiors.",
  },
  {
    title: "Exuberance IX",
    description: "A white brick house with a prominent chimney.",
  },
  {
    title: "Camelot X",
    description: "A majestic home with elegant architectural features.",
  },
  {
    title: "Intrigue XI",
    description:
      "A stucco-walled courtyard with cypress trees and modern details.",
  },
  {
    title: "Lantern XII",
    description:
      "A modernist two-story home with a pool and farmhouse-style interiors.",
  },
  {
    title: "Prospect XIII",
    description: "A sophisticated residence with open, airy spaces.",
  },
  {
    title: "Palace XIV",
    description: "A minimalist beach mansion with ocean views.",
  },
  {
    title: "Heart XV",
    description: "A welcoming home with a cozy sleeping porch.",
  },
  {
    title: "Cape Dutch XVI",
    description:
      "A classic colonial house with black shutters and a blue door.",
  },
  {
    title: "Harmonious XVIII",
    description: "A traditional stone home with a modern farmhouse aesthetic.",
  },
  {
    title: "History XIX",
    description: "A timeless residence with a pool and elegant interiors.",
  },
  {
    title: "Romance XX",
    description: "A charming home with ivy-covered archways.",
  },
  {
    title: "Kindness XXI",
    description:
      "A large white house with double windows and a courtyard lantern.",
  },
  {
    title: "Baroque XXII",
    description:
      "A stone and stucco home with French windows and arched hallways.",
  },
  {
    title: "Invitation XXIII",
    description: "An elegant house with large windows and warm lighting.",
  },
  {
    title: "Ramble XXIV",
    description: "A colonial-style home with a rustic barn aesthetic.",
  },
];
