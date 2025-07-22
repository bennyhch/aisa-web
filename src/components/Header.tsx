"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
  { title: "WHO WE ARE", href: "/who" },
  { title: "WHAT WE DO", href: "/what" },
  { title: "HOW WE WORK", href: "/how" },
  { title: "NEWS & INSIGHTS", href: "/news" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-300">
      <nav
        className="flex items-center justify-between p-6"
        aria-label="Main Navigation"
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AI Safety Asia Logo"
            width={150}
            height={50}
            className="logo"
          />
        </Link>

        <div className="hidden md:block">
          <ul className="flex gap-x-10">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />

          {isOpen && (
            <ul className="absolute right-0 z-10 mt-2 w-48 bg-white shadow-lg">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="block px-4 py-2">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
