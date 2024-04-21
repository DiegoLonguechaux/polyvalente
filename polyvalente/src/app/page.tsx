import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import EvenementPro from "./components/evenement-pro";
import Link from "next/link";

export default function Home() {
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

      <div className="pt-4">

        <div className="flex flex-col gap-4 px-4">
          <div>
            <p className="uppercase text-secondary font-semibold">Présentation</p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="flex justify-center items-center sm:w-full">
              <Image
                className="relative"
                src="/team.jpg"
                alt="image équipe"
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col justify-between">
                <p className="text-white text-justify text-sm">Bienvenue sur le site de La PolyValente, une association fondée sur la passion du partage culturel et de l'engagement solidaire. Composée d'anciens collègues désireux d'explorer et d'intéroger le monde qui les entoure, notre initiative vise à nous réunir autour d'événements culturels variés. En alliant divertissement et soutien à une noble cause, nous mettons en œuvre des soirées ludiques, des conférences artistiques et des rencontres thématiques, le tout dans une ambiance conviviale et bienveillante. Notre objectif est double : favoriser les échanges intellectuels et amicaux tout en contribuant à la lutte contre le cancer via des dons à l'Institut Curie.</p>
                <Link href="/a-propos"><button className="uppercase bg-secondary rounded-full text-sm text-primary font-semibold mt-4 p-2 w-full items-center sm:w-48">En savoir plus</button></Link>
              
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <Image
            className="relative"
            src="/ornement.png"
            alt="ornement"
            width={100}
            height={37}
          />
        </div>

        <EvenementPro></EvenementPro>

        <div className="flex flex-col pt-10 gap-4">
          <div className="px-4">
            <p className="uppercase text-secondary font-semibold">à venir</p>
          </div>
            <div className="flex justify-center items-end gap-2 relative">
              <Image
                className="relative"
                src="/logo-fond-bleu.jpg"
                alt="image équipe"
                width={500}
                height={37}
              />
              <div className="text-white gap-2 absolute top-0 left-0 m-2">
                <p className="uppercase">titre de l'évènement</p>
                <p>DD/MM/YYYY</p>
              </div>
            </div>
        </div>

      </div>
      
      <Footer></Footer>
    </main>
  );
}
