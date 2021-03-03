import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import Link from 'next/link'

function NavItem({ location, label }) {
  return (
    <li className="ml-5">
      <Link
        href={location}
        className="hover:text-gray-50 whitespace-nowrap"
      >
        {label}
      </Link>
    </li>
  );
}
function Nav() {
  const [isOpen, setOpen] = useState(false);
  const mobileRef = useRef();
  useOnClickOutside(mobileRef, () => setOpen(false));
  return (
    <div className="sticky top-0 z-10 print:hidden">
      <nav className="">
        {/* wide nav - row */}
        <div className="hidden sm:flex justify-evenly md:items-center">

            <ul className="flex justify-between flex-wrap">
              <NavItem location="/" label="Home" />
              <NavItem location="/plants" label="Plants" />
              <NavItem location="/botany" label="Botany" />
              <NavItem location="/horticulture" label="Horticulture" />
              <NavItem location="/taxonomy" label="Taxonomy" />
              <NavItem location="/about" label="About" />
            </ul>
          </div>

        {/* mobile nav - column */}
        <div className="sm:hidden">
          <ul>
            <li className="flex">
              {isOpen ? (
                <ul
                  ref={mobileRef}
                  className="flex flex-col text-right"
                  onClick={() => setOpen(false)}
                >
              <NavItem location="/" label="Home" />
              <NavItem location="/plants" label="Plants" />
              <NavItem location="/botany" label="Botany" />
              <NavItem location="/horticulture" label="Horticulture" />
              <NavItem location="/taxonomy" label="Taxonomy" />
              <NavItem location="/about" label="About" />
                </ul>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  className="mx-auto"
                >
                  <svg className="w-5 h-5 my-1 mx-auto fill-current text-indigo-500">
                    <use xlinkHref="/assets/icons/menu.svg#icon-menu" />
                  </svg>
                </button>
              )}

            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
