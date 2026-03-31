import * as React from "react";
import Navbar from "@/components/Navbar";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8">
      <Navbar />
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Web App Design and Development
        </h1>
        <p className="text-lg text-white/60">I make it happen.</p>
      </div>
    </section>
  );
}

export default Hero;
