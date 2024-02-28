import PropTypes from "prop-types";

const SectionChapter = ({
  sectionLetter,
  children,
  descriptionText,
  sectionTitle,
}) => {
  SectionChapter.propTypes = {
    sectionLetter: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    descriptionText: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
  };

  return (
    <div className="section-chapter-container bg-alabaster flex flex-col justify-between h-screen w-full px-10">
      <div className="section-description-container flex justify-between pr-44">
        <div className="section-description max-w-36 mb-5">
          <img
            className="mb-1"
            src={`/assets/sectionIcon_${sectionLetter}.svg`}
            alt={`Section ${sectionLetter} icon`}
          />
          <p className="font-light text-xs text-dark-linen">
            {descriptionText}
          </p>
        </div>
        {children}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h2 className="font-secondary italic font-light text-[200px] text-dark-linen">
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
