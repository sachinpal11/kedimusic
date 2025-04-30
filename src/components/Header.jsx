import React from "react";

function Header() {
  return (
    <nav className="w-full fixed top-0 h-auto flex items-center md:px-10 bg-neutral-950">
      <div className="text-white w-1/3">KediMusic</div>
      <div className="w-auto px-3 bg-neutral-800 my-2 rounded-full">
        <input
          type="text"
          className="px-4 py-2 outline-none text-white"
          placeholder="search"
        />
        <i className="ri-search-line text-xl text-neutral-500"></i>
      </div>
    </nav>
  );
}

export default Header;
