"use client"


import InstagramIcon from "@/components/icons/InstagramIcon"
import LinkedinIcon from "@/components/icons/LinkedinIcon"
import WhatsappIcon from "@/components/icons/WhatsappIcon"
import YoutubeIcon from "@/components/icons/YoutubeIcon"
import '../globals.css'
import bgMedia from '../../images/bgSocialMedia.svg'

import Image from "next/image"
import Link from "next/link"
import PinIcon from "@/components/icons/PinIcon"
import WpIcon from "@/components/icons/WpIcon"
import EmailIcon from "@/components/icons/EmailIcon"
import { useSectionRefs } from "../SectionsRefsContext"

export default function Footer (){

    const sectionRefs = useSectionRefs();
    return(
        <div id="contact" className="pt-10 pb-4 bg-black"
        ref={(el) => {
            sectionRefs.current['contact'] = el;
          }}
        >
            <div className="flex items-center justify-evenly max-md:flex-col max-md:justify-center max-lg:flex-wrap">
                <div>
                    <p className="text-6xl font-semibold uppercase max-md:px-2 max-md:text-4xl">let´s</p>
                    <p className="text-6xl font-semibold uppercase max-md:px-2 md:translate-x-24 max-md:text-4xl">create</p>
                    <p className="text-6xl font-semibold uppercase max-md:px-2 md:-translate-x-14 max-md:text-4xl">together</p>
                    <div className="mt-12 flex flex-col gap-4 max-md:px-4 max-md:mt-8">
                        <input type="text" placeholder="Get in touch" className="border-b-1 bg-black border-b-zinc-600 md:w-[400px] border-l-0 border-r-0 border-t-0 max-md:w-[280px]"/>
                        <Link className="md:ml-10 max-md:px-2 flex items-center gap-2" href={`mailto:studio@diarc.ar`} title={`Send email to studio@diarc.ar`} target="_blank" rel="noopener noreferrer">
                            <EmailIcon/>
                            <p>studio@diarc.ar</p>
                        </Link>
                        <Link className="md:ml-10 max-md:px-2 flex items-center gap-2" href={"https://api.whatsapp.com/send/?phone=5491173632924&text&type=phone_number&app_absent=0"} target="_blank">
                            <WpIcon/>
                            <p>+ 54 9 11 7363 2924</p>
                        </Link>
                        <Link href={"https://www.google.com/maps?ll=-34.568491,-58.437029&z=16&t=m&hl=es-419&gl=AR&mapclient=embed&q=Av.+Luis+Mar%C3%ADa+Campos+877+Cdad.+Aut%C3%B3noma+de+Buenos+Aires"} className="md:ml-10 max-md:px-2 flex items-center gap-2" target="_blank">
                            <PinIcon/>
                            <p>877 Luis Maria Campos Avenue, Buenos Aires, Argentina</p>
                        </Link>
                        <div className="flex max-lg:items-center gap-4 md:ml-20 max-md:justify-center">
                            <p className="font-semibold lg:text-2xl lg:translate-y-12">Find us on</p>
                            <div className="bgSocialMedia">
                                    <div className="flex items-center lg:translate-y-4 lg:translate-x-2">
                                        <Link href={"https://www.instagram.com/diarc.studio/"} target="_blank">
                                            <InstagramIcon/>
                                        </Link>
                                        <Link href={"https://www.linkedin.com/company/diarcstudio"} target="_blank">
                                            <LinkedinIcon/>
                                        </Link>
                                        {/* <Link href={"https://api.whatsapp.com/send/?phone=5491173632924&text&type=phone_number&app_absent=0"} target="_blank">
                                            <WhatsappIcon/>
                                        </Link> */}
                                        <Link href={"https://www.youtube.com/channel/UCS679OEsKuiY9I_aFna9hBA"} target="_blank">
                                            <YoutubeIcon/>
                                        </Link>
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgContact">
                    <p className="text-center font-semibold text-2xl max-md:text-lg max-md:translate-y-10">
                        ARE YOU READY <br />
                        TO GET STARTED?
                    </p>

                    <p className="text-center font-extralight text-lg max-md:translate-y-8">
                        Learn more about us and how we <br />
                        can help you
                    </p>
                    
                        <Link className="bgBookACall" href={"https://calendly.com/arielisaack/diarcstudio?month=2023-10"} target="_blank">
                            <p className="text-zinc-800 font-semibold text-2xl ml-4">Book a call</p>
                        </Link>
                    
                </div>

            </div>
            <div className="mt-10">
                <p className="lg:text-xl text-white text-center">We build, <span className="font-bold">digitally</span></p>
                <p className="md:ml-10 text-sm text-zinc-500 sm:translate-y-6 max-md:text-center max-md:mt-4">©2024 DIARC Studio</p>
                
            </div>
        </div>
    )
}