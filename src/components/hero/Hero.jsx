import { useEffect } from "react";

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
        <div className="grid place-content-end md:place-content-center w-full h-full px-10">
          <p className="font-secondary font-medium italic text-8xl lg:text-[180px] text-dark-linen select-none">
            Hello There<span className="text-5xl lg:text-7xl align-text-top">*</span>
          </p>
        </div>
      </div>
      <div className="heroFront absolute top-0 left-0 w-screen h-screen hidden sm:block">
        <div className="grid place-content-end md:place-content-center w-full h-full px-10">
          <p className="font-secondary font-medium italic text-8xl lg:text-[180px] text-racing-lime select-none">
            Hello There<span className="text-5xl lg:text-7xl align-text-top">*</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
