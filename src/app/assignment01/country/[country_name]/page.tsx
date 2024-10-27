import Link from "next/link";
import Navbar from "../../components/Navbar";

const CountryName = async ({
  params,
}: {
  params: Promise<{ country_name: string }>;
}) => {
  const { country_name } = await params;

  const countryDetails = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: "241 million",
    },
    {
      name: "Palestine",
      capital: "Jerusalem",
      population: "5 million",
    },
    {
      name: "Turkiye",
      capital: "Ankara",
      population: "85 million",
    },
    {
      name: "Iran",
      capital: "Tehran",
      population: "88 million",
    },
    {
      name: "Syria",
      capital: "Damascus",
      population: "22 million",
    },
    {
      name: "saudi-arabia",
      capital: "Riyadh",
      population: "36 million",
    },
  ];

  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === country_name.toLowerCase()
  );

  if (!country) {
    return (
      <h1 className="text-white text-center text-2xl"> Country Not Found! </h1>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center gap-6 bg-gray-50 rounded-xl m-12 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="m-4"> Name: {country.name}</h1>
        <h1 className="m-4"> Population: {country.population}</h1>
        <h1 className="m-4"> Capital: {country.capital}</h1>

        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <Link href={"/assignment01/country"}>back to country list</Link>
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <Link href={"/assignment01"}>back to assignment details</Link>
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <Link href={"/"}>back to main</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryName;
