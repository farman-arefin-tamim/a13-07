import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { TfiStatsUp, TfiTimer } from "react-icons/tfi";
import { NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
        <li>
            <NavLink to={"/"} className={({ isActive }) =>
            `btn ${isActive && "text-white bg-[#244d3f]"}`
            }>
            <RiHome2Line />Home</NavLink>
        </li>
        <li>
            <NavLink to={"/timeline"} className={({ isActive }) =>
            `btn ${isActive ? "text-white bg-[#244d3f]" : ""}`
            }>
            <TfiTimer />Timeline
            </NavLink>
        </li>
        <li><NavLink to={"/stats"} className={({ isActive }) =>
        `btn ${isActive ? "text-white bg-[#244d3f]" : ""}`
        }><TfiStatsUp />Stats</NavLink>
        </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm px-12">
      <div className="navbar">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">
            Keen<span className="text-[#244d3f]">Keeper</span>
          </h2>
        </div>
        <ul className="flex gap-2">
          {/* <button className="btn"><RiHome2Line />Home</button>
          <button className="btn"><TfiTimer />Timeline</button>
          <button className="btn"><TfiStatsUp />Stats</button> */}
          {links}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
