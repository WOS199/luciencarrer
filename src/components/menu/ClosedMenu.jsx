import { useState } from "react";
import FullScreenMenu from "../../components/menu/FullScreenMenu";

const ClosedMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuIcon = <img src="/assets/menuIcon.svg" alt="Open menu" />;
  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.body.classList.add("overflow-hidden");
    } else {
      setIsOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="w-full h-20 static md:sticky top-0 z-10 bg-alabaster flex justify-end">
        <a
          className=" w-20 h-20 cursor-pointer bg-racing-lime grid place-content-center"
          href="#"
          onClick={toggleMenu}>
          {menuIcon}
        </a>
      </div>
      {isOpen && <FullScreenMenu closeMenu={closeMenu} />}
    </>
  );
};

export default ClosedMenu;
