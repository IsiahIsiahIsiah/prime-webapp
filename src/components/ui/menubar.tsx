import * as React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="flex space-x-4">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;