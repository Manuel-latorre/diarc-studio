"use client";

import { useState } from 'react';
import style from './Solutions.module.css';
import { motion } from 'framer-motion';

export const Solutions = () => {
  const [button3dClicked, setButton3dClicked] = useState(false);
  const [buttonDevClicked, setButtonDevClicked] = useState(false);
  const [showText3d, setShowText3d] = useState(false);
  const [showTextDev, setShowTextDev] = useState(false);
  const [textService3d, setTextService3d] = useState(true);
  const [textServiceDev, setTextServiceDev] = useState(true);



  const handleClick3d = () => {
    setButton3dClicked(true);
    setButtonDevClicked(false);
    setShowText3d(true);
    setShowTextDev(false)
    setTextService3d(false)
  };

  const handleClickDev = () => {
    setButtonDevClicked(true);
    setButton3dClicked(false);
    setShowText3d(false);
    setShowTextDev(true);
    setTextServiceDev(true)
    setTextServiceDev(false)
  };

  return (
    <div className={style.solutions} id="solutions">

      <video autoPlay loop muted className={style.solutionsVideo}>
        <source src="/GOBMadreCiudades1.mp4" type="video/mp4" />
      </video>
      <div style={{ clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 60% 100%)", backgroundColor:"black", width:"100%", height:"100%", position:"absolute", top:"100%"}}></div>
      <div className={style.zSolutions}>
        <div className="flex flex-col items-end p-2">
          <div className="mr-24">
            <div className="text-center mb-10">
            <motion.button
                onClick={handleClick3d}
                style={{zIndex:10}}
                initial={{ opacity: 1, x: 0, y: 0 }} // Estado inicial
                animate={{
                  opacity: 1,
                  x: button3dClicked ? "-55vw" : 0, // Mover hacia la izquierda de la pantalla
                  y: button3dClicked ? "0vh" : 0,
                }} // Estado al hacer clic
                transition={{ duration: 0.5 }} // Duración de la transición
                // onAnimationComplete={() => setShowText(true)} // Mostrar el texto una vez que la animación haya completado
              >
                <h3
                  className={`text-white uppercase mb-5 font-semibold text-3xl z-50`}
                >
                  3d art outsourcing
                </h3>
              </motion.button>
              {showText3d && (
                <p className="text-gray-400 uppercase text-3xl">Texto acerca del servicio <br />
                Texto acerca del servicio <br />
                Texto acerca del servicio <br />
                Texto acerca del servicio <br />
                </p>
              ) 
            }
            {
              textService3d && (
                <div>
                  <p className="text-gray-400 uppercase text-3xl">environments</p>
                  <p className="text-gray-400 uppercase text-3xl">characters</p>
                  <p className="text-gray-400 uppercase text-3xl">assets and drops</p>
                </div>
              )
            }
            </div>
            <div className="text-center">
            <motion.button
                onClick={handleClickDev}
                style={{zIndex:10, top:50}}
                initial={{ opacity: 1, x: 0, y: 0 }} // Estado inicial
                animate={{
                  opacity: 1,
                  x: buttonDevClicked ? "-55vw" : 0, // Mover hacia la izquierda de la pantalla
                  y: buttonDevClicked ? "-20vh" : 0,
                }} // Estado al hacer clic
                transition={{ duration: 0.5 }} // Duración de la transición
              >
                <h3
                  className={`text-white uppercase mb-5 font-semibold text-3xl z-50`}
                >
                  game dev. outsourcing
                </h3>
                
              </motion.button>
              {showTextDev && (
                <p className="text-gray-400 uppercase text-3xl">Texto acerca del servicio <br />
                Texto acerca del servicio <br />
                Texto acerca del servicio <br />
                Texto acerca del servicio <br />
                </p>
              ) 
            }
              {
                textServiceDev && (
                  <div>
                    <p className="text-gray-400 uppercase text-3xl">unreal engine</p>
                    <p className="text-gray-400 uppercase text-3xl">unity</p>
                    <p className="text-gray-400 uppercase text-3xl">roblox studio</p>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
