import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function TextIncial (){  
  
  const words = `Based in Buenos Aires, we offer personalized services to bring
  worldwide digital experiences to life.
  We offer a solution for outsourcing personalized, high-quality 3D art
  and development for Immersive Experiences, Metaverse, and Gaming.`
  
    return (
      <div className="flex flex-col justify-center lg:w-[75%] mx-auto gap-8 px-5 mb-10 max-lg:w-[95%]">
        <TextGenerateEffect words={words}/>

        <p className="lg:text-xl text-white text-center">We build, <span className="font-bold">digitally</span></p>
      </div>
    );
}