

import { Logo, Solutions, Mask} from "../components";
import Link from "next/link";
import Footer from "./footer/page";
import Portfolio from "./portfolio/page";
import AboutUs from "./about-us/page";
import TextIncial from "./text/page";
import { TextGenerateEffectDemo } from "@/components/home/Text";

export default function Home() {

  return (
      <div className="home">
         <video autoPlay loop muted className="video">
           <source src="/GOBMasterplan2.mp4" type="video/mp4" />
         </video>
        <div className="overlay"></div>
        <div className="content">
          <Logo/>
        </div>
        <Mask/>
        {/* <TextGenerateEffectDemo/> */}
        <TextIncial/>
        <div>
          {/* <Solutions/> */}
          {/* <Portfolio/> */}
          {/* <AboutUs/> */}
        </div>
        {/* <Footer/> */}
      </div>
      
  );
}
