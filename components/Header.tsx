"use client"

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from "react-icons/hi";


function Header() {
    const [mobileMenu, setmobileMenu] = useState(false);

    return (
        <header>
            <div className="flex items-center mx-auto py-6 justify-between font-bold">
                <div className="w-9/12 text-2xl text-primary"><Link href="/">La data verte</Link></div>
                <nav className="flex justify-end w-3/12">
                    <ul className="hidden md:flex md:items-center sm:gap-4">
                        <li className="hover:text-green-700 transition duration-300">
                            <a href="#">Joueurs</a>
                        </li>
                        <li className="hover:text-green-700 transition duration-300">
                            <Link href="/standing">Classement</Link>
                        </li>
                        <li className="hover:text-green-700 transition duration-300">
                            <a href="#">Matchs</a>
                        </li>
                    </ul>

                    <button className="md:hidden" onClick={() => setmobileMenu(!mobileMenu)}>
                        <HiMenu className='w-6 h-6' />
                    </button>
                </nav>
            </div>

            {mobileMenu && (
                <div className="md:hidden absolute top-16 right-0 bg-white shadow-md w-full">
                    <ul className="flex flex-col items-center p-4 gap-3">
                        <li className="hover:text-green-700">
                            <a href="#">Joueurs</a>
                        </li>
                        <li className="hover:text-green-700">
                            <Link href="/standing">Classement</Link>
                        </li>
                        <li className="hover:text-green-700">
                            <a href="#">Statistiques</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;