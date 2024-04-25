"use client"

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from "react-icons/hi";


function Header() {
    const [mobileMenu, setmobileMenu] = useState(false);

    return (
        <header className='container'>
            <div className="flex items-center mx-auto py-6 justify-between font-bold">
                <div className="w-9/12 text-2xl text-primary"><Link href="/">La data verte</Link></div>
                <nav className="flex justify-end w-3/12">
                    <ul className="hidden md:flex md:items-center sm:gap-4">
                        <li>
                            <Link href="/players">Joueurs</Link>
                        </li>
                        <li>
                            <Link href="/standing">Classement</Link>
                        </li>
                        <li>
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
                        <li>
                            <a href="#">Joueurs</a>
                        </li>
                        <li>
                            <Link href="/standing">Classement</Link>
                        </li>
                        <li>
                            <a href="#">Statistiques</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;