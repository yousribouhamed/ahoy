"use client";

import React, { useState } from "react";

export default function EnhancedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Brand */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Ahoy-logo.png" className="h-8" alt="AHOY Logo" />
        </a>

        {/* Mobile menu button and CTA */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex justify-center">
            <button className="font-semibold font-ghapter px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
              Get Started
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="/"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse rounded md:bg-transparent transition-all duration-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse rounded transition-all duration-300 md:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse rounded transition-all duration-300 md:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li className="relative group">
              <div
                className="block py-2 px-3 md:p-0 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse rounded transition-all duration-300 md:hover:bg-transparent cursor-pointer"
                onMouseEnter={() => {}}
              >
                Ecosystem
              </div>
              {/* Hover Dropdown */}
              <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-black/90 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl divide-y divide-white/5">
                  <div className="p-3">
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#partners">
                      <p className="font-semibold text-white">TrouveLabs</p>                  
                    </a>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#developers">
                      <p className="font-semibold text-white">EpicMetry</p>
                    </a>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#marketplace">
                      <p className="font-semibold text-white">Dulters</p>
                    </a>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#developers">
                      <p className="font-semibold text-white">Center Of Excellence</p>
                    </a><a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#developers">
                      <p className="font-semibold text-white">Bellman Media</p>
                    </a><a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#developers">
                      <p className="font-semibold text-white">EpicMetry</p>
                    </a><a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#developers">
                      <p className="font-semibold text-white">GotsDone</p>
                    </a><a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#developers">
                      <p className="font-semibold text-white">Flatgigs</p>
                    </a>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#marketplace">
                      <p className="font-semibold text-white">Actual VC</p>
                    </a>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#marketplace">
                      <p className="font-semibold text-white">Consolidid</p>
                    </a>
                    
                  </div>
                
                </div>
              </div>
            </li>
            <li className="relative group">
              <div
                className="block py-2 px-3 md:p-0 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse rounded transition-all duration-300 md:hover:bg-transparent cursor-pointer"
                onMouseEnter={() => {}}
              >
                Community
              </div>
              {/* Hover Dropdown */}
              <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-black/90 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl divide-y divide-white/5">
                  <div className="p-3">
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#24six9">
                      <p className="font-semibold text-white">24six9</p>                  
                    </a>
                    <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#sourcehive">
                      <p className="font-semibold text-white">sourcehive</p>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse rounded transition-all duration-300 md:hover:bg-transparent"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#news"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse rounded transition-all duration-300 md:hover:bg-transparent"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 px-3 md:p-0 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse rounded transition-all duration-300 md:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
