

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
