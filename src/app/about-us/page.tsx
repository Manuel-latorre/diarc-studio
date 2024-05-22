"use client"

import { InfiniteMovingCardsDemo } from "@/components/brands-clients/BrandsClients";
import '../globals.css'
import Image from "next/image";
import aboutus from '../../images/aboutus.jpg'
import '../globals.css'
import { Mask } from "@/components";
import { useSectionRefs } from "../SectionsRefsContext";

export default function AboutUs() {
    const sectionRefs = useSectionRefs();

    return(
            <div id="aboutus" className="flex flex-col items-center justify-center py-14 section"
            ref={(el) => {
                sectionRefs.current['aboutus'] = el;
              }}
            >
            <div className="w-[100%] h-[100%]">
                <div className="px-5">
                    <p className="text-center font-semibold text-2xl translate-y-20 max-lg:text-xl max-sm:text-xs">We are convinced that a multidisciplinary team is one of the keys to <br className="max-lg:hidden"/> developing successful projects.</p>
                    <p className="text-center font-light text-xl translate-y-28 max-lg:text-lg max-sm:text-xs max-md:translate-y-24">3D Artists <span className="md:px-4">|</span> Architects <span className="md:px-4">|</span> Designers <span className="md:px-4">|</span> Game Developers</p>
                </div>
                <Image className="w-[100%] h-[100%] aboutusImg" src={aboutus} alt="Team image"/>  
                <div >
                    <Mask/>   
                </div>   
            </div>
            <InfiniteMovingCardsDemo/>
        </div>
    )
}