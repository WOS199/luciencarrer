import PropTypes from "prop-types";

const Image = ({ src, placeholder, width, number }) => {
  Image.propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.node.isRequired,
    width: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  return (
    <div>
      <img className={`hoverElement ${width}`} src={`/assets/${src}`} alt={placeholder} />
      <div className={`flex justify-between ${width}`}>
        <p className="text-[10px] leading-tight font-light text-dark-linen mt-2">
          Lorem <br />
          ipsum dolor
        </p>
        <p className="font-secondary text-dark-linen text-lg mt-2">{number}</p>
      </div>
    </div>
  );
};

export default Image;
