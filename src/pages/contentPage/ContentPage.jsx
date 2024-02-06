import Header from "../../components/header/Header";
import Image from "../../components/image/Image";
import SectionChapter from "../../components/sectionChapter/SectionChapter";

const ContentPage = () => {
  return (
    <>
      <div className="w-full h-full sticky top-0 z-10">
        <Header />
      </div>
      <SectionChapter
        sectionLetter="A"
        descriptionText="Parcours d’études, diplômes & certifications professionnelles"
        sectionTitle="Parcours">
        <Image
          src="875x600.jpg"
          placeholder="image"
          width="w-[875px]"
          number="01"
        />
      </SectionChapter>
      <div className="section-content-container bg-alabaster pl-10 pr-52">
        <p className="text-5xl font-extralight text-dark-linen max-w-[75%] leading-tight mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
          <span className="underline">aliqua↘</span>. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea{" "}
          <span className="underline">comodo↘</span> consequat.
        </p>
        <div className="study-presentation flex flex-col">
          <div className="line1 flex justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 w-[45%] flex items-end">
              <p className="text-5xl font-extralight text-dark-linen">Paris</p>
              <p className="text-base font-extralight text-dark-linen ml-5">
                Prép'Art ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end">
              <p className="text-5xl font-extralight text-dark-linen">Prépa</p>
              <p className="text-base font-extralight text-dark-linen ml-5">
                3 concours nationaux optenus
              </p>
            </div>
          </div>
          <div className="line1 flex justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 w-[45%] flex items-end">
              <p className="text-5xl font-extralight text-dark-linen">
                Strasbourg
              </p>
              <p className="text-base font-extralight text-dark-linen ml-5">
                Hear ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end">
              <p className="text-5xl font-extralight text-dark-linen">
                Master 2
              </p>
              <p className="text-base font-extralight text-dark-linen ml-5">
                Félicitations du Jury
              </p>
            </div>
          </div>
          <div className="line1 flex justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 w-[45%] flex items-end">
              <p className="text-5xl font-extralight text-dark-linen">Online</p>
              <p className="text-base font-extralight text-dark-linen ml-5">
                Openclassrooms ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end">
              <p className="text-5xl font-extralight text-dark-linen">
                Certification Pro.
              </p>
              <p className="text-base font-extralight text-dark-linen ml-5">
                RNCP nv.2
              </p>
            </div>
          </div>
          <div className="spacer h-40"></div>
        </div>
      </div>
      <SectionChapter
        sectionLetter="B"
        descriptionText="Carrière & expériences professionnelles"
        sectionTitle="Expérience">
        <Image
          src="875x600.jpg"
          placeholder="image"
          width="w-[875px]"
          number="02"
        />
      </SectionChapter>
      <div className="section-content-container bg-alabaster pl-10 pr-52">
        <p className="text-5xl font-extralight text-dark-linen max-w-[75%] leading-tight mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
          <span className="underline">aliqua↘</span>. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea{" "}
          <span className="underline">comodo↘</span> consequat.
        </p>
        <div className="spacer h-40"></div>
      </div>
    </>
  );
};

export default ContentPage;
