import * as React from "react";

import Navbar from "@/components/ui/menubar";

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero-content">
        <h1>Web App Design and Development</h1>
        <p>I make it happen.</p>
      </div>
    
    </section>
  );
}

export default Hero;