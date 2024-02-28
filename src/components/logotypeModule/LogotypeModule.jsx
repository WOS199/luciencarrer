const LogotypeModule = () => {
  return (
    <div className="flex items-center h-32 px-10">
      <div className="logotype absolute top-10 z-10">
        <div className="h-[45px] w-[280px] flex items-center bg-alabaster border-[1px] rounded-full border-dark-linen p-1">
          {/* <img className="h-4 ml-3" src="/assets/logotype_test.svg" alt="" /> */}
          <a className="w-full h-full flex justify-end" href="/content">
            <button className=" bg-dark-linen hover:bg-racing-lime rounded-full px-5 text-xs text-alabaster hover:text-dark-linen font-light">
              visiter le site
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogotypeModule;
