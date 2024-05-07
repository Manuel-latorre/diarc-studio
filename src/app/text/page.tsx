import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function TextIncial (){  
  
  const words = `Based in Buenos Aires, we offer personalized services to bring
  worldwide digital experiences to life.
  We offer a solution for outsourcing personalized, high-quality 3D art
  and development for Immersive Experiences, Metaverse, and Gaming.`
  
    return (
      <div className="flex flex-col justify-center lg:w-[75%] mx-auto gap-8 px-5 mb-10 max-lg:w-[95%]">
        {/* <p className="text-xl md:text-2xl lg:text-3xl text-white font-normal text-center">
          Based in Buenos Aires, we offer personalized services to bring
          worldwide <br className="max-md:hidden"/> digital experiences to life.
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-normal text-center">
          We offer a solution for outsourcing personalized, high-quality 3D art
          and <br className="max-md:hidden"/>
          development for Immersive Experiences, Metaverse, and Gaming.
        </p> */}
        <TextGenerateEffect words={words}/>

        <p className="lg:text-2xl text-white text-center">We build, <span className="font-bold">digitally</span></p>
      </div>
    );
}