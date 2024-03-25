import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    var cursor = document.querySelector(".cursor");

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
        className="cursor w-20 h-20 bg-alabaster border-dark-linen hidden fixed top-0 left-0 border-[1px] rounded-full pointer-events-none z-20 sm:grid place-content-center text-center text-xs text-balance">
          Entrer sur le site
        </div>
    </>
  );
};

export default CustomCursor;
