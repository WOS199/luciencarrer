import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [customClasses, setCustomClasses] = useState("w-20 h-20 bg-alabaster border-dark-linen");
  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var links = document.querySelectorAll(".hoverElement");

    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText =
        "left:" + e.clientX + "px; top: " + e.clientY + "px;";
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${customClasses} hidden fixed top-0 left-0 border-[1px] rounded-full pointer-events-none z-20 sm:grid place-content-center text-center text-xs text-balance`}>
          Entrer sur le site
        </div>
    </>
  );
};

export default CustomCursor;
