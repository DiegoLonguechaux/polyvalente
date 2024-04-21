import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import ProfilBuro from "../components/profil-buro";

export default function Propos() {
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

        <div className="flex justify-center items-center gap-3">
          <a href="#who" className="uppercase text-secondary text-xs">qui sommes-nous</a>
          <a href="#polyburo" className="uppercase text-secondary text-xs">polyburo</a>
          <a href="#adhesion" className="uppercase text-secondary text-xs">adhésion</a>
          <a href="#contact" className="uppercase text-secondary text-xs">contact</a>
        </div>

        <div className="flex justify-center items-center pt-4 px-4">
          <div className="flex flex-col" id="who">
            <h3 className="text-center uppercase text-secondary font-semibold">qui sommes-nous</h3>
            <Image
              className="relative py-3"
              src="/team.jpg"
              alt="image équipe"
              width={500}
              height={500}
            />
            <p className="text-white text-justify text-sm">Chers amis, amis d'amis, copains et copains de copains, potes et potes de potes... C'est l'histoire d'une bande éclatée d'anciens collègues des centres culturels de Limoges qui ont décidé de se réunir à nouveau et de reprendre du service pour se prouver que 30 ans plus tard, rien n'a changé, ou presque ...</p>
            <p className="text-white text-justify text-sm">C'est l'histoire d'une période post confinements terriblement covidique marquée par le distanciel, l'essentiel et le non essentiel et surtout le chacun chez soi et personne chez les autres, ou presque ...
            C'est enfin l'histoire d'un garage désaffecté, d'une dépendance servant à l'occasion de salle des fêtes ou de banquet qui ne demandait qu'à s'ouvrir et s'embellir pour accueillir des soirées conviviales, du public, des spectacles, des artistes, des stars internationales ou presque...
            C'est ainsi qu'est née « La PolyValente »
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 px-4" id="polyburo">
          <h3 className="uppercase text-secondary font-semibold">polyburo</h3>
          <div className="grid grid-cols-4 grid-rows-3 gap-3 pt-4">
            <ProfilBuro imageSrc="" name=""/>
            <ProfilBuro imageSrc="/polyburo/manu.jpg" name="Manu"/>
            <ProfilBuro imageSrc="/polyburo/daniel.jpg" name="Daniel"/>
            <ProfilBuro imageSrc="" name=""/>
            <ProfilBuro imageSrc="/polyburo/christian.jpg" name="Christian"/>
            <ProfilBuro imageSrc="/polyburo/veronique.jpg" name="Véronique"/>
            <ProfilBuro imageSrc="/polyburo/philippe.jpg" name="Philippe"/>
            <ProfilBuro imageSrc="/polyburo/sophie.jpg" name="Sophie"/>
            <ProfilBuro imageSrc="/polyburo/corine.jpg" name="Corine"/>
            <ProfilBuro imageSrc="/polyburo/christophe.jpg" name="Christophe"/>
            <ProfilBuro imageSrc="/polyburo/sylvie.jpg" name="Sylvie"/>
            <ProfilBuro imageSrc="/polyburo/pierre.jpg" name="Pierre"/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 px-4" id="adhesion">
          <h3 className="uppercase text-secondary font-semibold">adhésion</h3>
          <p className="text-white text-justify text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 px-4" id="contact">
          <h3 className="uppercase text-secondary font-semibold">contact</h3>
          <p className="text-white text-center text-sm">Avant d'interroger le monde, peut-être aimeriez vous tout d'abord NOUS interroger ....</p>
          <br />
          <p className="text-white text-center text-sm font-bold">La PolyValente</p>
          <p className="text-white text-center text-sm">1 rue des Papillons 87100 Limoges</p>
          <p className="text-white text-center text-sm">N° de téléphone: 06 84 92 04 20</p>
          <p className="text-white text-center text-sm">Mail: p.longuechaux@gmail.com</p>
          <br />
          <div className="flex justify-center items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.309372636173!2d1.2648293767507996!3d45.84510730794267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f934c2204e6ab9%3A0x5f282410e29b51cf!2s1%20Rue%20des%20Papillons%2C%2087100%20Limoges!5e0!3m2!1sfr!2sfr!4v1713718289703!5m2!1sfr!2sfr" width="350" height="300" loading="lazy"></iframe>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </main>
  );
}
