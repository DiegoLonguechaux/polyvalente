'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import '../globals.css';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full bg-primary">
            <nav className="">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Conteneur pour le menu en version ordinateur */}
                        <a href="/">
                            <Image
                                src="/lpv-logo.png"
                                alt='Logo LPV'
                                width={120}
                                height={8}
                            />
                        </a>
                        <div className="flex-1 hidden sm:flex items-center justify-center sm:items-stretch sm:justify-end">
                            <div className="hidden sm:block sm:ml-6">
                                <div className="uppercase flex justify-end space-x-4">
                                    <Link href="/" className="text-secondary px-3 py-2 rounded-md text-sm font-medium">Accueil</Link>
                                    <Link href="/evenements" replace className="text-secondary px-3 py-2 rounded-md text-sm font-medium">Évènements</Link>
                                    <Link href="/a-propos" className="text-secondary px-3 py-2 rounded-md text-sm font-medium">À propos</Link>
                                    <Link href="/espace-pro" className="text-secondary px-3 py-2 rounded-md text-sm font-medium">Espace pro</Link>
                                </div>
                            </div>
                        </div>

                        <div className="text-secondary absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                type="button"
                                className="inline-flex items-center justify-center"
                            >
                                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} style={{ height: '24px' }} />
                            </button>
                        </div>
                    </div>
                    {/* menu version mobile */}
                    {isMenuOpen && (
                        <div className="sm:hidden" id="mobile-menu">
                            <div className="flex flex-col items-center justify-center uppercase px-2 pt-2 pb-3 space-y-1">
                                <Link href="/" className="text-secondary block px-3 py-2 rounded-md text-base font-medium">Accueil</Link>
                                <Link href="/evenements" className="text-secondary block px-3 py-2 rounded-md text-base font-medium">Évènements</Link>
                                <Link href="/a-propos" className="text-secondary block px-3 py-2 rounded-md text-base font-medium">À propos</Link>
                                <Link href="/espace-pro" className="text-secondary block px-3 py-2 rounded-md text-base font-medium">Espace pro</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}
