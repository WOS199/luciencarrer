import ButtonModule from "../../components/buttonModule/ButtonModule";
import CustomCursor from "../../components/customCursor/CurstomCursor";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SectionChapter from "../../components/sectionChapter/SectionChapter";
import Projects from "../../data/projects.json";

const ContentPage = () => {
  const projects = Projects;

  return (
    <>
      <div className="w-full h-full static md:sticky top-0 z-10">
        <Header />
      </div>
      <SectionChapter
        sectionLetter="A"
        sectionImage="full-img-1.jpg"
        sectionTitle="Parcours"></SectionChapter>
      <div className="section-content-container bg-alabaster pl-10 pr-10 md:pr-52">
        <div className="flex flex-col lg:flex-row justify-between gap-16 xl:gap-32">
          <p className="text-xl text-balance font-normal text-dark-linen leading-tight lg:pt-10 w-full">
            Après une année dédiée à la préparation des concours nationaux des
            écoles supérieures d'art et de design, j'ai choisi de m'orienter
            vers la prestigieuse <a href="https://www.hear.fr/" target="blank" className="underline hover:bg-racing-lime underline-offset-2">Haute École des Arts du Rhin</a>. Fort de
            l'obtention de mon Master 2 avec les félicitations du jury, j'ai
            rapidement intégré le secteur du web, mettant à profit mes
            compétences en tant que freelance et au sein d'agences.
          </p>
          <p className="text-base font-extralight text-dark-linen leading-tight lg:pt-32 w-full">
            Animé par un désir constant d'élargir mes connaissances, j'ai
            récemment décroché en 2024 une certification professionnelle en
            développement React et Javascript, attestant de mon engagement
            continu dans l'excellence technique. Mon expertise en tant que
            développeur front-end et web designer s'inscrit ainsi dans une
            démarche résolument tournée vers l'innovation et la maîtrise des
            dernières technologies.
          </p>
          <div className="flex min-w-60 pt-20 lg:pt-0 justify-end">
            <p className="font-secondary font-extralight text-4xl text-dark-linen italic max-w-96">
              Mon parcours professionnel s'est tracé entre Paris et Strasbourg
            </p>
          </div>
        </div>
        <div className="study-presentation flex flex-col pt-20 md:py-32">
          <div className="line1 flex flex-col md:flex-row md:gap-10 justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 md:w-[45%] flex justify-between items-end hover:bg-racing-lime">
              <p className="text-xl lg:text-4xl translate-y-1 font-normal md:font-extralight text-dark-linen">
                Paris
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                Prép&apos;Art ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end hover:bg-racing-lime">
              <p className="text-xl lg:text-4xl translate-y-1 font-extralight text-dark-linen">
                Prépa
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                3 concours optenus
              </p>
            </div>
          </div>
          <div className="line2 flex flex-col md:flex-row md:gap-10 justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 md:w-[45%] flex justify-between items-end hover:bg-racing-lime">
              <p className="text-xl lg:text-4xl translate-y-1 font-normal md:font-extralight text-dark-linen">
                Strasbourg
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                Hear ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end hover:bg-racing-lime">
              <p className="text-xl lg:text-4xl translate-y-1 font-extralight text-dark-linen">
                Master 2
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                Félicitations du Jury
              </p>
            </div>
          </div>
          <div className="line3 flex flex-col md:flex-row md:gap-10 justify-between border-b-[1px] pt-4 pb-3 border-dark-linen">
            <div className="block1 md:w-[45%] flex justify-between items-end hover:bg-racing-lime">
              <p className="text-xl lg:text-4xl translate-y-1 font-normal md:font-extralight text-dark-linen">
                Online
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                Openclassrooms ↘
              </p>
            </div>
            <div className="block2 flex-1 flex justify-between items-end hover:bg-racing-lime">
              <p className="text-xl lg:text-4xl translate-y-1 font-extralight text-dark-linen">
                Certification Pro.
              </p>
              <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen ml-5">
                RNCP nv.2
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionChapter
        sectionLetter="B"
        sectionImage="full-img-1.jpg"
        sectionTitle="Experience"></SectionChapter>
      <div className="experience-component bg-alabaster pl-10 pr-10 lg:pr-52">
        <div className="grid grid-cols-2 pb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center pb-4">
              <p className="text-4xl font-extralight text-dark-linen">
                En agence
              </p>
              <p className="text-dark-linen font-light text-xs border-dark-linen border-[1px] rounded-full ml-2 px-2 py-1">
                3 ans
              </p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 mt-10 md:mt-0">
            <p className="text-sm font-normal text-dark-linen pb-5">
              Directeur Artistique Digital <br />
              Direction du pôle web
            </p>
            <p className="text-sm font-extralight text-dark-linen max-w-[70%]">
              À la tête d’une équipe de 10 personnes composée de développeur
              (Full Stack & Front-End) ainsi que de web-designers, j’ai dirigé
              la production web de l’agence à destination de notre parc client
              (+ de 1000 clients en 2023), de la réception du brief jusqu’au
              site livré. J’étais également en charge du recrutement ainsi que
              du développement du service.
            </p>
          </div>
        </div>
      </div>
      <div className="experience-component bg-alabaster pl-10 pr-10 lg:pr-52 md:pb-32">
        <div className="grid grid-cols-2 pb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center pb-4">
              <p className="text-4xl font-extralight text-dark-linen">
                Freelancer
              </p>
              <p className="text-dark-linen font-light text-xs border-dark-linen border-[1px] rounded-full ml-2 px-2 py-1">
                4 ans
              </p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 mt-10 md:mt-0">
            <p className="text-sm font-normal text-dark-linen pb-5">
              WebDesign <br />
              Développement
            </p>
            <p className="text-sm font-extralight text-dark-linen max-w-[70%]">
              Mon expérience en tant que freelancer m'a conduit à collaborer
              avec diverses agences de communication et des studios de
              développement de renom. Je suis notamment intervenu sur les
              refontes web d’enseignes nationales telles qu’Ambiance & Styles,
              ou Culinarion. De plus, j'ai apporté mon expertise à plusieurs
              structures du spectacle vivant, classés Scène Européenne et Scène
              Nationales. Mon parcours professionnel atteste de ma capacité à
              intervenir de manière stratégique et efficace dans des contextes
              variés, tout en garantissant des résultats de qualité pour mes
              clients.
            </p>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-3 items-start md:pb-32">
          <div className="col-span-3 md:col-span-1 bg-slate-200">
            <img
              className="hoverElement h-full object-contain"
              src="/assets/agence-1.jpg"
              alt=""
            />
          </div>
          <div className="col-span-3 md:col-span-2 bg-slate-400">
            <img
              className="hoverElement h-full object-contain"
              src="/assets/agence-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <SectionChapter
        sectionLetter="C"
        sectionImage="full-img-1.jpg"
        sectionTitle="Skills"></SectionChapter>
      <div className="section-content-container bg-alabaster px-10 md:pr-52">
        <div className="flex flex-col lg:flex-row justify-between gap-20">
          <div className="w-1/2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-dark-linen mb-5 border-b-[1px] pb-3 border-dark-linen">
              Savoir faire
            </h3>
            <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen w-full">
              Développement d'application web, MERN stack, expérience en TALL
              stack, gestion de versions, obtimisation des performances,
              connaissances en SEO et accessibilité, direction artistique
              digitale, maquettage et prototypage UI/UX, maîtrise de la chaîne
              graphique, gestion de projet, expérience des workflow print &
              digital.
            </p>
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-dark-linen mb-5 border-b-[1px] pb-3 border-dark-linen">
              Savoir être
            </h3>
            <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen w-full">
              Esprit d'équipe, adaptabilité, rigueur et organisation,
              communication et écoute, proactivité, gestion du temps et de la
              charge de travail, capacités d'apprentissage et curiosité.
            </p>
          </div>
        </div>
      </div>
      <div className="Skills-list-container bg-alabaster px-10 md:pr-52 py-32">
        <div className="flex flex-col lg:flex-row gap-20">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-dark-linen border-b-[1px] pb-3 border-dark-linen">
              Développement
            </h3>
            <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen py-5 max-w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <ul className="font-light">
              <li className="pb-1 hover:underline">html5 ↘</li>
              <li className="pb-1 hover:underline">css3 ↘</li>
              <li className="pb-1 hover:underline">JavaScript ↘</li>
              <li className="pb-1 hover:underline">React ↘</li>
              <li className="pb-1 hover:underline">Sass ↘</li>
              <li className="pb-1 hover:underline">Redux ↘</li>
              <li className="pb-1 hover:underline">GSAP ↘</li>
              <li className="pb-1 hover:underline">Bootstrap ↘</li>
              <li className="pb-1 hover:underline">Tailwindcss ↘</li>
              <li className="pb-1 hover:underline">AlpineJS ↘</li>
              <li className="pb-1 hover:underline">WordPress ↘</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-dark-linen border-b-[1px] pb-3 border-dark-linen">
              Design
            </h3>
            <p className="text-xs md:text-sm xl:text-base font-extralight text-dark-linen py-5 max-w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <ul className="font-light">
              <li className="pb-1 hover:underline">Figma ↘</li>
              <li className="pb-1 hover:underline">Adobe Xd ↘</li>
              <li className="pb-1 hover:underline">Adobe Illustrator ↘</li>
              <li className="pb-1 hover:underline">Adobe Photoshop ↘</li>
              <li className="pb-1 hover:underline">Adobe InDesign ↘</li>
              <li className="pb-1 hover:underline">Affinity Designer 2 ↘</li>
              <li className="pb-1 hover:underline">Affinity Photo 2 ↘</li>
              <li className="pb-1 hover:underline">Affinity Publisher 2 ↘</li>
              <li className="pb-1 hover:underline">Canva Pro ↘</li>
              <li className="pb-1 hover:underline">DaVinci Resolve ↘</li>
              <li className="pb-1 hover:underline">Première Pro ↘</li>
            </ul>
          </div>
        </div>
      </div>
      <SectionChapter
        sectionLetter="C"
        sectionImage="full-img-2.jpg"
        sectionTitle="Projects"></SectionChapter>
      <div className="section-content-container bg-alabaster px-10 md:pr-52">
        <p className="text-4xl font-extralight text-dark-linen md:max-w-[75%] leading-tight pb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            aliqua↘
          </span>
          . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea{" "}
          <span className="underline decoration-2 underline-offset-4 hover:bg-racing-lime">
            comodo↘
          </span>{" "}
          consequat.
        </p>
      </div>
      <div className="projects-gallery-container bg-alabaster px-10 md:pr-52 pb-32">
        <div className="grid grid-cols-2 gap-5">
          {Projects.map(({ id, pics, title }, index) => (
            <div
              key={index}
              className={`col-span-2 lg:col-span-1 w-full min-h-[500px] bg-slate-100 p-10`}
              style={{
                backgroundImage: `url(${pics[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <ButtonModule projectId={id} projectName={title} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentPage;
