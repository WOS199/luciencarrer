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
          className={`font-bold text-4xl md:text-7xl xl:text-9xl w-fit text-dark-linen mt-4 cursor-pointer transition-all duration-500 ${onMount}`}>
          Parcours
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-bold text-4xl md:text-7xl xl:text-9xl w-fit text-dark-linen mt-4 cursor-pointer transition-all duration-500 delay-100 ${onMount}`}>
          Expériences
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-bold text-4xl md:text-7xl xl:text-9xl w-fit text-dark-linen mt-4 cursor-pointer transition-all duration-500 delay-200 ${onMount}`}>
          Compétences
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className={`font-bold text-4xl md:text-7xl xl:text-9xl w-fit text-dark-linen mt-4 cursor-pointer transition-all duration-500 delay-300 ${onMount}`}>
          Projets
        </p>
      </div>
      <div className="overflow-hidden absolute bottom-10 right-10">
        <p
          className={`font-secondary italic font-medium text-4xl text-dark-linen mt-4 cursor-pointer transition-all duration-500 delay-500 ${onMount}`}>
          Contact
        </p>
      </div>
    </div>
  );
}

export default Menu;
