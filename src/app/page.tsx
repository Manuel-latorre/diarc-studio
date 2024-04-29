

import { Logo, Solutions, Mask} from "../components";
import Link from "next/link";
import Footer from "./footer/page";
import Portfolio from "./portfolio/page";
import AboutUs from "./about-us/page";
import TextIncial from "./text/page";
import SolutionsPage from "./solutions/page";

export default function Home() {

  return (
      <div className="home">
         <video autoPlay loop muted className="video">
           <source src="/home.webm" type="video/webm" />
         </video>
        <div className="overlay"></div>
        <div className="content">
          <Logo/>
        </div>
        <p className="lg:text-2xl text-white text-center -translate-y-16">We build, <span className="font-bold">digitally</span></p>
        <Mask/>
        <TextIncial/>
        {/* <div id="maskSolutions"></div> */}
          <SolutionsPage/>
        {/* <div id="maskBottomSolutions"></div> */}

          <Portfolio/>
          <AboutUs/>
        
        <Footer/>
      </div>
      
  );
}
