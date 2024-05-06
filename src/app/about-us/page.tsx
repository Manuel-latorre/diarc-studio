import { InfiniteMovingCardsDemo } from "@/components/brands-clients/BrandsClients";
import '../globals.css'
import Image from "next/image";
import aboutus from '../../images/aboutus.jpg'
import '../globals.css'
import { Mask } from "@/components";
import WeBuildDigitally from "@/components/ui/WeBuildDigitally";

export default function AboutUs() {
    return(
            <div id="aboutus" className="flex flex-col items-center justify-center py-14 section">
            <div className="w-[100%] h-[100%]">
                <div className="px-5">
                    <p className="text-center font-semibold text-2xl translate-y-20 max-lg:text-xl max-sm:text-base">We are convinced that a multidisciplinary team is one of the keys to developing successful projects.</p>
                    <p className="text-center font-light text-xl translate-y-28 max-lg:text-lg max-sm:text-sm max-md:translate-y-24">3D Artists <span className="px-4">|</span> Architects <span className="px-4">|</span> Designers <span className="px-4">|</span> Game Developers</p>
                </div>
                <Image className="w-[100%] h-[100%] aboutusImg" src={aboutus} alt="Team image"/>     
                <Mask/>   
                <div className="-translate-y-36">
                    <WeBuildDigitally/>

                </div>
            </div>
            <InfiniteMovingCardsDemo/>
        </div>
    )
}