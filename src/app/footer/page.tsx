import { colors } from "@/colors/colors"
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import wp from '../../images/wp.png'
import yt from '../../images/youtube.png'

import Image from "next/image"

export default function Footer (){
    return(
        <div id="contact" className={`w-full h-auto py-5`} style={{backgroundColor:colors.fulldarkgrey}} >
            <div className="flex">
                <div className="text-white mt-10 ml-20">
                    <h2 className="text-5xl">Lets Talk</h2>
                </div>
            </div>
            <div className="flex items-center justify-around mt-20">
                <div className="flex items-center gap-5 max-lg:flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="Email" className="text-white">*Email</label>
                        <input className="bg-transparent border-b border-gray-300 lg:w-[500px] max-lg:w-[90%]" type="email" />
                    </div>
                    <button className="px-7 py-2 border border-gray-300 rounded-3xl text-white">Send</button>
                    <button className="px-7 py-2 border border-gray-300 rounded-3xl text-white">Book a call</button>
                </div>
                <div className="px-10 py-16 bg-black rounded-full max-lg:hidden">
                    <p className="text-white uppercase font-semibold">are you an artist? <br />
                        brand real state?<br />
                        do you need a full <br /> experiencie?<br />
                        lets get in touch!
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-around mt-20 text-white max-md:flex-col max-md:gap-8">
                <div>
                    <p>studio@diarc.com</p>
                </div>
                <div>
                    <p>©2023 DIARC Studio.</p>
                </div>
                <div className="flex items-center gap-7">
                    <Image width={40} height={40} src={wp} alt="Whatsapp Icon"/>
                    <Image width={40} height={40} src={instagram} alt="Instagram Icon"/>
                    <Image width={40} height={40} src={linkedin} alt="Linkedin Icon"/>
                    <Image width={40} height={40} src={yt} alt="Youtube Icon"/>
                </div>
            </div>
        </div>
    )
}