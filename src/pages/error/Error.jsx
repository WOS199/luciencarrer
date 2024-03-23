const Error = () => {
    return (
        <div className="bg-alabaster w-screen h-screen grid place-content-center">
            <p className="text-9xl md:text-[200px] font-secondary text-dark-linen italic font-light">Oops !</p>
            <p className="text-base font-light text-dark-linen text-center mt-5">Quelque chose s'est mal passé.</p>
            <a
                  className="hover:bg-racing-lime bg-dark-linen w-fit mx-auto mt-10 text-alabaster px-4 py-2 rounded-full text-sm hover:text-dark-linen"
                  href="/">
                  Revenir à l'accueil
                </a>
        </div>
    )
}

export default Error;