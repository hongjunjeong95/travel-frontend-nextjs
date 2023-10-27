import React from "react";
import Nav from "./nav";
import Categories from "./categories";

const Header = () => {
  return (
    <header className="mt-5 mb-10 border-b border-gray-300 border-solid pb-4">
      <div className="mx-56">
        <Nav />
        <Categories />
      </div>
    </header>
  );
};

export default Header;
