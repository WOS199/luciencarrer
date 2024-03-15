import PropTypes from "prop-types";

const SectionChapter = ({ sectionLetter, sectionTitle, sectionImage }) => {
  SectionChapter.propTypes = {
    sectionLetter: PropTypes.string.isRequired,
    sectionImage: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
  };

  return (
    <div className="section-chapter-container bg-alabaster flex flex-col px-10 pb-20" id={sectionTitle}>
      <div className="pt-32 md:pt-0 md:pr-[20%]">
        <img
          className="hoverElement max-h-[60vh] mb-20"
          src={`/assets/${sectionImage}`}
          alt=""
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h2 className="font-secondary italic font-light text-6xl sm:text-9xl md:text-[150px] lg:text-[200px] text-dark-linen">
            {sectionTitle}
          </h2>
          <img
            className="max-h-4 md:max-h-full mb-20 md:mb-32 md:ml-5"
            src={`/assets/sectionIcon_${sectionLetter}.svg`}
            alt={`Section ${sectionLetter} icon`}
          />
        </div>
        <p className="self-center text-xs font-light text-dark-linen -rotate-90 md:mt-12">
          scroll
        </p>
      </div>
    </div>
  );
};

export default SectionChapter;
