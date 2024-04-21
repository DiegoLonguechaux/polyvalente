import Image from "next/image";
import Header from "../components/header";
import EvenementPro from "../components/evenement-pro";
import ArtistCard from "../components/card-artist";
import Footer from "../components/footer";
import Link from "next/link";

export default function Evenements() {
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

        <EvenementPro></EvenementPro>

        <div className="flex flex-col pt-10 gap-4 px-4">
          <div className="flex justify-between items-center">
            <h3 className="uppercase text-secondary font-semibold">archives</h3>
            
            <form className="flex items-center justify-center">
              <select id="year" className="bg-primary border border-secondary text-sm text-secondary rounded-lg p-1">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </form>

          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <Link href="/evenements/artiste"><ArtistCard></ArtistCard></Link>
            <Link href="/evenements/artiste"><ArtistCard></ArtistCard></Link>
            <Link href="/evenements/artiste"><ArtistCard></ArtistCard></Link>
            <Link href="/evenements/artiste"><ArtistCard></ArtistCard></Link>
          </div>
        </div>

      </div>

      <Footer></Footer>
   
    </main>
  );
}
