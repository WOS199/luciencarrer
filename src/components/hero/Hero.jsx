import { useEffect } from "react";
import CustomCursor from "/src/components/customCursor/CurstomCursor";

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
      <div className="heroBack absolute inset-0 w-screen h-screen">
        <div className="flex flex-col justify-between w-full h-full px-10 pt-10">
          <p className="font-secondary font-light italic text-7xl text-dark-linen leading-none select-none">
            Lucien Carrer
          </p>
          <p className="font-sans font-light text-xl text-dark-linen leading-none select-none">
            A developer <br />& web designer
          </p>
          <a className="hoverElement font-secondary font-light italic text-[200px] text-dark-linen leading-none select-none self-end mr-3">
            Welcome
          </a>
        </div>
      </div>
      <div className="heroFront absolute inset-0 w-screen h-screen hidden sm:block bg-cover bg-center bg-hero-pattern">
        <div className="flex flex-col justify-between w-full h-full px-10 pt-10">
          <p className="font-secondary font-light italic text-7xl text-dark-linen leading-none select-none">
            Lucien Carrer
          </p>
          <p className="font-sans font-light text-xl text-dark-linen leading-none select-none">
          A developer <br />& web designer
          </p>
          <a href="/content" className="hoverElement font-secondary font-light italic text-[200px] text-dark-linen leading-none select-none self-end mr-3">
            Welcome
          </a>
        </div>
      </div>
      <div className="absolute inset-0">
        <a className="cursor-pointer block w-screen h-screen" href="/content"></a>
      </div>
      <CustomCursor />
    </>
  );
};

export default Hero;
