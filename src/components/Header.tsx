"use client";

import navItems from "@/data/navItems";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-50">
      {/* <header className="bg-oceanGreen"> */}
      <nav
        className="flex items-center justify-between py-6 px-10"
        aria-label="Main Navigation"
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="AI Safety Asia Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        <div className="hidden md:block">
          <ul className="flex gap-x-10 font-bold">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu size={40} />
          </button>

          {isOpen && (
            <ul className="absolute right-0 w-full z-10 mt-2 bg-white shadow-lg">
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
