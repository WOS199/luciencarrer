import { HashLink } from "react-router-hash-link";

const FullScreenMenu = ({ closeMenu }) => {
  const menuClose = <img src="/assets/menuClose.svg" alt="Close menu" />;
  const handleCloseMenu = () => {
    closeMenu();
  };
  return (
    <>
      <div className="h-screen w-screen absolute inset-0 z-20 p-10 bg-racing-lime flex justify-between"
      >
        <div>
          <div className="overflow-hidden">
            <p className="font-light text-4xl md:text-6xl w-fit text-dark-linen mt-4">
              <a
                href="/"
                className="hover:underline decoration-4 underline-offset-8"
                onClick={closeMenu}>
                Accueil
              </a>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="font-light text-4xl md:text-6xl w-fit text-dark-linen mt-4">
              <HashLink
                to="/content#Parcours"
                className="hover:underline hover:decoration-2 hover:underline-offset-2"
                onClick={closeMenu}>
                Parcours
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="font-light text-4xl md:text-6xl w-fit text-dark-linen mt-4">
              <HashLink
                to="/content#Experience"
                className="hover:underline hover:decoration-2 hover:underline-offset-2"
                onClick={closeMenu}>
                Expériences
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="font-light text-4xl md:text-6xl w-fit text-dark-linen mt-4">
              <HashLink
                to="/content#Skills"
                className="hover:underline hover:decoration-2 hover:underline-offset-2"
                onClick={closeMenu}>
                Skills
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="font-light text-4xl md:text-6xl w-fit text-dark-linen mt-4">
              <HashLink
                to="/content#Projects"
                className="hover:underline hover:decoration-2 hover:underline-offset-2"
                onClick={closeMenu}>
                Projects
              </HashLink>
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="font-light text-4xl md:text-6xl w-fit text-dark-linen mt-4">
              <HashLink
                to="/content#Footer"
                className="hover:underline hover:decoration-2 hover:underline-offset-2"
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
