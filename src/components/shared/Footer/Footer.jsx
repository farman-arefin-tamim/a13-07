import React from "react";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import twitter from "../../../assets/twitter.png";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244d3f] text-primary-content p-10">
      <p className="font-bold text-6xl text-white">KeenKeeper</p>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <nav>
        <h3 className="text-center text-xl font-semibold text-white">
          Social Links
        </h3>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img src={instagram} alt="" />
          </a>
          <a>
            <img src={facebook} alt="" />
          </a>
          <a>
            <img src={twitter} alt="" />
          </a>
        </div>
      </nav>
      <hr className="border-gray-500 h-1 w-[90vw]" />
      {/* <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500"> */}
      <div>
        <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-red-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-400 transition">
            Terms of services
          </a>
          <a href="#" className="hover:text-red-400 transition">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
