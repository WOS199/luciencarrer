const Image = ({src, placeholder, width, number}) => {
  return (
    <div>
      <img className="hoverElement" src={`/assets/${src}`} alt={placeholder} />
      <div className={`flex justify-between ${width}`}>
        <p className="text-xs leading-tight font-light text-dark-linen mt-2">Lorem <br/>ipsum dolor</p>
        <p className="font-secondary text-dark-linen text-2xl mt-2">{number}</p>
      </div>
    </div>
  );
};

export default Image;
