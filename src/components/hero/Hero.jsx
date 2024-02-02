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
        <div className="flex items-end w-full h-full pb-28 px-10">
          <p className="font-secondary font-light italic text-7xl lg:text-8xl text-dark-linen select-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="heroFront absolute top-0 left-0 w-screen h-screen hidden sm:block bg-cover bg-hero-pattern">
        <div className="flex items-end w-full h-full pb-28 px-10">
          <p className="font-secondary font-light italic text-7xl lg:text-8xl text-dark-linen select-none">
            Lorem <span className="underline">ipsum dolor</span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span className="underline">dolore magna</span> aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
