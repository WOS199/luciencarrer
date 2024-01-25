import { useState } from "react";
import Menu from "../menu/Menu";
import FadeInMount from "../FadeInMount/FadeInMount";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsOpening(true);
    }
    if (isOpen) {
      setIsOpening(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  };

  let HandleOnClick = !isOpen ? toggleMenu : null;

  return (
    <div className="bg-alabaster flex items-center h-32 px-10">
      <div className="logotype">
        <a href="">
          <p className="font-sans font-light text-xs absolute top-[52px] max-w-24">
            front-end dev <br />& digital creative director
          </p>
        </a>
      </div>
      <p className="my-0 mx-auto font-secondary font-medium italic text-xs">Lucien Carrer</p>
      <div
        onClick={HandleOnClick}
        className={`menuContainer z-10 bg-racing-lime absolute top-0 right-0 transition-all duration-700 px-10 ${
          isOpen ? "w-full h-full" : "w-32 h-32 cursor-pointer"
        }`}>
        <p
          onClick={toggleMenu}
          className="cursor-pointer font-sans font-light text-xs absolute top-[52px] right-[45px] text-dark-linen">
          {isOpen ? "close" : "menu"}
        </p>
        <FadeInMount isOpen={isOpen} isOpening={isOpening}>
          <Menu />
        </FadeInMount>
      </div>
    </div>
  );
};

export default Header;
