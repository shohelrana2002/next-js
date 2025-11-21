"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const nav = (
    <>
      <li>
        <Link
          href="/"
          className={isActive("/") ? "active font-semibold bg-orange-300" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={
            isActive("/about") ? "active font-semibold bg-orange-300" : ""
          }
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className={
            isActive("/services") ? "active font-semibold bg-orange-300" : ""
          }
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/posts"
          className={
            isActive("/contact") ? "active font-semibold bg-orange-300" : ""
          }
        >
          Posts
        </Link>
      </li>
      <li>
        <Link
          href="/meals"
          className={
            isActive("/meals") ? "active font-semibold bg-orange-300" : ""
          }
        >
          Meals
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link href="/" className="cursor-pointer text-2xl font-bold">
          Next Js Cooking
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-4">{nav}</ul>
      </div>

      <div className="navbar-end gap-x-4">
        <Link href="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link href="/register">
          <button className="btn btn-secondary">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
