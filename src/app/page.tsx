

import { Navbar, Solutions, Title} from "../components";
import Link from "next/link";
import Footer from "./footer/page";

export default function Home() {

  return (
    
      <div className="home">
        <div className="overlay"></div>
        <video autoPlay loop muted className="video">
          <source src="/GOBMasterplan2.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <Title/>
        </div>
        <Solutions/>
        <Footer/>
      </div>
      
  );
}
