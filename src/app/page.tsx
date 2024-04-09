

import { Navbar, Solutions, Title} from "../components";
import Link from "next/link";

export default function Home() {

  return (
    
      <div className="home">
        <div className="overlay"></div>
        <video autoPlay loop muted className="video">
          <source src="/GOBMasterplan-02.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <Title/>
        </div>
        <Solutions/>
      </div>
      
  );
}
