import type { Metadata } from "next";
import { Bai_Jamjuree, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components";
import { Providers } from "./Providers";
import { NavMobile } from "@/components/navbar/NavMobile";
import { SectionRefsProvider } from "./SectionsRefsContext";

const baijamjuree = Bai_Jamjuree({subsets: ["latin"], weight: ["700", "600", "500", "400", "300", "200"]})

export const metadata: Metadata = {
  title: "Diarc Studio",
  description: "We build, digitally",
  metadataBase: new URL("https://www.diarc.studio/"),
  keywords: [
    "Unreal", "Unreal Engine", "Unreal Engine Developer", "Roblox", "Roblox Developer", "High quality", "High quality 3D", "Unity", 
    "Unity 3D", "3D", "Metaverse", "Cost-effective", "3D Environment", "VR", 
    "Virtual Reality", "Metaverse Developer", "Metaverse Builder", "Virtual World", 
    "Virtual Architecture", "Unreal Engine Production", "Gaming Experience", 
    "Gamified Experience", "Gamified Learning", "3D Experience", "VR Architecture", 
    "Level Design", "Virtual Reality Environment", "3D Projection", 
    "Real Estate Unreal Engine", "Real Estate interactive experience", 
    "Real Estate interactive render", "Real Time Render", "Real Time Rendering", 
    "Real Estate solution", "Real Estate interactive solution", "Outsourcing", 
    "Personalized", "3D Art", "Immersive", "Immersive experience", "Environment", 
    "Roblox Studio", "Game Developer", "Game Development", "AR", "XR", 
    "Augmented Reality", "Extended Reality", "Spatial Computing", "Entertainment", 
    "Mixed Reality", "Fornite Developer", "Game Design", "Production", "VR Developer", 
    "Interactive Experiences", "Virtual Experience", "Videogame", "Videogame Programmer", 
    "Gamification", "Creating Game", "Indie Game", "Indie Game 3D", "Game Engine", 
    "Interactive Art", "CGI", "VFX", "VisionPro", "Quest", "Digital product agency", 
    "WebGL videogames", "Digital experience", "Character", "Web", "mobile", "console", 
    "desktop", "Indie", "Unity Programmer", "XR Production", "Extended Reality Production", 
    "Studio", "personalized digital experiences", "custom 3D art", "personalized 3D development", 
    "outsourcing 3D services", "immersive experiences", "virtual reality services", 
    "augmented reality solutions", "metaverse development", "metaverse solutions", 
    "gaming development", "high-quality 3D art", "game design outsourcing", "virtual worlds", 
    "high-quality digital art", "3D art development", "interactive experiences", 
    "immersive gaming", "3D development outsourcing",
    "Immersive Experiences", "Interactive 3D", "Game Programming", "3D Animation", 
    "Interactive Design", "Real-Time 3D", "Virtual Reality Development", "AR Development", 
    "VR Content Creation", "Augmented Reality Development", "Mixed Reality Developer", 
    "3D Modeling", "Game Art", "Concept Art", "Digital Art", "3D Animation Studio", "Visual Effects", 
    "Tech Solutions", "Digital Innovation", "Creative Agency", "Interactive Media", 
    "Technology Solutions", "Digital Transformation", "Custom VR Solutions", 
    "Interactive Storytelling", "Virtual Tours", "Online Experiences", "Digital Showcases", 
    "XR Developer", "Spatial Design", "Extended Reality Solutions", "Spatial Computing Solutions", 
    "E-Learning", "Interactive Learning", "VR Training", "Gamified Education", "Online Training Solutions", 
    "Virtual Real Estate", "3D Property Tours", "Architectural Visualization", "Real Estate Marketing", 
    "Digital Real Estate Solutions", "Game Production", "Indie Game Studio", "Interactive Entertainment", 
    "Virtual Worlds", "Gaming Solutions"
  ].join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en" className="dark">
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta property="og:image" content="https://res.cloudinary.com/drsrva2kp/image/upload/v1715900472/1_rxi49r.png" />
      <body className={baijamjuree.className}>
        <Providers>
        <SectionRefsProvider>
          <Nav/>
          <NavMobile/>
          {children}
        </SectionRefsProvider>
        </Providers>
      </body>
    </html>
  );
}
