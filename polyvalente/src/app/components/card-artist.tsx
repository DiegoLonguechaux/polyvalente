'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import '../globals.css';
import Link from 'next/link';

export default function ArtistCard() {

    return (
        <div className="rounded-md relative">
            <Image
                className="rounded-md"
                src="/team.jpg"
                alt="image équipe"
                width={500}
                height={37}
            />
            <div className="flex flex-col absolute m-2 bottom-0">
                <span className="text-white">dd/mm/yyyy</span>
                <span className="text-white">Ceci est un titre</span>
            </div>
        </div>
    );
}
