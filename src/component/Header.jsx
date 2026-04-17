import { CarTaxiFront, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Header = () => {
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
      link: "/product",
    },
  ];
  return (
    <header>
      <nav className="flex items-center justify-between bg-liniear py-8 px-5 shadow-xl">
        <div>
          <img src="/public/Exclusive.svg" alt="logo" />
        </div>

        <ul className="flex items-center justify-between gap-6">
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
