import * as React from "react";
import Navbar from "@/components/Navbar";

export const Hero: React.FC = () => {
  return (
    <section className="hero min-h-dvh text-center py-20 mb-8 mx-8 md:mx-16">
      <Navbar />
      <div className="mt-[50%] md:mt-[10%] text-left px-2 md:px-8 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 md:pl-8 leading-tight item-center">
          Web App Design and Development
        </h1>
        <br />
        <p className="text-right pt-12 pr-8 text-lg text-white/60">I make it happen.</p>
      </div>
    </section>
  );
}

export default Hero;
