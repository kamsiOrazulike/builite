"use client";
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
          <div className="max-w-[800px] mt-[-14px] mx-8 md:mx-auto w-full h-screen text-left flex flex-col justify-center">
            <h1 className="md:text-7xl sm:text-5xl text-4xl md:py-2 ease-in-out duration-500">
              Discover your home.
            </h1>

            <p className="md:text-4xl sm:text-2xl text-xl text-white/80 font-light mt-2 mb-4">
              Let's get you a home perfect for you
            </p>
            <div className="mt-2 w-[90%]">
              <Searchbar
                label="Address, School, City, Neighbourhood"
                htmlFor="departmentID"
                handleSearch={handleSearch}
              />
            </div>
          </div>
        </div>
        <DiscoverSection />
        <CTASection />
      </div>
    </>
  );
}
