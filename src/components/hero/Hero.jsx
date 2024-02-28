import { useEffect } from "react";
import CustomCursor from "../customCursor/CurstomCursor";

const Hero = () => {
  
  useEffect(() => {
    const hero = document.querySelector(".heroFront");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      hero.style.setProperty("--x", `${x}%`);
      hero.style.setProperty("--y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="heroBack absolute top-0 left-0 w-screen h-screen">
        <div className="flex items-end w-full h-full px-10">
          <a className="hoverElement font-secondary font-light italic text-[200px] text-dark-linen leading-none select-none">
          Welcome
          </a>
        </div>
      </div>
      <div className="heroFront absolute top-0 left-0 w-screen h-screen hidden sm:block bg-cover bg-hero-pattern">
        <div className="flex items-end w-full h-full px-10">
          <a className="hoverElement font-secondary font-light italic text-[200px] text-dark-linen leading-none select-none">
          Welcome
          </a>
        </div>
      </div>
      <CustomCursor/>
    </>
  );
};

export default Hero;
