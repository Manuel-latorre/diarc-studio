"use client";


import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div id="initialText" className="w-full flex items-center justify-center">
        <div style={{lineHeight:1.5}} className="max-md:-mt-32 dark:text-white text-black text-2xl tracking-wide lg:w-[80%] max-lg:px-10 xl:w-[70%] mx-auto text-center md:text-3xl ">
          {renderWords()}
        </div>
      </div>
        <p className="text-center text-2xl transla-y-[10%]">We build, <span className="font-bold">digitally</span></p>
    </div>
  );
};
