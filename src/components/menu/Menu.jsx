import { useEffect, useState } from "react";

const Menu = () => {
  const [onMount, setOnMount] = useState("translate-y-full");

  useEffect(() => {
    setTimeout(() => {
      setOnMount("translate-y-0");
    }, 100);
  });

  return (
    <div className="mt-40 md:mt-2">
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 ${onMount}`}>
          <span className="hover:underline">Parcours</span>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 delay-100 ${onMount}`}>
          <span className="hover:underline">Expériences</span>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 delay-200 ${onMount}`}>
          <span className="hover:underline">Compétences</span>
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-light text-4xl md:text-6xl xl:text-8xl w-fit text-dark-linen mt-4 transition-all duration-500 delay-300 ${onMount}`}>
          <span className="hover:underline">Projets</span>
        </p>
      </div>
      {/* <div className="overflow-hidden absolute bottom-10 right-10">
        <p
          className={`font-secondary italic font-medium text-4xl text-dark-linen mt-4 transition-all duration-500 delay-500 ${onMount}`}>
          Contact
        </p>
      </div> */}
    </div>
  );
}

export default Menu;
