"use client"

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow} from "@nextui-org/react";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.css';
import '../../app/globals.css'
import Image from "next/image";
import logo from '../../images/logo.png';
import WebIcon from "../icons/WebIcon";
import MobileIcon from "../icons/MobileIcon";
import VrIcon from "../icons/VrIcon";
import ArIcon from "../icons/ArIcon";
import ConsoleIcon from "../icons/ConsoleIcon";
import DesktopIcon from "../icons/DesktopIcon";
import UnrealEngineIcon from "../icons/UnrealEngineIcon";
import MayaIcon from "../icons/MayaIcon";
import RobloxIcon from "../icons/RobloxIcon";
import CinemaIcon from "../icons/CinemaIcon";
import ZBrushIcon from "../icons/ZBrushIcon";
import SubstancePainterIcon from "../icons/SubstancePainterIcon";
import AdobeIcon from "../icons/AdobeIcon";
import UnityIcon from "../icons/UnityIcon";
import BlenderIcon from "../icons/BlenderIcon";
import DsMaxIcon from "../icons/DsMaxIcon";
import ChaosVrIcon from "../icons/ChaosVrIcon";
import SubstanceDesignerIcon from "../icons/SubstanceDesignerIcon";
import NextIcon from "../icons/NextIcon";



async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('https://diarc-backend.vercel.app/projects');
  const data = await response.json();
  return data as Project[]; 
}



export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filterProjects = (platform: string) => {
    setActiveFilter(platform);
    const filteredProjects = projects.filter((project: Project) =>
      project.availableIn.includes(platform)
    );
    setFilteredProjects(filteredProjects); // Actualizar el estado con proyectos filtrados
  };

  const handleOpen = (project:any) => {
    setSelectedProject(project);
    onOpen();
  }

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []);

  type AvailableIn = 'web' | 'mobile' | 'vr' | 'ar' | 'console' | 'desktop';
  
  
  const iconMapping: Record<AvailableIn, JSX.Element> = {
    web: <WebIcon className="fill-white"/>,
    mobile: <MobileIcon className="fill-white"/>,
    vr: <VrIcon className="fill-white"/>,
    ar: <ArIcon className="fill-white"/>,
    console: <ConsoleIcon className="fill-white"/>,
    desktop: <DesktopIcon className="fill-white"/>
  };

  type Technologies = 'unrealengine' | 'maya' | 'roblox' | 'cinema' | 'zbrush' | 'substancePainter' | 'substanceDesigner' | 'adobe' | 'unity' | 'blender' | 'chaosvr' | 'dsmax';
  
const iconTechnologiesMapping: Record<Technologies, JSX.Element> = {
  unrealengine: <UnrealEngineIcon/>,
  maya: <MayaIcon />,
  roblox: <RobloxIcon />,
  cinema: <CinemaIcon />,
  zbrush: <ZBrushIcon />,
  adobe: <AdobeIcon/>,
  unity: <UnityIcon/>,
  blender: <BlenderIcon/>,
  dsmax: <DsMaxIcon/>,
  chaosvr: <ChaosVrIcon/>,
  substancePainter: <SubstancePainterIcon />,
  substanceDesigner: <SubstanceDesignerIcon />
};

const renderIconTechnologies = (technologies: Technologies) => {
  const IconComponent = iconTechnologiesMapping[technologies];
  return IconComponent ? IconComponent : null;
};

const renderIcon = (availableIn: AvailableIn) => {
  const IconComponent = iconMapping[availableIn];
  return IconComponent ? IconComponent : null;
};

