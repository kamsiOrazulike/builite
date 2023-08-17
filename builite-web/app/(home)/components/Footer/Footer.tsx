import React from "react";
import { FooterLink } from "./FooterLink";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });

  return (
    <>
      <footer className="bg-white">
        <div className="w-full">
          <hr className="mb-4 w-full shadow-lg" />
          <div className="grid grid-cols-2 gap-8 px-24 py-8 md:grid-cols-4">
            {/* Column 1 */}
            <div>
              <h2 className="mb-6 text-xl text-black">Find Us</h2>
              <ul className="text-gray-800 font-medium">
                <li className="mb-4">
                  <FooterLink label="Contact Us" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Help Center" href="#" />
                </li>
              </ul>
              <div className="flex flex-row mb-4">
                <FooterLink
                  href="#"
                  icon={
                    <FaFacebook
                      className={
                        "text-2xl mr-4 text-gray-400 hover:text-black transition-all duration-150"
                      }
                    />
                  }
                />
                <FooterLink
                  href="#"
                  icon={
                    <FaTwitter
                      className={
                        "text-2xl mr-4 text-gray-400 hover:text-black transition-all duration-150"
                      }
                    />
                  }
                />
                <FooterLink
                  href="#"
                  icon={
                    <FaLinkedin
                      className={
                        "text-2xl mr-4 text-gray-400 hover:text-black transition-all duration-150"
                      }
                    />
                  }
                />
                <FooterLink
                  href="#"
                  icon={
                    <FaInstagram
                      className={
                        "text-2xl mr-4 text-gray-400 hover:text-black transition-all duration-150"
                      }
                    />
                  }
                />
              </div>
              <h2 className="mb-3 text-xl text-black">Subsidiaries</h2>
              <ul className="text-gray-800 font-medium">
                <li className="mb-4">
                  <FooterLink label="Rent" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Bay Equity Home Loans" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Title Forward" href="#" />
                </li>
              </ul>
              <h2 className="mb-3 text-xl text-black">Countries</h2>
              <ul className="text-gray-800 font-medium">
                <li className="mb-4">
                  <FooterLink label="Nigeria" href="#" />
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h2 className="mb-6 text-xl text-black">About Us</h2>
              <ul className="text-gray-800 font-light">
                <li className="mb-4">
                  <FooterLink label="Why Builite?" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Community Impact" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Diversity & Inclusion" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Life at Builite" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Press" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Investors" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Blog" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Real Estate News" href="#" />
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h2 className="mb-6 text-xl text-black">Join Us</h2>
              <ul className="text-gray-800 font-light">
                <li className="mb-4">
                  <FooterLink label="Become an Agent" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Get Referrals" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Careers" href="#" />
                </li>
                <li className="mb-4">
                  <FooterLink label="Find Homes faster" href="#" />
                </li>
              </ul>
            </div>
          </div>

          <div className="px-4 py-6 bg-gray-100 text-gray-700 flex flex-col items-start justify-start">
            <img src={"./assets/imgs/logolight.svg"} className={"w-40 mb-8"} />
            <p className="text-lg">
              Copyright: © 2023 Builite. All rights reserved.
            </p>
            <p className="text-lg my-2">
              Updated {currentMonth} {currentDate.getFullYear()}: By searching,
              you agree to the Terms of Use, and Privacy Policy.
            </p>
            <p className="text-lg my-2">
              Do not sell or share any personal information.
            </p>
            <p className="text-lg mb-2">
              BUILITE and all BUILITE variants, TITLE FORWARD, WALK SCORE, and
              the R logos, are trademarks of Builite Corporation, registered or
              pending in the USPTO.
            </p>
            <p className="text-lg mt-2">
              If you are using a screen reader, or having trouble viewing this
              website, please call Builite Customer Support for help at
              +2348037245500
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
