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
      <div className="heroBack absolute inset-0 w-screen h-screen bg-cover bg-hero-mobile sm:bg-none">
        <div className="flex flex-col justify-between w-full h-full px-10 pt-10">
          <p className="font-secondary font-light italic text-4xl sm:text-7xl text-dark-linen leading-none select-none">
            Lucien Carrer
          </p>
          <p className="font-sans font-light text-xl text-dark-linen leading-none select-none">
            A developer <br />& web designer
          </p>
          <a className="font-secondary hidden sm:block font-light italic text-7xl sm:text-9xl md:text-[200px] text-dark-linen leading-none select-none self-end mr-3">
            Welcome
          </a>
          <a className="font-secondary sm:hidden font-light underline decoration-2 underline-offset-8 pb-5 italic text-4xl text-dark-linen leading-none select-none self-end">
            Entrer sur le site
          </a>
        </div>
      </div>
      <div className="heroFront absolute inset-0 w-screen h-screen hidden sm:block bg-cover bg-center bg-hero-pattern">
        <div className="flex flex-col justify-between w-full h-full px-10 pt-10">
          <p className="font-secondary font-light italic text-4xl sm:text-7xl text-dark-linen leading-none select-none">
            Lucien Carrer
          </p>
          <p className="font-sans font-light text-xl text-dark-linen leading-none select-none">
          A developer <br />& web designer
          </p>
          <a href="/content" className="font-secondary font-light italic text-7xl sm:text-9xl md:text-[200px] text-dark-linen leading-none select-none self-end mr-3">
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
