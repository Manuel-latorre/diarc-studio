import type { Metadata } from "next";
import { Bai_Jamjuree, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components";
import { Providers } from "./Providers";
import { NavMobile } from "@/components/navbar/NavMobile";
import { SectionRefsProvider } from "./SectionsRefsContext";

const inter = Inter({ subsets: ["latin"] });
const baijamjuree = Bai_Jamjuree({subsets: ["latin"], weight: ["700", "600", "500", "400", "300", "200"]})

export const metadata: Metadata = {
  title: "Diarc Studio",
  description: "We build, digitally",
  metadataBase: new URL("https://www.diarc.studio/")
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
