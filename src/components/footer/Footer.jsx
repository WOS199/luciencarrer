const Footer = () => {
  return (
    <>
      <div className="bg-alabaster px-10 w-full text-dark-linen pb-10" id="Footer">
        <p className="font-secondary italic font-light text-6xl sm:text-9xl md:text-[150px] lg:text-[200px] pb-10">
          Let's talk
        </p>
        <div className="flex flex-col md:flex-row justify-between w-full gap-5 md:gap-0">
          <div>
            <a href="mailto:carrer.lucien@gmail.com" className="text-xl md:text-xl lg:text-3xl underline underline-offset-4 hover:bg-racing-lime">
              carrer.lucien@gmail.com
            </a>
          </div>
          <div>
            <p className="text-3xl md:text-xl lg:text-3xl font-bold">06 85 51 39 65</p>
          </div>
          <div className="flex justify-between gap-10">
            <div>
              <a href="#" className="text-xl md:text-xl lg:text-3xl hover:bg-racing-lime">
                LinkedIn ↘
              </a>
            </div>
            <div>
              <a href="#" className="text-xl md:text-xl lg:text-3xl hover:bg-racing-lime">
                Github ↘
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
