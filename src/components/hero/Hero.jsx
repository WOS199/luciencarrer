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
        <div className="flex items-end w-full h-full pb-10 px-10">
          <p className="font-secondary font-light italic text-7xl lg:text-8xl text-dark-linen select-none">
          Développeur spécialisé front end et frameworks Javascript, je créée des applications et des interfaces digitales qui captivent et inspirent.
          </p>
        </div>
      </div>
      <div className="heroFront absolute top-0 left-0 w-screen h-screen hidden sm:block bg-cover bg-hero-pattern">
        <div className="flex items-end w-full h-full pb-10 px-10">
          <p className="font-secondary font-light italic text-7xl lg:text-8xl text-dark-linen select-none">
          Développeur spécialisé front end et <span className="underline">frameworks Javascript</span>, je créée des applications et des <span className="underline">interfaces digitales</span> qui captivent et inspirent.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
