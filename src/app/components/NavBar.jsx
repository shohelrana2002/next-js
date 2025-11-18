"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const linkClasses = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600 transition-colors duration-200";

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex justify-center gap-x-6 font-medium">
          <li>
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className={linkClasses("/about")}>
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className={linkClasses("/services")}>
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
