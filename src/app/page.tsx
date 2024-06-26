

import { Logo, Solutions, Mask} from "../components";
import Link from "next/link";
import Footer from "./footer/page";
import Portfolio from "./portfolio/page";
import AboutUs from "./about-us/page";
import TextIncial from "./text/page";
import SolutionsPage from "./solutions/page";
import WeBuildDigitally from "@/components/ui/WeBuildDigitally";
import HomePage from "./home/page";

export default function Home() {

  return (
      <div className="home">
         <video autoPlay loop muted className="video">
           <source src="/home.webm" type="video/webm" />
         </video>
        <div className="overlay"></div>
        <div className="content">
          <HomePage/>
        </div>
        <p className="lg:text-2xl text-white text-center -translate-y-16">We build, <span className="font-bold">digitally</span></p>
        <div className="-translate-y-8 max-lg:-translate-y-4">
          <Mask/>
        </div>
        <TextIncial/>
        <div id="maskSolutions"></div>
          <SolutionsPage/>
        <div id="maskBottomSolutions"></div>
          <div className="mt-20">
            <Portfolio/>
          </div>
          <AboutUs/>
        
        <Footer/>
      </div>
      
  );
}
