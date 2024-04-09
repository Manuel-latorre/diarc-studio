"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Title = () => {
const [title, setTitle] = useState(true)

useEffect(() => {
    const timer = setTimeout(() => {
        setTitle(false);
    }, 10000);

    return () => clearTimeout(timer);
}, [])


  return (
    <div>
        {
            title ? (
                <div className="w-full h-[400px] flex justify-center items-center">
                <div className="p-2 mx-7">
                    <Link href={"/"}>
                    <p className="text-9xl font-bold text-white">DIARC</p>
                    <p className="uppercase text-center tracking-[52px] font-normal text-white text-4xl">
                        studio
                    </p>
                    </Link>
                </div>
                </div>
            ) : 
            <div className="text-center flex flex-col justify-center gap-10">
                <p className="text-white font-semibold text-4xl">
                    Based in Buenos Aires, <br />
                    we offer personalized services to <br />
                    bring worldwide digital <br />
                    experiences to life.
                </p>

                <p className="text-white font-semibold text-4xl">
                    We offer a cost-effective solution <br />
                    for outsourcing personalized, <br />
                    high quality 3D art for Inmersive <br />
                    Experiences, Metaverse an Gaming.
                </p>
            </div>
        }
    </div>
  );
};
