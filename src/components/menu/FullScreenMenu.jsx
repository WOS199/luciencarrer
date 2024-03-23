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
      <div className="h- full w-full absolute inset-0 z-20 bg-racing-lime flex justify-center items-center"
      >
        <div className="w-full">
          <div className="overflow-hidden">
            <p className={`${customTranslate} text-center mx-auto transition-all duration-500 ease-in-out font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <a
                href="/"
                onClick={closeMenu}>
                Accueil
              </a>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} text-center mx-auto transition-all duration-500 ease-in-out delay-100 font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Parcours"
                onClick={closeMenu}>
                Parcours
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} text-center mx-auto transition-all duration-500 ease-in-out delay-150 font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Experience"
                onClick={closeMenu}>
                Expériences
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} text-center mx-auto transition-all duration-500 ease-in-out delay-200 font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Skills"
                onClick={closeMenu}>
                Skills
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} text-center mx-auto transition-all duration-500 ease-in-out delay-[250ms] font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Projects"
                onClick={closeMenu}>
                Projects
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className={`${customTranslate} text-center mx-auto transition-all duration-500 ease-in-out delay-[300ms] font-light italic font-secondary text-4xl md:text-8xl w-fit text-dark-linen mt-4 hover:underline decoration-4 underline-offset-8`}>
              <HashLink
                to="/content#Footer"
                onClick={closeMenu}>
                Contact
              </HashLink>
            </p>
          </div>
        </div>
        <a className="absolute top-10 right-10" href="#" onClick={handleCloseMenu}>
          {menuClose}
        </a>
      </div>
    </>
  );
};

export default FullScreenMenu;
