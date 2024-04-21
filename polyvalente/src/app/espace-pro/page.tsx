import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function EspacePro() {
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

        <div className="px-4">
          <h3 className="uppercase text-secondary font-semibold">nos locaux</h3>
          <div className="flex flex-row justify-center items-center gap-3 py-3">
            <Image
              className="rounded-md"
              src="/espace-pro/salle1.jpg"
              alt="photo salle 1"
              width={150}
              height={37}
            />
             <Image
              className="rounded-md"
              src="/espace-pro/salle2.jpg"
              alt="photo salle 2"
              width={150}
              height={37}
            />
          </div>
        </div>

        <div className="flex flex-col pt-4 px-4">
          <h3 className="uppercase text-secondary font-semibold">à propos de la salle</h3>
          <div className="flex flex-col justify-center items-center gap-3 m-3">
            <button className="flex border border-secondary rounded-lg p-1 px-2 justify-between items-center gap-3">
                <span className="text-secondary">Document 1</span>
                <FontAwesomeIcon icon={faDownload} className="text-secondary" style={{ height: '18px' }} />
            </button>
            <button className="flex border border-secondary rounded-lg p-1 px-2 justify-between items-center gap-3">
                <span className="text-secondary">Document 2</span>
                <FontAwesomeIcon icon={faDownload} className="text-secondary" style={{ height: '18px' }} />
            </button>
          </div>
        </div>

        <div className="flex flex-col pt-4 px-4">
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
