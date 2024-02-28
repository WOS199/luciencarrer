import { useState, useEffect } from "react";
import Menu from "../menu/Menu";
import FadeInMount from "../FadeInMount/FadeInMount";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [hoverRules, setHoverRules] = useState('hover:w-44 hover:h-44');
  const [transitionRules, setTransitionRules] = useState('transition-all');
  const menuIcon = <img src="/assets/menuIcon.svg" alt="Open menu" />
  const menuClose = <img src="/assets/menuClose.svg" alt="Close menu" />

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

  useEffect(() => {
    if (isOpen) {
      setHoverRules('');
      setTimeout(() => {
        setTransitionRules('transition-none');
      }, 1000);
    }
    if (!isOpen) {
      setTimeout(() => {
        setHoverRules('hover:w-44 hover:h-44')
      }, 1000);
      setTransitionRules('transition-all')
    }
  },[isOpen])

  let HandleOnClick = !isOpen ? toggleMenu : null;

  return (
    <>
    <div className="bg-alabaster flex items-center h-16">
      <div
        onClick={HandleOnClick}
        className={`menuContainer z-10 bg-racing-lime absolute top-0 right-0 duration-700 px-10 ${
          isOpen ? "w-screen h-screen" : `w-32 h-32 ${hoverRules}`
        } ${transitionRules}`}>
        <p
          onClick={toggleMenu}
          className="font-sans font-light text-xs absolute top-14 right-[52px] text-dark-linen">
          {isOpen ? menuClose : menuIcon}
        </p>
        <FadeInMount isOpen={isOpen} isOpening={isOpening}>
          <Menu />
        </FadeInMount>
      </div>
    </div>
    </>
  );
};

export default Header;
