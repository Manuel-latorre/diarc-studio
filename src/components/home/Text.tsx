"use client";


import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const words = `
    Based in Buenos Aires,
    we offer personalized services to
    bring worldwide digital
    experiences to life.

    We offer a cost-effective solution
    for outsourcing personalized,
    high quality 3D art for Immersive 
    Experiences, Metaverse and Gaming.
    
    We build, digitally.

`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

// export const Text = () => {
//   return (
//       <div id="initialText" className="text-center flex flex-col gap-10 justify-center bg-black w-full h-[500px]">
//           <div>
//             <p className="text-white font-semibold text-4xl">
//               Based in Buenos Aires,
//               we offer personalized services to <br />
//               bring worldwide digital
//               experiences to life.
//             </p>
//             <p className="text-white font-semibold text-4xl mt-1">
//               We offer a cost-effective solution
//               for outsourcing personalized, <br />
//               high quality 3D art for Immersive <br />
//               Experiences, Metaverse and Gaming.
//             </p>

//             <p className="text-white font-semibold text-4xl mt-4">We build, digitally</p>
//           </div>
//       </div>
//   )
// }
