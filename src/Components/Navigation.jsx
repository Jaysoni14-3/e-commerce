import { useState } from "react";
import { useEffect } from "react";

import { LuSun, LuMoon } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    linkName: "Home",
    linkHref: "/",
  },
  {
    linkName: "Cart",
    linkHref: "/cart",
  },
];

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="navigation px-2 sm:px-4 md:px-8 lg:px-16 py-2 bg-white dark:bg-neutral-700 shadow-md flex items-center justify-between">
      <div className="logo">
        <Link to="/">
          <strong className="text-black dark:text-white">Custom buddy</strong>
        </Link>
      </div>

      <nav className="navlinks flex items-center text-black dark:text-white gap-4">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`list-none px-2 py-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 ${
              location.pathname === link.linkHref
                ? "text-yellow-900 bg-gradient-to-r from-[#AFF1DA] from-10%  to-[#F9EA8F]"
                : "text-neutral-700  dark:text-neutral-300 "
            }`}
          >
            <Link to={link.linkHref}>{link.linkName}</Link>
          </li>
        ))}
      </nav>

      <div className="toggle-theme">
        <button
          className="p-3 bg-neutral-200 rounded-full"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <LuSun size={20} strokeWidth={1} />
          ) : (
            <LuMoon size={20} strokeWidth={1} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navigation;
