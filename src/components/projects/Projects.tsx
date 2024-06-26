"use client"

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow} from "@nextui-org/react";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Arrow from "./Arrows";
import ExpandIcon from "../icons/ExpandIcon";
import Link from "next/link";


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
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const filterProjects = (platform: string, selectedFilters: Set<string>, projects: Project[], setSelectedFilters: (filters: Set<string>) => void, setFilteredProjects: (projects: Project[]) => void) => {
    const updatedFilters = new Set(selectedFilters);
    if (updatedFilters.has(platform)) {
      updatedFilters.delete(platform); // Si el filtro ya está seleccionado, quitarlo
    } else {
      updatedFilters.add(platform); // Si el filtro no está seleccionado, agregarlo
    }
    setSelectedFilters(updatedFilters);
  
    // Filtrar proyectos basados en los filtros seleccionados
    const filteredProjects = projects.filter((project: Project) =>
      updatedFilters.size === 0 || [...updatedFilters].some(filter => project.availableIn.includes(filter))
    );
    setFilteredProjects(filteredProjects);
  };
  
  const isFilterSelected = (platform: string, selectedFilters: Set<string>) => {
    return selectedFilters.has(platform);
  };
  
  const buttonClass = (filter: any, selectedFilters: Set<string>) => {
    if (selectedFilters.size === 0) {
      return "p-2 hover:scale-105 transition duration-75 fill-white"; // Todos los iconos en blanco inicialmente
    }
    return isFilterSelected(filter, selectedFilters)
      ? "p-2 hover:scale-105 transition duration-75 fill-white" // Icono seleccionado en blanco
      : "p-2 hover:scale-105 transition duration-75 fill-zinc-700"; // Otros iconos en fill-zinc-700
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
    web: <WebIcon className="fill-white max-md:w-[40px] max-md:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"/>,
    mobile: <MobileIcon className="fill-white max-md:w-[40px] max-md:h-[40px] md:w-[50px] md:h-[65px] lg:w-[60px] lg:h-[60px]"/>,
    vr: <VrIcon className="fill-white max-md:w-[40px] max-md:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"/>,
    ar: <ArIcon className="fill-white max-md:w-[40px] max-md:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"/>,
    console: <ConsoleIcon className="fill-white max-md:w-[40px] max-md:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"/>,
    desktop: <DesktopIcon className="fill-white max-md:w-[40px] max-md:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"/>
  };

  type Technologies = 'unrealengine' | 'maya' | 'roblox' | 'cinema' | 'zbrush' | 'substancePainter' | 'substanceDesigner' | 'adobe' | 'unity' | 'blender' | 'chaosvr' | 'dsmax';
  
