import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-alabaster">
      <div className="bg-alabaster flex items-center h-32 px-10">
        <div className="logotype absolute top-10 z-10">
          <div className="h-[45px] w-[200px] flex bg-alabaster border-[1px] rounded-full border-dark-linen p-1">
          <img className="h-full" src="/assets/logotype_test_2.svg" alt="" />
            <a className="w-full h-full flex justify-end" href="/content">
              <button className=" bg-dark-linen hover:bg-racing-lime rounded-full px-5 text-xs text-alabaster hover:text-dark-linen font-light">
                visiter le site
              </button>
            </a>
          </div>
        </div>
      </div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
