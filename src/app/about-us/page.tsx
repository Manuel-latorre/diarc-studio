import { InfiniteMovingCardsDemo } from "@/components/brands-clients/BrandsClients";
import '../globals.css'

export default function AboutUs() {
    return(
        <div id="aboutus" className="flex flex-col items-center justify-center py-10 section">
            <div className="text-center mb-20">
                <h4 className="text-3xl font-bold mb-4">We are highly skilled professionals from Argentina</h4>
                <p className="text-center font-semibold text-white text-xl">Architects / Artists / Designers / Developers</p>
                <p className="text-9xl my-14 text-center max-md:text-3xl">IMAGEN DE EQUIPO</p>
            </div>
            <InfiniteMovingCardsDemo/>
        </div>
    )
}