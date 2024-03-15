import { useState, useEffect } from "react";
import Menu from "../menu/Menu";
import FadeInMount from "../FadeInMount/FadeInMount";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const menuIcon = <img src="/assets/menuIcon.svg" alt="Open menu" />;
  const menuClose = <img src="/assets/menuClose.svg" alt="Close menu" />;

  const closeMenu = () => {
    setIsOpening(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsOpening(true);
    }
    if (isOpen) {
      closeMenu();
    }
  };

  let HandleOnClick = !isOpen ? toggleMenu : null;

  return (
    <>
      <div className="bg-alabaster flex items-center h-16">
        <div
          onClick={HandleOnClick}
          className={`menuContainer z-20 bg-racing-lime absolute top-0 right-0 duration-700 px-10 transition-all ${
            isOpen ? "w-screen h-screen" : `w-32 h-32 cursor-pointer`
          }`}>
          <p
            onClick={toggleMenu}
            className="font-sans font-light text-xs absolute top-14 right-[52px] text-dark-linen cursor-pointer">
            {isOpen ? menuClose : menuIcon}
          </p>
          <FadeInMount isOpen={isOpen} isOpening={isOpening}>
            <Menu closeMenu={closeMenu} />
          </FadeInMount>
        </div>
      </div>
    </>
  );
};

export default Header;
