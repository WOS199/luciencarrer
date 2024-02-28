import PropTypes from "prop-types";

const SectionChapter = ({ sectionLetter, sectionTitle, sectionImage }) => {
  SectionChapter.propTypes = {
    sectionLetter: PropTypes.string.isRequired,
    sectionImage: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
  };

  return (
    <div className="section-chapter-container bg-alabaster flex flex-col justify-between h-screen w-full px-10">
      <div className="pr-52">
        <img
          className="hoverElement max-h-[500px]"
          src={`assets/${sectionImage}`}
          alt=""
        />
      </div>
      <div className="flex justify-between -translate-y-16">
        <div className="flex items-center">
          <h2 className="font-secondary italic font-light text-7xl sm:text-9xl md:text-[150px] lg:text-[200px] text-dark-linen">
            {sectionTitle}
          </h2>
          <img
            className="mb-32 ml-5"
            src={`/assets/sectionIcon_${sectionLetter}.svg`}
            alt={`Section ${sectionLetter} icon`}
          />
        </div>
        <p className="self-center text-xs font-light text-dark-linen -rotate-90 mt-12">
          scroll
        </p>
      </div>
    </div>
  );
};

export default SectionChapter;
