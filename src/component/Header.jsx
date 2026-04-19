import { CarTaxiFront, Menu, ShoppingCartIcon, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
  }
  const menuItem = [
    {
      id: 1,
      text: "home",
      link: "/",
    },
    {
      id: 2,
      text: "about",
      link: "/about",
    },
    {
      id: 3,
      text: "contact",
      link: "/contact",
    },
    {
      id: 4,
      text: "product",
      link: "/products",
    },
  ];
  return (
    <header className="relative">
      <nav className="flex items-center justify-between bg-liniear py-8 px-5 shadow-xl ">
        <div className="block lg:hidden">
          {menuOpen ? (
            <X className="text-red-500" onClick={handleMenuOpen} />
          ) : (
            <Menu onClick={handleMenuOpen} />
          )}
        </div>
        <div>
          <img src="/public/Exclusive.svg" alt="logo" />
        </div>

        {/* for Dekstop view */}
        <div className="hidden lg:block">
          <ul className="flex  items-center justify-between gap-6">
            {menuItem.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="text-xl text-black font-semibold"
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* for Mobile view */}
        {menuOpen && (
          <div
            className={`absolute block lg:hidden top-21.5 w-50 left-0 bg-white p-5 z-100 shadow-2xl transform transition-all duration-300 ease-in-out  ${menuOpen ? "translate--0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}
          >
            <ul className="flex flex-col  items-center justify-between gap-6">
              {menuItem.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                    onClick={handleMenuOpen}
                      to={item.link}
                      className="text-xl text-black font-semibold flex flex-col items-center text-center"
                    >
                      {item.text}
                      <hr className="text-yellow-500 w-40 mt-1.25" />
                      <span className=" " />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="relative inline-block">
          <ShoppingCartIcon className="w-6 h-6" />

          <span className="absolute -top-3 -right-2 w-5 h-5 bg-blue-700 text-white text-xs flex items-center justify-center rounded-full">
            3
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
