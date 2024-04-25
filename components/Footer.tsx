import Link from 'next/link';
import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

function Footer() {
    return (
        <footer className="py-10 lg:py-20 container">
            <hr className="mb-12 h-px border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
            <div className="flex gap-8 flex-col md:flex-row md:justify-between">
                <div className="flex gap-6 flex-col md:w-4/12">
                    <h2 className="text-2xl text-primary font-bold">
                        La data verte
                    </h2>
                    <p className="text-md max-w-lg leading-relaxed tracking-tight">
                        Projet personnel, développé par <a href="https://github.com/adangleterre">Antoine Dangleterre</a> et <a href="https://github.com/pchatard">Pierre Chatard</a>. Données fournies par l&apos;API <a href="https://api-sports.io/">api-sports</a>
                    </p>
                    <div className="flex flex-row gap-6 items-center">
                        <Link href="#"><BsTwitterX size={24} className='text-slate-900 hover:text-green-700 transition duration-300'/></Link>
                        <Link href="#"><BsFacebook size={24} className='text-slate-900 hover:text-green-700 transition duration-300'/></Link>
                        <Link href="#"><BsEnvelope size={28} className='text-slate-900 hover:text-green-700 transition duration-300'/></Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:w-7/12">
                    <div className='font-bold'>Joueurs à suivre</div>
                    <div className='flex flex-row flex-wrap gap-4 justify-between text-muted-foreground text-sm leading-relaxed'>
                        <div className="flex flex-col w-full sm:w-auto">
                            <p>Loic perrin</p>
                            <p>Moustapha Bayal Sall</p>
                        </div>
                        <div className="flex flex-col w-full sm:w-auto">
                            <p>Christophe Landrin</p>
                            <p>Ivan Curkovic</p>
                        </div>
                        <div className="flex flex-col w-full sm:w-auto">
                            <p>Robert Herbin</p>
                            <p>Stephane Ruffier</p>
                        </div>
                        <div className="flex flex-col w-full sm:w-auto">
                            <p>Robert Herbin</p>
                            <p>Dominique Rocheteau</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer