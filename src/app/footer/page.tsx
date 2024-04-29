import { colors } from "@/colors/colors"
import InstagramIcon from "@/components/icons/InstagramIcon"
import LinkedinIcon from "@/components/icons/LinkedinIcon"
import WhatsappIcon from "@/components/icons/WhatsappIcon"
import YoutubeIcon from "@/components/icons/YoutubeIcon"
import '../globals.css'
import bgMedia from '../../images/bgSocialMedia.svg'

import Image from "next/image"
import Link from "next/link"

export default function Footer (){
    return(
        <div id="contact" className="pt-10 pb-4 bg-black">
            <div className="flex items-center justify-evenly max-xl:flex-wrap">
                <div>
                    <p className="text-6xl font-semibold uppercase">let´s</p>
                    <p className="text-6xl font-semibold uppercase translate-x-24">create</p>
                    <p className="text-6xl font-semibold uppercase -translate-x-14">together</p>
                    <div className="mt-12 flex flex-col gap-4">
                        <input type="text" placeholder="Get in touch" className="border-b-1 bg-black border-b-zinc-600 w-[400px] border-l-0 border-r-0 border-t-0"/>
                        <p className="ml-12">studio@diarc.ar</p>
                        <p className="ml-12">+ 54 9 11 7363 2924</p>
                        <p className="ml-12">877 Luis Maria Campos Avenue, Buenos Aires, Argentina</p>
                        <div className="flex items-center gap-4 ml-20">
                            <p className="font-semibold">Find us on</p>
                            <div className="bgSocialMedia">
                                <Link href={"https://www.instagram.com/diarc.studio/"} target="_blank">
                                    <InstagramIcon/>
                                </Link>
                                <Link href={"https://www.linkedin.com/company/diarcstudio"} target="_blank">
                                    <LinkedinIcon/>
                                </Link>
                                <Link href={"https://api.whatsapp.com/send/?phone=5491173632924&text&type=phone_number&app_absent=0"} target="_blank">
                                    <WhatsappIcon/>
                                </Link>
                                <Link href={"https://www.youtube.com/channel/UCS679OEsKuiY9I_aFna9hBA"} target="_blank">
                                    <YoutubeIcon/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgContact">
                    <p className="text-center font-semibold text-2xl">
                        ARE YOU READY <br />
                        TO GET STARTED?
                    </p>

                    <p className="text-center font-extralight text-lg">
                        Learn more about us and how we <br />
                        can help you
                    </p>
                    
                        <Link className="bgBookACall" href={"https://calendly.com/arielisaack/diarcstudio?month=2023-10"} target="_blank">
                            {/* <p className="text-zinc-800 font-semibold text-2xl">Book a call</p> */}
                        </Link>
                    
                </div>

            </div>
            <div className="mt-10">
                <p className="ml-10 text-sm text-zinc-500 translate-y-6">©2024 DIARC Studio</p>
                <p className="lg:text-xl text-white text-center">We build, <span className="font-bold">digitally</span></p>
                
            </div>
        </div>
    )
}