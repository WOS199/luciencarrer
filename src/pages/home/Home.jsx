import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-alabaster">
      <div className="bg-alabaster flex items-center h-32 px-10">
        <div className="logotype">
          <a href="">
            <p className="font-sans font-light text-xs absolute top-10 max-w-24 text-dark-linen z-10">
              front-end dev <br />& digital creative director
            </p>
          </a>
        </div>
        <p className="my-0 mx-auto font-secondary font-medium italic text-xs text-dark-linen z-10">
          Lucien Carrer
        </p>
      </div>
      <Header />
      <Hero />
      <div className="absolute bottom-0 w-full h-32 px-10 flex justify-between items-center font-light text-xs">
        <a href="#">
          <p>à propos ↘</p>
        </a>
        <a href="#">
          <p>projets ↘</p>
        </a>
        <a href="#">
          <p>contact ↘</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
