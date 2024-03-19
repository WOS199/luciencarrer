import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

const FullScreenMenu = ({ closeMenu }) => {
  const menuClose = <img src="/assets/menuClose.svg" alt="Close menu" />;
  const handleCloseMenu = () => {
    closeMenu();
  };
  const [customTranslate, setCustomTranslate] = useState('translate-y-full');
  useEffect(() => {
    setCustomTranslate('translate-y-0');
  },[]);
  return (
    <>
      <div className="h-screen w-full absolute inset-0 z-20 p-10 bg-racing-lime flex justify-between"
      >
        <div className="w-full">
          <div className="overflow-hidden">
            <p className={`${customTranslate} transition-all duration-300 font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <a
                href="/"
                onClick={closeMenu}>
                Accueil
              </a>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} transition-all duration-300 delay-100 font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Parcours"
                onClick={closeMenu}>
                Parcours
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} transition-all duration-300 delay-150 font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Experience"
                onClick={closeMenu}>
                Expériences
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} transition-all duration-300 delay-200 font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Skills"
                onClick={closeMenu}>
                Skills
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} transition-all duration-300 delay-[250ms] font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Projects"
                onClick={closeMenu}>
                Projects
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} transition-all duration-300 delay-[300ms] font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Footer"
                onClick={closeMenu}>
                Contact
              </HashLink>
            </p>
          </div>
        </div>
        <a href="#" onClick={handleCloseMenu}>
          {menuClose}
        </a>
      </div>
    </>
  );
};

export default FullScreenMenu;
