const Header = () => {
  return (
    <header className="text-black-600 bg-[#faf5f5] font-medium text-xl ">
      <div className="container mx-auto flex flex-wrap justify-end p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-black-900">Works</a>
          <a className="mr-5 hover:text-black-900">Blog</a>
          <a className="mr-5 hover:text-black-900">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
