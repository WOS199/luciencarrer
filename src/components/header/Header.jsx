import logo from "../../assets/135x15_logotype_green.webp";
import { useState, useRef, useEffect } from "react";
import Menu from "../menu/Menu";
import FadeInMount from "../FadeInMount/FadeInMount";

function Header() {
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setIsOpen]);

  let HandleOnClick = !isOpen ? toggleMenu : null;

  return (
    <div
      ref={menuRef}
      className="bg-alabaster flex justify-between items-center h-32">
      <div className="logotype mx-10">
        <a href="">
          <img src={logo} alt="Lucien Carrer" />
        </a>
      </div>
      <div
        onClick={HandleOnClick}
        className={`menuContainer z-10 bg-racing-lime flex items-end absolute top-0 right-0 transition-all duration-700 p-10 ${
          isOpen ? "w-full h-3/4" : "w-32 h-32 cursor-pointer"
        }`}>
        <p onClick={toggleMenu} className="cursor-pointer font-sans absolute top-[52px] right-10 text-dark-linen">
          {isOpen ? "close" : "menu"}
        </p>
        <FadeInMount isOpen={isOpen}>
          <Menu />
        </FadeInMount>
      </div>
    </div>
  );
}

export default Header;
