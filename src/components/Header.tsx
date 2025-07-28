"use client";

import navItems from "@/data/navItems";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Slight delay to trigger transition
    if (isOpen) {
      setTimeout(() => setAnimate(true), 0);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <header>
      <nav
        className="flex items-center justify-between pt-6 px-10"
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
            <ul
              ref={dropdownRef}
              className={`absolute right-0 w-48 z-10 mt-2 bg-white border border-gray-300 shadow-md rounded transition-all duration-200 ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        `}
            >
              {navItems.map((item) => (
                <li key={item.title} className="hover:bg-gray-100">
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-black"
                    onClick={() => setIsOpen(false)}
                  >
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
