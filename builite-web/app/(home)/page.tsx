"use client";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "./components/Buttons/AllButtons";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { CTASection, DiscoverSection } from "./components/Sections/AllSections";

export default function Home() {
  function handleSearch(value: any) {
    console.log("You searched: ", value);
  }

  return (
    <>
      <div className="text-white bg-placeHolder bg-fixed bg-cover">
        <div className="w-full bg-black/50">
          <div className="max-w-[800px] md:mx-auto w-full py-48 text-left flex flex-col justify-center items-center">
            <h1 className="md:text-7xl sm:text-5xl text-4xl md:py-2 ease-in-out duration-500">
              Discover your home.
            </h1>
            <p className="md:text-4xl sm:text-2xl text-xl text-white/80 font-light mt-2 mb-4">
              Let's make your dream home a reality.
            </p>
            <div className="mt-2 w-[90%]">
              {/* Search bar */}
              {/* <Searchbar
                label="Please enter Address or City"
                htmlFor="departmentID"
                handleSearch={handleSearch}
              /> */}
              {/* Call to action */}
            </div>
            <Button
              label={"Get in Contact"}
              link={"#"}
              className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-md tansition-all ease-in duration-150"
            />
          </div>
        </div>
        <DiscoverSection />
        <CTASection />
      </div>
    </>
  );
}
