"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const NavLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Clients",
        path: "#clients",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav className="fixed mx-auto border border-transparent top-0 left-0 right-0 z-10 bg-gradient-to-br from-gray-900 via-transparent to-gray-900 bg-opacity-50">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/">
                    <Image
                        src="/images/logo.png" // Path to your image in the public folder
                        alt="Logo"
                        width={45} // Set the width of your logo image
                        height={60} // Set the height of your logo image
                        className='object-contain'
                    />
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navOpen ? (
                            <button
                                onClick={() => setNavOpen(true)}
                                className='flex items-center px-3 py-2 border-rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5' /></button>
                        ) : (
                            <button
                                onClick={() => setNavOpen(false)}
                                className='flex items-center px-3 py-2 border-rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><XMarkIcon className='h-5 w-5' /></button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navOpen ? <MenuOverlay links={NavLinks} /> : null}
        </nav>
    )
}

export default Nav
