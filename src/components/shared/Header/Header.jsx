import React from "react";

const Header = () => {
  return (
    <nav className="bg-base-100 shadow-sm px-12">
      <div className="navbar">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">
            Keen<span className="text-[#244d3f]">Keeper</span>
          </h2>
        </div>
        <div className="flex gap-2">
          <button className="btn">Home</button>
          <button className="btn">Timeline</button>
          <button className="btn">Stats</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
