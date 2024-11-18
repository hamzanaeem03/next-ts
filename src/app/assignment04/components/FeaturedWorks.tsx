const FeaturedWorks = () => {
  return (
    <section className="bg-[#faf5f5] text-gray-600 body-font overflow-hidden">
      <div className="w-3/5 px-5 py-24 mx-auto flex flex-col gap-10">
        <div className="flex justify-between">
          <span className="font-medium text-black text-xl">Featured works</span>
        </div>
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex gap-6">
            <div className="md:w-64  flex-shrink-0 flex flex-col">
              <img src="/fw01.png" />
            </div>
            <div className="md:flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-black title-font mb-4">
                Designing Dashboard{" "}
              </h2>
              <div className="flex gap-6 justify-start items-center text-xl mb-4">
                <span className="bg-[#F98585] text-white rounded-full px-4 py-1">
                  2020
                </span>
                <span className="text-[20px]">Dashboard</span>
              </div>
              <p className="leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="py-8 flex gap-6">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <img src="/fw02.png" />
            </div>
            <div className="md:flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-black title-font mb-4">
                Designing Dashboard{" "}
              </h2>
              <div className="flex gap-6 justify-start items-center text-xl mb-4">
                <span className="bg-[#F98585] text-white rounded-full px-4 py-1">
                  2020
                </span>
                <span className="text-[20px]">Dashboard</span>
              </div>
              <p className="leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="py-8 flex gap-6">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <img src="/fw03.png" />
            </div>
            <div className="md:flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-black title-font mb-4">
                Designing Dashboard{" "}
              </h2>
              <div className="flex gap-6 justify-start items-center text-xl mb-4">
                <span className="bg-[#F98585] text-white rounded-full px-4 py-1">
                  2020
                </span>
                <span className="text-[20px]">Dashboard</span>
              </div>
              <p className="leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
