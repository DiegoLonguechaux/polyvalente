'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import '../globals.css';
import Link from 'next/link';

export default function ProfilBuro({ imageSrc, name, width = 500, height = 370 }) {

    return (
        <div className="flex flex-col justify-center items-center gap-1">
            <Image
                className="rounded-full"
                src={imageSrc}
                alt="profil photo"
                width={width}
                height={height}
            />
            <span className="uppercase text-white text-sm">{name}</span>
        </div>
    );
}
