'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import '../globals.css';
import Link from 'next/link';

export default function EvenementPro() {

    return (
        <div className="flex flex-col gap-4 px-4">
          <div>
            <p className="uppercase text-secondary font-semibold">Prochain évènement</p>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-end gap-2">
              <Image
                className="relative"
                src="/logo-fond-vert.jpg"
                alt="image équipe"
                width={200}
                height={37}
                />
              <div className="text-white gap-2">
                <p className="uppercase">titre de l'évènement</p>
                <p>DD/MM/YYYY</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <p className="text-white text-justify text-sm">Bienvenue sur le site de La PolyValente, une association fondée sur la passion du partage culturel et de l'engagement solidaire. Composée d'anciens collègues désireux d'explorer et d'intéroger le monde qui les entoure, notre initiative vise à nous réunir autour d'événements culturels variés. En alliant divertissement et soutien à une noble cause, nous mettons en œuvre des soirées ludiques, des conférences artistiques et des rencontres thématiques, le tout dans une ambiance conviviale et bienveillante. Notre objectif est double : favoriser les échanges intellectuels et amicaux tout en contribuant à la lutte contre le cancer via des dons à l'Institut Curie.</p>
              <Link href="/evenements"><button className="uppercase bg-secondary rounded-full text-sm text-primary font-semibold mt-4 p-2 w-full">Voir tous les évènements</button></Link>
            </div>
          </div>
        </div>
    );
}
