const ButtonModule = ({projectId, projectName}) => {
  return (
    <div className="flex items-center w-full">
      <div className="w-full">
        <div className="h-12 md:w-[80%] flex items-center justify-between bg-alabaster border-[1px] rounded-full border-dark-linen p-1">
          <div className="flex gap-5 pl-5">
          <p className="text-xs text-dark-linen">{projectName}</p>
          </div>
          <a className="h-full" href={`/project/${projectId}`}>
            <button className=" bg-dark-linen w-fit h-full hover:bg-racing-lime rounded-full px-5 text-xs text-alabaster hover:text-dark-linen font-light">
              voir le projet
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ButtonModule;
