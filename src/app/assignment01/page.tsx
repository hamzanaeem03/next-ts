import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
     <Navbar/>
      <div className="flex flex-col gap-6 bg-gray-50 rounded-xl   m-12 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <span>
          This is the first assignment of NextJS where we are building a Next.js
          Application with Dynamic Routes
        </span>
        <div>
          <b>Create a dynamic routing system:</b>
          <br />
          Set up dynamic routes for country names using the app router in
          Next.js. Each route will dynamically display details for a specific
          country based on the URL.
        </div>
        <div>
          <b>Create a country listing page:</b> <br />
          Build a static page that lists five countries of your choice. Each
          country name should be clickable, linking to its respective dynamic
          route (e.g., /country/[country_name]). <br />
          On the dynamic route page, display the following details for the
          selected country
          <ul className="list-disc pl-5">
            <li>Name</li>
            <li>Population</li>
            <li>Capital</li>
          </ul>
        </div>
        <div>
          Use a JavaScript object to store the details of the countries you want
          to display. For each country, you should include the name, population,
          and capital. When a user visits the dynamic route for a specific
          country (e.g., / country /canada), the application should search for
          that country in the object.
          <ol className="list-decimal pl-5">
            <li>
              If the country is found in the object, display the country’s
              details.
            </li>
            <li>
              If the country is not found, display a message: "Country not
              found."
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