const iconTechnologiesMapping: Record<Technologies, JSX.Element> = {
  unrealengine: <UnrealEngineIcon/>,
  maya: <MayaIcon/>,
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

    
    const swiperRef = useRef<SwiperRef>(null);
  const clickNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

    const handleCloseModal = () => {
      setSelectedImage(null);
      onClose()
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current != null && !modalRef.current.contains(event.target as Node)) {
          // Si el clic ocurrió fuera de la galería, cierra la galería
          setSelectedImage(null);
        }
      };
    
      document.addEventListener('mousedown', handleClickOutside);
    
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  const handleImageClick = (image:any) => {
    setSelectedImage(image);
  };

  const handleCloseGallery = () => {
    setSelectedImage(null);
  };
    
  return (
    <div className="mt-[10%]">
      <p className="text-center text-3xl font-bold top-5">Explore our work</p>
      <div className="bg-black flex justify-center mt-[5%] h-screen max-md:h-[400px]">
      <div className="flex flex-col justify-center gap-2 translate-x-12 z-20 items-center mx-auto max-md:hidden">
        <button
          onClick={() => filterProjects("web", selectedFilters, projects, setSelectedFilters, setFilteredProjects)}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <WebIcon
             className={buttonClass("web", selectedFilters)}
          />
          <p className={"text-zinc-400 font-light text-sm text-center"}>
            Web
          </p>
        </button>
        <button
          onClick={() => filterProjects("mobile", selectedFilters, projects, setSelectedFilters, setFilteredProjects)}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <MobileIcon
            className={buttonClass("mobile", selectedFilters)}
          />
          <p
            className={"text-zinc-400 font-light text-sm text-center"}
          >
            Mobile
          </p>
        </button>
        <button
          onClick={() => filterProjects("console", selectedFilters, projects, setSelectedFilters, setFilteredProjects)}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <ConsoleIcon
            className={buttonClass("console", selectedFilters)}
          />
          <p
            className={"text-zinc-400 font-light text-sm text-center"}
          >
            Console
          </p>
        </button>
        <button
          onClick={() => filterProjects("desktop", selectedFilters, projects, setSelectedFilters, setFilteredProjects)}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <DesktopIcon
            className={buttonClass("desktop", selectedFilters)}
          />
          <p
            className={"text-zinc-400 font-light text-sm text-center"}
          >
            Desktop
          </p>
        </button>
        <button
          onClick={() => filterProjects("ar", selectedFilters, projects, setSelectedFilters, setFilteredProjects)}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <ArIcon
            className={buttonClass("ar", selectedFilters)}
          />
          <p
            className={"text-zinc-400 font-light text-sm text-center"}
          >
            AR
          </p>
        </button>
        <button
          onClick={() => filterProjects("vr", selectedFilters, projects, setSelectedFilters, setFilteredProjects)}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <VrIcon
            className={buttonClass("vr", selectedFilters)}
          />
          <p
            className={"text-zinc-400 font-light text-sm text-center"}
          >
            VR
          </p>
        </button>
      </div>
      <div className="max-xl:w-[65%] mx-auto flex xl:w-[75%] max-md:w-[90%]">
        <>
          <Swiper
            breakpoints={{
              1536: {
                slidesPerView: 4,
                spaceBetween: 20,
                grid: {
                  rows: 3,
                },
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 15,
                grid: {
                  rows: 3,
                },
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
                grid: {
                  rows: 3,
                },
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid: {
                  rows: 2,
                },
              },
            }}
            grid={{
              rows: 1,
            }}
            // navigation={isMobile ? true : false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '" style="background-color: #e5e60e;"></span>';
              },
            }}
            modules={[Grid, Navigation, Pagination]}
            className="mySwiper flex pb-10"
            ref={swiperRef}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide
                key={project._id}
                className="cursor-pointer md:hover:scale-105 transition duration-75"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="z-10"
                />
                <Link
                  href={`/portfolio/${project.title}`}
                  // onClick={() => handleOpen(project)}
                  className="absolute border-3 border-black top-0 left-0 w-full h-full after:content-[''] after:absolute after:inset-3 after:border-3 after:border-white after:-z-10 z-10 hover:bg-black hover:bg-opacity-50 transition-all"
                >
                  <Image
                    className="translate-x-5 translate-y-5 opacity-50"
                    width={40}
                    height={40}
                    src={logo}
                    alt="Diarc Logo"
                  />

                  <div className="opacity-0 hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300">
                    <h3 className="text-xl font-semibold text-white w-48 text-center">
                      {project.title}
                    </h3>
                  <ExpandIcon/>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            {/* <Modal size="full" isOpen={isOpen} onClose={onClose} className="">
              <ModalContent
                className="bgProyect overflow-y-auto"
              //   onWheel={(event) => {
               
              //  if (event.deltaY > 0) {
              //    handleCloseModal(); 
              //   }
              // }}
              >
                {(onClose) => (
                  <>
                    <ModalBody>
                      <div className="flex w-full h-full items-center justify-center lg:gap-20">
                        <div className="justify-start max-xl:w-full">
                          {selectedProject && (
                            <div className="relative mx-auto max-[1156px]:w-[400px] max-xl:w-[600px] w-[700px] h-screen max-lg:hidden">
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

                        <div className="flex flex-col items-center gap-4 z-50 py-10 lg:pr-5">
                          <p className="font-semibold text-3xl text-center max-2xl:text-2xl max-md:text-xl">
                            {selectedProject?.title}
                          </p>
                          <p className="text-2xl text-center max-2xl:text-xl max-md:text-base">
                            {selectedProject?.description}
                          </p>
                          <div className="flex items-center justify-center gap-4 my-10 flex-wrap">
                            {(
                              (selectedProject?.availableIn ||
                                []) as AvailableIn[]
                            ).map((item, index) => (
                              <React.Fragment key={index}>
                                {renderIcon(item)}
                                {index <
                                  (selectedProject?.availableIn || []).length -
                                    1}
                              </React.Fragment>
                            ))}
                          </div>
                          <div className="flex flex-col justify-end">
                            <div className="grid grid-cols-5 gap-1">
                              {selectedProject &&
                                selectedProject.galleryVideosAndImages.map(
                                  (file, index) => (
                                    <div
                                      key={index}
                                      className=" gap-1"
                                      onClick={() => handleImageClick(file)}
                                    >
                                      {file.endsWith(".webm") ? (
                                        <video
                                          autoPlay
                                          controls
                                          loop
                                          muted
                                          className="w-full h-full"
                                        >
                                          <source
                                            src={file}
                                            type="video/webm"
                                          />
                                        </video>
                                      ) : (
                                        <img
                                          src={file}
                                          alt="image"
                                          className="w-full h-full cursor-pointer"
                                        />
                                      )}
                                    </div>
                                  )
                                )}
                            </div>
                            <div className="flex flex-col justify-center text-center gap-8 mt-14">
                              <p className="text-lg font-normal max-md:text-base">
                                Technology Stack
                              </p>
                              <div className="flex items-center gap-5 flex-wrap justify-center">
                                {(
                                  (selectedProject?.technologies ||
                                    []) as Technologies[]
                                ).map((item, index) => (
                                  <React.Fragment key={index}>
                                    {renderIconTechnologies(item)}
                                    {index <
                                      (selectedProject?.technologies || [])
                                        .length -
                                        1}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>

                            {selectedImage && (
                              <>
                                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
                                  <div
                                    ref={modalRef}
                                    className="w-[70%] h-[80%] mx-auto max-md:w-[90%] max-md:h-[50%]"
                                  >
                                    <div
                                      ref={sliderRef}
                                      className="keen-slider relative"
                                    >
                                      {selectedProject &&
                                        selectedProject.galleryVideosAndImages.map(
                                          (file, index) => (
                                            <div
                                              key={index}
                                              className="keen-slider__slide"
                                              onClick={() =>
                                                handleImageClick(file)
                                              }
                                            >
                                              {file.endsWith(".webm") ? (
                                                <video
                                                  autoPlay
                                                  controls
                                                  loop
                                                  muted
                                                  className="w-full h-full"
                                                >
                                                  <source
                                                    src={file}
                                                    type="video/webm"
                                                  />
                                                </video>
                                              ) : (
                                                <img
                                                  src={file}
                                                  alt="image"
                                                  className="w-full h-full cursor-pointer"
                                                />
                                              )}
                                            </div>
                                          )
                                        )}
                                      {loaded && instanceRef.current && (
                                        <>
                                          <Arrow
                                            left
                                            onClick={(e: any) =>
                                              e.stopPropagation() ||
                                              instanceRef.current?.prev()
                                            }
                                            disabled={currentSlide === 0}
                                          />

                                          <Arrow
                                            onClick={(e: any) =>
                                              e.stopPropagation() ||
                                              instanceRef.current?.next()
                                            }
                                            disabled={
                                              currentSlide ===
                                              instanceRef.current.track.details
                                                .slides.length -
                                                1
                                            }
                                          />
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal> */}
          </Swiper>
        </>

        <div className="shadoSwiper max-md:hidden"></div>
        <div className="flex flex-col justify-center -translate-x-10 w-[10%] mx-auto max-md:hidden">
          <button onClick={clickNext}>
            <NextIcon />
          </button>
        </div>
      </div>
      </div>

    </div>
  );
}

