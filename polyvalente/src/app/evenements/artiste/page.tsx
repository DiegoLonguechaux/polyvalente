import Image from "next/image";
import Header from "../../components/header";
import Footer from "@/app/components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Artiste() {
  return (
    <main className="flex min-h-screen flex-col lg:px-24">
      <Header></Header>

      <div className="flex w-full">
        <Image
          className="relative w-full"
          src="/image-accueil.jpg"
          alt="image accueil"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="pt-4 px-4">

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="uppercase text-secondary font-semibold">artiste - dd/mm/yyyy</h3>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="flex justify-center items-center sm:w-full">
              <Image
                className="relative"
                src="/maggy-portrait.jpg"
                alt="artiste portrait"
                width={200}
                height={200}
              />
            </div>
            <p className="text-white text-justify text-sm">Bienvenue sur le site de La PolyValente, une association fondée sur la passion du partage culturel et de l'engagement solidaire. Composée d'anciens collègues désireux d'explorer et d'intéroger le monde qui les entoure, notre initiative vise à nous réunir autour d'événements culturels variés. En alliant divertissement et soutien à une noble cause, nous mettons en œuvre des soirées ludiques, des conférences artistiques et des rencontres thématiques, le tout dans une ambiance conviviale et bienveillante. Notre objectif est double : favoriser les échanges intellectuels et amicaux tout en contribuant à la lutte contre le cancer via des dons à l'Institut Curie.</p>              
          </div>
        </div>
        
        <div className="pt-4 flex flex-col gap-2">
          <a className='flex items-center gap-3' href="http://www.maggybolle.fr/">
            <FontAwesomeIcon icon={faLink} className="text-lg text-secondary" style={{ height: '18px' }} />
            <p className='text-secondary'>www.maggybolle.fr</p>
          </a>
          <a className='flex items-center gap-3' href="https://www.instagram.com/maggybolle_officiel/">
            <FontAwesomeIcon icon={faInstagram} className="text-lg text-secondary" style={{ height: '18px' }} />
            <p className='text-secondary'>Maggy Bolle</p>
          </a>
          <a className='flex items-center gap-3' href="https://www.facebook.com/maggybolle">
            <FontAwesomeIcon icon={faFacebook} className="text-lg text-secondary" style={{ height: '18px' }} />
            <p className='text-secondary'>Maggy Bolle</p>
          </a>
        </div>

        <div className="pt-4">
          <div>
            <h3 className="uppercase text-secondary font-semibold">petit mot de l'artiste</h3>
          </div>
          <p className="text-white text-justify text-sm">Bienvenue sur le site de La PolyValente, une association fondée sur la passion du partage culturel et de l'engagement solidaire. Composée d'anciens collègues désireux d'explorer et d'intéroger le monde qui les entoure, notre initiative vise à nous réunir autour d'événements culturels variés. En alliant divertissement et soutien à une noble cause, nous mettons en œuvre des soirées ludiques, des conférences artistiques et des rencontres thématiques, le tout dans une ambiance conviviale et bienveillante. Notre objectif est double : favoriser les échanges intellectuels et amicaux tout en contribuant à la lutte contre le cancer via des dons à l'Institut Curie.</p>
        </div>

        <div className="pt-4">
          <h3 className="uppercase text-secondary font-semibold">photos</h3>
          <div className="grid grid-cols-3 grid-rows-5 gap-2">
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
            <Image
              className=""
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={37}
            />
          </div>
        </div>

      </div>
      <Footer></Footer>
    </main>
  );
}
