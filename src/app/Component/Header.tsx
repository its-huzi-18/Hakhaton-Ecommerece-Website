'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const navBar = [
  { name: 'Home', link: '/' },
  { name: 'Shop', link: '/Shop' },
  { name: 'About', link: '/About' },
  { name: 'Contact', link: '/Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/'; // Check if the current page is the home page

  return (
    <div>
      <nav
        className={`flex h-[100px] ${
          isHomePage ? 'bg-mainColor' : 'bg-white'
        } items-center px-4 md:px-16 justify-between md:justify-end`}
      >
        {/* Mobile Layout: Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex w-[430px] h-[24px] gap-8 font-medium">
          {navBar.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.link} className="hover:text-secondaryColor">
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Layout: Icons */}
        <div className="md:hidden flex gap-6">
          <Link href={'/Account'}>
            <BsPerson className="text-[24px]" />
          </Link>
          <CiSearch className="text-[24px]" />
          <Link href={'/asgaard-sofa'}>
            <IoHeartOutline className="text-[24px]" />
          </Link>
          <Link href="/Cart">
            <IoCartOutline className="text-[24px]" />
          </Link>
        </div>

        {/* Desktop Layout: Icons */}
        <div className="hidden md:flex gap-6">
          <Link href={'/Account'}>
            <BsPerson className="text-[24px]" />
          </Link>
          <CiSearch className="text-[24px]" />
          <Link href={'/asgaard-sofa'}>
            <IoHeartOutline className="text-[24px]" />
          </Link>
          <Link href="/Cart">
            <IoCartOutline className="text-[24px]" />
          </Link>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-mainColor backdrop-blur-md  p-4 z-10 shadow-lg md:hidden">
            <ul className="flex flex-col gap-4 font-medium">
              {navBar.map((navItem, index) => (
                <li key={index}>
                  <Link
                    href={navItem.link}
                    className="hover:text-secondaryColor"
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
