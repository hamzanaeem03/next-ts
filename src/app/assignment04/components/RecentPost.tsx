const RecentPost = () => {
  return (
    <section className="bg-[#f4e2e2] text-black body-font">
      <div className=" flex justify-center px-5 py-24">
        <div className="w-3/5 flex flex-col gap-10">
          <div className="flex justify-between">
            <span className="font-medium text-xl">Recent posts</span>
            <span className="text-[#F98585] font-medium text-xl">View All</span>
          </div>
          <div className="flex  gap-10">
            <div className="lg:w-1/2">
              <div className=" bg-white px-8 py-10">
                <h1 className="title-font sm:text-2xl text-2xl font-black mb-3">
                  Making a design system from scratch{" "}
                </h1>
                <img src="/datetype.svg" className="h-[40px]" alt="" />

                <p className="text-base text-[#21243D] font-normal ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className=" bg-white px-8 py-10">
                <h1 className="title-font sm:text-2xl text-2xl font-black mb-3">
                  Making a design system from scratch{" "}
                </h1>
                <img src="/datetype.svg" className="h-[40px]" alt="" />

                <p className="text-base text-[#21243D] font-normal ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
