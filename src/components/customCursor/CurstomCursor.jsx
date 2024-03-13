import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [customClasses, setCustomClasses] = useState("w-10 h-10 bg-alabaster border-dark-linen");
  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var links = document.querySelectorAll(".hoverElement");

    document.addEventListener("mousemove", function (e) {
      cursor.style.cssText =
        "left:" + e.clientX + "px; top: " + e.clientY + "px;";
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        setCustomClasses("w-32 h-32 bg-racing-lime border-racing-lime");
      });

      link.addEventListener("mouseleave", function () {
        setCustomClasses("w-10 h-10 bg-alabaster border-dark-linen");
      });
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor ${customClasses} fixed top-0 left-0 border-[1px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-20`}></div>
    </>
  );
};

export default CustomCursor;
