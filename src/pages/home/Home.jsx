import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import LogotypeModule from "../../components/logotypeModule/LogotypeModule";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-alabaster">
      <LogotypeModule />
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
