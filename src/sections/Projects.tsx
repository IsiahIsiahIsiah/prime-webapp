import * as React from "react";

import { FocusCards } from "@/components/ui/focus-cards";

import Prime from "../assets/PrimeVideo.mp4";

export const Projects: React.FC = () => {
  return (
    <div id="projects" className="projects mb-8 mx-8 md:mx-16">
      <h2 className="text-center text-5xl font-bold mb-8 ">Projects</h2>
      <p className="text-center text-lg text-white/60 mb-16">
        A selection of my recent work.
      </p>
      <FocusCards
        cards={[
          {
            title: "Prime Electrical And Data",
            src: Prime,
            type: "film",
            link: "https://www.primeelectrical.au/",
          },
          {
            title: "CMD Projects",
            src: "https://via.placeholder.com/400x300?text=Project+2",
            type: "image",
            link: "https://www.isiahtoilalo.com/",
          },
        ]}
      />
    </div>
  );
}

export default Projects;