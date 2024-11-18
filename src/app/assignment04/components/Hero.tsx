const Hero = () => {
  return (
    <section className="text-gray-600 bg-[#faf5f5] body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-evenly">
        <div className="ml-56 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-4 font-black text-[#21243D]">
            Hi, I am John, <br />
            Creative Technologist{" "}
          </h1>
          <p className="mb-8 text-lg text-[#21243D] w-[400px] leading-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex justify-center">
            <button className="border-0 focus:outline-none">
              <img src="/resume-download-button.svg" alt="btn" />{" "}
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-contain" alt="hero" src="/hero-image.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
