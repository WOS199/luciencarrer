import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const Menu = ({ closeMenu }) => {
  const [onMount, setOnMount] = useState("translate-y-full");

  const handleLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    setTimeout(() => {
      setOnMount("translate-y-0");
    }, 100);
  });

  return (
    <div className="mt-40 md:mt-2 bg-racing-lime w-screen h-screen">
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 ${onMount}`}>
          <a
            href="/"
            className="hover:underline decoration-4 underline-offset-8">
            Accueil
          </a>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 delay-100 ${onMount}`}>
          <a
            className="hover:underline decoration-4 underline-offset-8"
            href="#Parcours"
            onClick={handleLinkClick}>
            Parcours
          </a>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 delay-200 ${onMount}`}>
          <HashLink
            to="/content#Experience"
            className="hover:underline hover:decoration-2 hover:underline-offset-2"
            onClick={handleLinkClick}>
            Expériences
          </HashLink>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 delay-300 ${onMount}`}>
          <a
            className="hover:underline decoration-4 underline-offset-8"
            href="#Skills"
            onClick={handleLinkClick}>
            Skills
          </a>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 delay-500 ${onMount}`}>
          <a
            className="hover:underline decoration-4 underline-offset-8"
            href="#Projects"
            onClick={handleLinkClick}>
            Projets
          </a>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 delay-700 ${onMount}`}>
          <a
            className="hover:underline decoration-4 underline-offset-8"
            href="#Footer"
            onClick={handleLinkClick}>
            Contact
          </a>
        </p>
      </div>
    </div>
  );
};

export default Menu;
