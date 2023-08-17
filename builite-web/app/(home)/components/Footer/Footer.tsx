import React from "react";
import { FooterLink } from "./FooterLink";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="w-full">
          <hr className="mb-4 w-full shadow-lg" />
          <div className="grid grid-cols-2 gap-8 px-24 py-8 md:grid-cols-4">
            {/* Column 1 */}
            <div>
              <h2 className="mb-6 text-xl text-black">Join Us</h2>
              <ul className="text-gray-800 font-light">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    <FooterLink label="Become an Agent" href="#" />
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    <FooterLink label="Get Referrals" href="#" />
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    <FooterLink label="Careers" href="#" />
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    <FooterLink label="Find Homes faster" href="#" />
                  </a>
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
          </div>

          <div className="px-4 py-6 bg-white md:flex md:items-center md:justify-between"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
