import ButtonModule from "../../components/buttonModule/ButtonModule";
import CustomCursor from "../../components/customCursor/CurstomCursor";
import Header from "../../components/header/Header";
import SectionChapter from "../../components/sectionChapter/SectionChapter";

const ContentPage = () => {
  return (
    <>
      <div className="w-full h-full static md:sticky top-0 z-10">
        <Header />
      </div>
      <SectionChapter
        sectionLetter="A"
        sectionImage="full-img-1.jpg"
        sectionTitle="Parcours"
      ></SectionChapter>
      <div className="section-content-container bg-alabaster pl-10 pr-52">
        <p className="text-4xl font-extralight text-dark-linen lg:max-w-[80%] leading-tight mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            aliqua↘
          </span>
          . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            comodo↘
          </span>{" "}
          consequat.
        </p>
        <div className="study-presentation flex flex-col pb-32">
          <div className="line1 flex justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 w-[45%] flex items-end hover:bg-racing-lime">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-dark-linen">
                Paris
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                Prép&apos;Art ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end hover:bg-racing-lime">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-dark-linen">
                Prépa
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                3 concours nationaux optenus
              </p>
            </div>
          </div>
          <div className="line2 flex justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 w-[45%] flex items-end hover:bg-racing-lime">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-dark-linen">
                Strasbourg
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                Hear ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end hover:bg-racing-lime">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-dark-linen">
                Master 2
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                Félicitations du Jury
              </p>
            </div>
          </div>
          <div className="line3 flex justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 w-[45%] flex items-end hover:bg-racing-lime">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-dark-linen">
                Online
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                Openclassrooms ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end hover:bg-racing-lime">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-dark-linen">
                Certification Pro.
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                RNCP nv.2
              </p>
            </div>
          </div>
        </div>
        {/* <div className="py-32">
          <img className="hoverElement" src="assets/full-img-1.jpg" alt="" />
        </div> */}
      </div>
      <SectionChapter
        sectionLetter="B"
        sectionImage="full-img-1.jpg"
        sectionTitle="Expérience"
      ></SectionChapter>
      <div className="section-content-container bg-alabaster pl-10 pr-52">
        <p className="text-4xl font-extralight text-dark-linen max-w-[75%] leading-tight mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            aliqua↘
          </span>
          . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            comodo↘
          </span>{" "}
          consequat.
        </p>
        <div className="spacer h-96"></div>
      </div>
      <SectionChapter
        sectionLetter="C"
        sectionImage="full-img-1.jpg"
        sectionTitle="Skills"
      ></SectionChapter>
      <div className="section-content-container bg-alabaster pl-10 pr-52">
        <p className="text-4xl font-extralight text-dark-linen max-w-[75%] leading-tight pb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            aliqua↘
          </span>
          . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            comodo↘
          </span>{" "}
          consequat.
        </p>
      </div>
      <div className="Skills-list-container bg-alabaster pl-10 pr-52 pb-32">
        <div className="flex gap-5">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-dark-linen border-b-[1px] pb-3 border-dark-linen">
              Développement
            </h3>
            <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen py-5 max-w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <ul className="font-light">
              <li className="pb-1 hover:underline">html5 ↘</li>
              <li className="pb-1 hover:underline">css3 ↘</li>
              <li className="pb-1 hover:underline">JavaScript ↘</li>
              <li className="pb-1 hover:underline">React ↘</li>
              <li className="pb-1 hover:underline">Sass ↘</li>
              <li className="pb-1 hover:underline">Redux ↘</li>
              <li className="pb-1 hover:underline">GSAP ↘</li>
              <li className="pb-1 hover:underline">Bootstrap ↘</li>
              <li className="pb-1 hover:underline">Tailwindcss ↘</li>
              <li className="pb-1 hover:underline">AlpineJS ↘</li>
              <li className="pb-1 hover:underline">WordPress ↘</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extralight text-dark-linen border-b-[1px] pb-3 border-dark-linen">
              Design
            </h3>
            <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen py-5 max-w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <ul className="font-light">
              <li className="pb-1 hover:underline">Figma ↘</li>
              <li className="pb-1 hover:underline">Adobe Xd ↘</li>
              <li className="pb-1 hover:underline">Adobe Illustrator ↘</li>
              <li className="pb-1 hover:underline">Adobe Photoshop ↘</li>
              <li className="pb-1 hover:underline">Adobe InDesign ↘</li>
              <li className="pb-1 hover:underline">Affinity Designer 2 ↘</li>
              <li className="pb-1 hover:underline">Affinity Photo 2 ↘</li>
              <li className="pb-1 hover:underline">Affinity Publisher 2 ↘</li>
              <li className="pb-1 hover:underline">Canva Pro ↘</li>
              <li className="pb-1 hover:underline">DaVinci Resolve ↘</li>
              <li className="pb-1 hover:underline">Première Pro ↘</li>
            </ul>
          </div>
        </div>
      </div>
      <SectionChapter
        sectionLetter="C"
        sectionImage="full-img-2.jpg"
        sectionTitle="Projects"
      ></SectionChapter>
      <div className="section-content-container bg-alabaster pl-10 pr-52">
        <p className="text-4xl font-extralight text-dark-linen max-w-[75%] leading-tight pb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            aliqua↘
          </span>
          . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            comodo↘
          </span>{" "}
          consequat.
        </p>
      </div>
      <div className="projects-gallery-container bg-alabaster pl-10 pr-52 pb-32">
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full min-h-[500px] bg-slate-100 p-10 bg-[url('/assets/full-img-3.jpg')] bg-cover bg-center">
            <ButtonModule />
          </div>
          <div className="w-full min-h-96 bg-slate-100 p-10 bg-[url('/assets/full-img-4.jpg')] bg-cover bg-center">
            <ButtonModule />
          </div>
          <div className="w-full min-h-[500px] bg-slate-100 p-10 bg-[url('/assets/full-img-3.jpg')] bg-cover bg-center">
            <ButtonModule />
          </div>
          <div className="w-full min-h-96 bg-slate-100 p-10 bg-[url('/assets/full-img-4.jpg')] bg-cover bg-center">
            <ButtonModule />
          </div>
        </div>
      </div>
      <CustomCursor />
    </>
  );
};

export default ContentPage;