const buttonClass = (filter:any) =>
  activeFilter === filter
    ? "p-2 hover:scale-105 transition duration-75"
    : "p-2 hover:scale-105 transition duration-75";

    
    
    const swiperRef = useRef(null);

    const handleNextSlide = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
  
    // const handlePrevSlide = () => {
    //   if (swiperRef.current && swiperRef.current.swiper) {
    //     swiperRef.current.swiper.slidePrev();
    //   }
    // };


    const handleCloseModal = () => {
      onClose()
    };
    
  return (
    <div className="bg-black flex justify-center mt-[10%] h-screen max-sm:hidden">
      <div className="flex flex-col justify-center gap-2 px-10 z-20 items-center mx-auto">
        <button
          onClick={() => filterProjects("web")}
          className={buttonClass("web")}
        >
          <WebIcon className={activeFilter === "web" ? "fill-white" : "fill-zinc-700"} />
          
        </button>
        <button
          onClick={() => filterProjects("mobile")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <MobileIcon className={activeFilter === "mobile" ? "fill-white" : "fill-zinc-700"}/>
        </button>
        <button
          onClick={() => filterProjects("console")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <ConsoleIcon className={activeFilter === "console" ? "fill-white" : "fill-zinc-700"}/>
        </button>
        <button
          onClick={() => filterProjects("desktop")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <DesktopIcon className={activeFilter === "desktop" ? "fill-white" : "fill-zinc-700"}/>
        </button>
        <button
          onClick={() => filterProjects("ar")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <ArIcon className={activeFilter === "ar" ? "fill-white" : "fill-zinc-700"}/>
        </button>
        <button
          onClick={() => filterProjects("vr")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <VrIcon className={activeFilter === "vr" ? "fill-white" : "fill-zinc-700"}/>
        </button>
      </div>
      <div className="max-xl:w-[65%] mx-auto flex xl:w-[75%]">
      <>
      <Swiper
      breakpoints={{
        1536: {
          slidesPerView:4,
          spaceBetween:20
        },
        1280:{
          slidesPerView:3,
          spaceBetween:15,
        },
        1024:{
          slidesPerView:2,
          spaceBetween:10
        },
        768:{
          slidesPerView:1,
          spaceBetween:10
        }
      }}
        grid={{
          rows: 3,
        }}

        modules={[Grid]}
        className="mySwiper flex"
        ref={swiperRef}
      >
        
        {filteredProjects.map((project) => (
          <SwiperSlide key={project._id}  className="cursor-pointer hover:scale-105 transition duration-75">
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="z-10"
            />
            <div className="absolute border-3 border-black top-0 left-0 w-full h-full after:content-[''] after:absolute after:inset-5 after:border-3 after:border-white after:-z-10 z-10 hover:bg-black hover:bg-opacity-50 transition-all">
              <Image
                className="translate-x-8 translate-y-8"
                width={50}
                height={50}
                src={logo}
                alt="Diarc Logo"
              />
              <div className="opacity-0 hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300">
                <h3 className="text-2xl font-semibold text-white w-52 text-center">
                  {project.title}
                </h3>
                <Button
                  key={project._id}
                  className="mt-5"
                  onPress={() => handleOpen(project)}
                >
                  Open
                </Button>
              </div>
              <div>
            </div>
          </div>
        </SwiperSlide>
        
        ))}
        <Modal
          size="full"
          isOpen={isOpen}
          onClose={onClose}
          className=""
        >
            <ModalContent className="bgProyect overflow-y-auto"
             /* onWheel={(event) => {
               
               if (event.deltaY > 0) {
                 handleCloseModal(); 
                }
              }} */
              >
              {(onClose) => (
                <>
                  <ModalBody>
                    <div className="flex w-full h-full items-center justify-center gap-20 max-xl:flex-col">
                      <div className="w-[30%] justify-start max-xl:w-full">
                        {selectedProject && (
                          <div
                            
                            className="relative w-[550px] h-[600px] xl:w-[500px] xl:h-[550px]"
                          >
                            <Image
                              src={selectedProject.image}
                              alt={selectedProject.title}
                              
                              layout="fill"
                              objectFit="cover"
                              className="z-10 w-full h-full"
                            />
                            <div className="absolute border-2 border-black top-0 left-0 w-full h-full after:content-[''] after:absolute after:inset-5 after:border-3 after:border-white after:-z-10 z-10">
                              <Image
                                className="translate-x-8 translate-y-8"
                                width={50}
                                height={50}
                                src={logo}
                                alt="Diarc Logo"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-center gap-4 w-[30%] ml-10 justify-center mx-auto">
                        <p className="font-semibold text-3xl text-center max-2xl:text-2xl">
                          {selectedProject?.title}
                        </p>
                        <p className="text-2xl text-center max-2xl:text-xl">
                          {selectedProject?.description}
                        </p>
                        <div className="flex items-center justify-center gap-4 my-10">
                          {(
                            (selectedProject?.availableIn ||
                              []) as AvailableIn[]
                          ).map((item, index) => (
                            <React.Fragment key={index}>
                              {renderIcon(item)}
                              {index <
                                (selectedProject?.availableIn || []).length - 1}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    <div className="flex flex-col w-[40%] justify-end">
                      <div className="grid grid-cols-3 gap-1">
                        {selectedProject &&
                          selectedProject.galleryVideosAndImages.map(
                            (file, index) => (
                              <div key={index} className="p-1">
                                {file.endsWith(".webm") ? (
                                  <video
                                    autoPlay
                                    controls
                                    loop
                                    muted
                                    className="w-full h-full"
                                  >
                                    <source src={file} type="video/webm" />
                                  </video>
                                ) : (
                                  <img
                                    src={file}
                                    alt="image"
                                    className="w-full h-full"
                                  />
                                )}
                              </div>
                            )
                          )}
                      </div>
                      <div className="flex flex-col justify-center text-center gap-8 mt-14">
                        <p className="text-2xl font-bold">Technology Stack</p>
                          <div className="flex items-center gap-5 flex-wrap justify-center">
                            {(
                              (selectedProject?.technologies ||
                                []) as Technologies[]
                            ).map((item, index) => (
                              <React.Fragment key={index}>
                                {renderIconTechnologies(item)}
                                {index <
                                  (selectedProject?.technologies || []).length - 1}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                    </div>

                    </div>
                  </ModalBody>
                </>
              )}
              </ModalContent>
        </Modal>
      </Swiper>
    </>
        
      <div className="shadoSwiper"></div>
      <div className="flex flex-col justify-center -translate-x-10 w-[10%] mx-auto">
        <button onClick={handleNextSlide}><NextIcon/></button>
      </div>
      </div>
    </div>
  );
}

