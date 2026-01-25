'use client';

import navItems from '@/data/navItems';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setAnimate(true));
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
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="relative z-50 bg-white">
      <nav
        aria-label="Main Navigation"
        className="h-19 px-6 md:px-10 grid grid-cols-[auto_1fr_auto] items-center py-2"
      >
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="AI Safety Asia Logo"
            width={130}
            height={40}
            priority
          />
        </Link>

        {/* Center navigation */}
        <ul className="hidden md:flex justify-center gap-x-10 font-semibold">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="hover:text-oceanGreen transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTA + Mobile menu */}
        <div className="flex items-center gap-4 justify-end">
          <Link
            href="https://www.linkedin.com/company/ai-safety-asia/"
            target="_blank"
            className="hidden md:inline-flex items-center rounded-md border border-oceanGreen px-4 py-2 text-sm text-oceanGreen transition
             hover:bg-oceanGreen hover:text-white"
          >
            Get Involved
          </Link>

          {/* Mobile menu */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              <GiHamburgerMenu size={28} />
            </button>

            {isOpen && (
              <ul
                ref={dropdownRef}
                className={`absolute right-0 mt-3 w-48 rounded-md bg-white border shadow-lg transition-all duration-200 ease-out
                  ${
                    animate
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-2'
                  }
                `}
              >
                {navItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-sm hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}

                <li className="border-t">
                  <Link
                    href="/get-involved"
                    className="block px-4 py-3 text-sm font-semibold text-oceanGreen"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Involved
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      <div className="mt-6 h-px bg-gray-200 shadow-sm" />
    </header>
  );
};

export default Header;
