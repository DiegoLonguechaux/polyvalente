import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return (
        <div className="flex flex-col justify-center items-centerw-full p-4">
            <div className="flex justify-center items-center m-6">
                <Image
                    className="relative"
                    src="/ornement.png"
                    alt="ornement"
                    width={100}
                    height={37}
                />
            </div>
            <div className="flex justify-between sm:px-6 lg:px-8">
                <div>
                    <h3 className="uppercase text-secondary text-sm font-bold">Nous contacter</h3>
                    <div className="ml-4">
                        <div className='flex items-center gap-3'>
                            <FontAwesomeIcon icon={faEnvelope} className="text-lg text-secondary" style={{ height: '18px' }} />
                            <p className='text-secondary'>lapolyvalente@lapolyvalente.onmicrosoft.com</p>
                        </div>
                        <div className='flex items-center gap-3'>            
                            <FontAwesomeIcon icon={faPhone} className="text-lg text-secondary" style={{ height: '18px' }} />
                            <p className='text-secondary'>06 84 92 04 20</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="uppercase text-secondary text-sm font-bold">Nos réseaux sociaux</h3>
                    <div className="ml-4">
                        <a className='flex items-center gap-3' href="https://www.instagram.com/la_polyvalente_limoges/">
                            <FontAwesomeIcon icon={faInstagram} className="text-lg text-secondary" style={{ height: '18px' }} />
                            <p className='text-secondary'>La PolyValente</p>
                        </a>
                        <a className='flex items-center gap-3' href="https://www.facebook.com/lapolyvalente87">
                            <FontAwesomeIcon icon={faFacebook} className="text-lg text-secondary" style={{ height: '18px' }} />
                            <p className='text-secondary'>La PolyValente</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}