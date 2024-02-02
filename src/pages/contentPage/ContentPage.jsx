import Header from "../../components/header/Header";
import Image from "../../components/image/Image";

const ContentPage = () => {
  return (
    <>
      <div className="w-full h-full sticky top-0 z-10">
        <Header />
      </div>
      <div className="section-chapter-container bg-alabaster flex flex-col justify-between h-screen w-full px-10">
        <div className="section-description-container">
          <div className="section-description max-w-36 mb-5">
            <img
              className="mb-1"
              src="../../src/assets/sectionIcon_A.svg"
              alt="Section A icon"
            />
            <p className="font-light text-xs text-dark-linen">
              Parcours d’études, diplômes & certifications professionnelles
            </p>
          </div>
          {/* <div className="section-description max-w-36">
            <img
              className="mb-1"
              src="../../src/assets/sectionIcon_A_opacity.svg"
              alt="Section A icon opacity"
            />
            <p className="font-light text-xs text-dark-linen opacity-50">
              Education, diplomas
              <br /> & professionnal certifications
            </p>
          </div> */}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <h2 className="font-secondary italic font-light text-[250px] text-dark-linen">
              Parcours
            </h2>
            <img
              className="mb-40 ml-5"
              src="../../src/assets/sectionIcon_A.svg"
              alt="Section A icon"
            />
          </div>
          <p className="self-center text-xs font-light text-dark-linen -rotate-90 mt-24">
            scroll
          </p>
        </div>
      </div>
      <div className="section-content-container bg-alabaster px-10">
        <p className="text-5xl font-extralight text-dark-linen max-w-[65%] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
          <span className="underline">aliqua↘</span>. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea{" "}
          <span className="underline">comodo↘</span> consequat.
        </p>
        <div className="image-container flex justify-between items-center gap-10 py-40 pr-36 max-w-screen-2xl">
          <Image src="390x390.jpg" placeholder="image" width="w-[390px]" number="00" />
          <Image src="875x600.jpg" placeholder="image" width="w-[875px]" number="01" />
        </div>
      </div>
    </>
  );
};

export default ContentPage;
