"use client";
import React from "react";
import { useState } from 'react';
import Link from "next/link";
import CategoriesDropdown from "./CategoriesDropdown";

const NavBar: React.FC = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li
            onMouseEnter={toggleCategories}
            onMouseLeave={toggleCategories}
            className="relative"
          >
            <a className="hover:text-gray-300 cursor-pointer">Categories</a>
            {isCategoriesOpen && <CategoriesDropdown />}
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-300">
              Cart
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
        <Link href="/" className="text-2xl font-semibold">
          PixelPlay
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
