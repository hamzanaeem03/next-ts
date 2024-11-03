import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 bg-gray-50 rounded-xl   m-12 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        <div>
          <b>Assignment Instructions:</b>
          <br />
          Modify the previous assignment to display country details using
          dynamic routes. Convert the country detail card into a component, pass
          the country information as props to the component, and display the
          data for each country.
        </div>
        <div>
          For example:
          <br />
          <ul className="list-disc pl-5">
            <li>
              <b>Name : </b>
              Pakistan
            </li>
            <li>
              <b>Population : </b>
              4,343,434
            </li>
            <li>
              <b>Capital : </b>  Islamabad
            </li>
          </ul>
        </div>
        
      </div>
    </>
  );
}
