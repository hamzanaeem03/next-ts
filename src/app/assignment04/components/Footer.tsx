import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#faf5f5] text-center text-gray-600 body-font overflow-hidden">
      <div className="px-5 py-24 mx-auto flex items-center justify-center flex-col gap-10">
        <img src="/fotericon.png" alt="" className="w-[280px]" />
        <span className="text-black font-medium text-2xl">
          Copyright ©2020 All rights reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
