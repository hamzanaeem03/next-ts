import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        <div className=" w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex items-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                href={"/assignment01"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/assignment01/country"}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Country
              </Link>
            </li>
            {/* <li
              className=" flex items-center rounded-md shadow-sm"
              role="group"
            >
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:hover:text-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:border-none focus:hover:text-blue-700 focus:text-blue-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                Pakistan
              </button>
              <button
                type="button"
                className="inline-flex focus:border-none  items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:hover:text-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:hover:text-blue-700 focus:text-blue-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                Palestine
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l focus:border-none  border-gray-900 hover:hover:text-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:hover:text-blue-700 focus:text-blue-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                Türkiye
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l focus:border-none  border-gray-900 hover:hover:text-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:hover:text-blue-700 focus:text-blue-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                Iran
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l focus:border-none  border-gray-900 hover:hover:text-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:hover:text-blue-700 focus:text-blue-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                Syria
              </button>

              <button
                type="button"
                className="inline-flex items-center focus:border-none  px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:hover:text-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:hover:text-blue-700 focus:text-blue-500 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
              >
                Saudi Arabia
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
