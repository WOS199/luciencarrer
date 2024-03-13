import Header from "../../components/header/Header";
import { useParams } from "react-router-dom";
import Projects from "../../data/projects.json";

const Project = () => {
  const params = useParams();
  const selectedProject = Projects.find((item) => item.id === params.id);

  const { title, techs, role, description, githubLink, pics } = selectedProject;

  return (
    <>
      <div className="w-full h-full static md:sticky top-0 z-10">
        <Header />
      </div>
      <div className="project-content-container bg-alabaster pl-10 pr-10 md:pr-40 flex flex-col md:flex-row">
        <div className="img-col flex flex-col gap-10 order-2 md:order-1">
          {pics.map((pic, index) => (
            <img key={`pic-${index}`} src={pic} alt="" />
          ))}
          <div className="spacer h-32"></div>
        </div>
        <div className="txt-col md:min-w-60 md:max-w-72 md:pl-10 text-dark-linen order-1 md:order-2 mb-20 md:mb-0">
          <div className="sticky top-20">
            <h3 className="font-secondary italic font-light text-5xl">
              {title}
            </h3>
            <div className="mt-5">
              {techs.map((tech, index) => (
                <a key={`tech-${index}`} className="pb-1 hover:underline font-light block">{tech} ↘</a>
              ))}
            </div>
            <div className="font-bold text-sm mt-5">{role}</div>
            <div className="font-light text-sm mt-5">{description}</div>
            <div className="mt-5">
              <a
                className="hover:bg-racing-lime bg-dark-linen text-alabaster px-4 py-2 rounded-full text-sm hover:text-dark-linen"
                href="">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
