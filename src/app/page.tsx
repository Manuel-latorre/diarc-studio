

import { Logo, Navbar, Solutions, Text} from "../components";
import Link from "next/link";
import Footer from "./footer/page";
import Portfolio from "./portfolio/page";

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
        <Portfolio/>
        {/* <Solutions/> */}
        <Footer/>
      </div>
      
  );
}
