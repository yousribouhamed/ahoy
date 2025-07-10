"use client";

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function FlowbiteNavbar() {
  return (
    <Navbar fluid rounded className="bg-black border-gray-800 shadow-lg">
    <NavbarBrand href="#">
      <img src="./img/Ahoy-logo.png" className="mr-3 h-6 sm:h-9" alt="Ahoy Logo" />
  
    </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get started</Button>
        <NavbarToggle className="text-white hover:bg-gray-800" />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active className="text-blue-400">
         
        </NavbarLink>
        <NavbarLink href="#about" className="text-gray-300 hover:text-white">About</NavbarLink>
        <NavbarLink href="#services" className="text-gray-300 hover:text-white">Services</NavbarLink>
        <NavbarLink href="#pricing" className="text-gray-300 hover:text-white">Pricing</NavbarLink>
        <NavbarLink href="#contact" className="text-gray-300 hover:text-white">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
