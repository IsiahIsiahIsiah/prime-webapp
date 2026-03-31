import * as React from "react";

import { FocusCards } from "@/components/ui/focus-cards";

export const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <FocusCards
        cards={[
          {
            title: "Project 1",
            src: "https://via.placeholder.com/400x300?text=Project+1",
          },
          {
            title: "Project 2",
            src: "https://via.placeholder.com/400x300?text=Project+2",
          },
          {
            title: "Project 3",
            src: "https://via.placeholder.com/400x300?text=Project+3",
          },
        ]}
      />
    </div>
  );
}

export default Projects;