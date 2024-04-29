import { InfiniteMovingCardsDemo } from "@/components/brands-clients/BrandsClients";
import '../globals.css'
import Image from "next/image";
import aboutus from '../../images/aboutus.jpg'
import '../globals.css'

export default function AboutUs() {
    return(
            <div id="aboutus" className="flex flex-col items-center justify-center py-14 section">
            {/* <div className="text-center mb-20">
                <h4 className="text-3xl font-bold mb-4">We are highly skilled professionals from Argentina</h4>
                <p className="text-center font-semibold text-white text-xl">Architects / Artists / Designers / Developers</p>
                <p className="text-9xl my-14 text-center max-md:text-3xl">IMAGEN DE EQUIPO</p>
            </div> */}
            <div className="w-[100%] h-[100%]">
                <div className="px-5">
                    <p className="text-center font-semibold text-2xl translate-y-20 max-lg:text-xl max-sm:text-base max-md:translate-y-14">We are convinced that a multidisciplinary team is one of the keys to developing successful projects.</p>
                    <p className="text-center font-light text-xl translate-y-28 max-lg:text-lg max-sm:text-sm max-md:translate-y-20">3D Artists | Architects | Designers | Game Developers</p>
                </div>
                <Image className="w-[100%] h-[100%] aboutusImg" src={aboutus} alt="Team image"/>         
            </div>
            <InfiniteMovingCardsDemo/>
        </div>
    )
}