import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import Link from "next/link";

function NavItem({ location, label }) {
  return (
    <li className="mx-3 my-1">
      <Link href={location} className="hover:text-gray-500">
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
    <div className="print:hidden bg-gray-500 text-gray-50 text-xl font-light py-1">
      <nav className="">
        {/* wide nav - row */}
        <div className="hidden sm:flex justify-around w-full md:items-center">
          <ul className="flex flex-wrap justify-around">
            <NavItem location="/" label="Home" />
            <NavItem location="/services" label="Services" />
            <NavItem location="/portfolio" label="Portfolio" />
            <NavItem location="/testimonials" label="Testimonials" />
            <NavItem location="/about" label="About" />
            <NavItem location="/contact" label="Contact" />
          </ul>
        </div>

        {/* mobile nav - column */}
        <div className="sm:hidden">
          <ul>
            <li className="flex justify-center items-center">
              {isOpen ? (
                <ul
                  ref={mobileRef}
                  className="flex flex-col text-center"
                  onClick={() => setOpen(false)}
                >
                  <NavItem location="/" label="Home" />
                  <NavItem location="/services" label="Services" />
                  <NavItem location="/portfolio" label="Portfolio" />
                  <NavItem location="/testimonials" label="Testimonials" />
                  <NavItem location="/about" label="About" />
                  <NavItem location="/contact" label="Contact" />
                </ul>
              ) : (
                <button onClick={() => setOpen(true)} className="mx-auto">
                  <svg className="w-7 h-7 my-1 mx-auto fill-current text-gray-50">
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
