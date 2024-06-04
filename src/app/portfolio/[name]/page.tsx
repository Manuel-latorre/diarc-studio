"use client"

import React, { useEffect, useRef, useState } from "react";
import { fetchByTitle } from "../../../../libs/data";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow} from "@nextui-org/react";
import Image from "next/image";
import logo from '../../../images/logo.png';
import WebIcon from "@/components/icons/WebIcon";
import MobileIcon from "@/components/icons/MobileIcon";
import VrIcon from "@/components/icons/VrIcon";
import ArIcon from "@/components/icons/ArIcon";
import ConsoleIcon from "@/components/icons/ConsoleIcon";
import DesktopIcon from "@/components/icons/DesktopIcon";
import UnrealEngineIcon from "@/components/icons/UnrealEngineIcon";
import MayaIcon from "@/components/icons/MayaIcon";
import RobloxIcon from "@/components/icons/RobloxIcon";
import CinemaIcon from "@/components/icons/CinemaIcon";
import ZBrushIcon from "@/components/icons/ZBrushIcon";
import AdobeIcon from "@/components/icons/AdobeIcon";
import BlenderIcon from "@/components/icons/BlenderIcon";
import UnityIcon from "@/components/icons/UnityIcon";
import DsMaxIcon from "@/components/icons/DsMaxIcon";
import ChaosVrIcon from "@/components/icons/ChaosVrIcon";
import SubstancePainterIcon from "@/components/icons/SubstancePainterIcon";
import SubstanceDesignerIcon from "@/components/icons/SubstanceDesignerIcon";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Arrow from "@/components/projects/Arrows";
import '../../globals.css'
import '../../../components/projects/styles.css'
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";




export default function ProjectPage({
    params,
  }: {
    params: { name: string };
  }) {
    const [project, setProject] = useState<any>(null);
    // const [project, setproject] = useState<Project | null>(null);
    const {isOpen, onOpen, onClose} = useDisclosure({ defaultOpen: true });
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    const modalRef = useRef<HTMLDivElement>(null);



    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel)
        },
        created() {
          setLoaded(true)
        },
      })


  
    const name = params.name;
  
    useEffect(() => {
      fetchByTitle({ name }).then((data) => {
        setProject(data); 
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
    

    const handleCloseModal = () => {
        redirect("/"); 
    };

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
      <div>
        {project && (
          <>
          
            <Modal size="full" isOpen={isOpen} onClose={onClose} defaultOpen>
              <ModalContent
                className="bgProyect overflow-y-auto"
              >
                <Link href={"/#portfolio"} className="text-white self-end justify-end margin-2 z-10 bg-black p-2">
                    <svg width={35} height={35} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#808184" d="M16,0C11.726,0,7.708,1.664,4.687,4.687C1.665,7.708,0,11.727,0,16s1.665,8.292,4.687,11.313 C7.708,30.336,11.726,32,16,32s8.292-1.664,11.313-4.687C30.335,24.292,32,20.273,32,16s-1.665-8.292-4.687-11.313 C24.292,1.664,20.274,0,16,0z M26.606,26.606C23.773,29.439,20.007,31,16,31s-7.773-1.561-10.606-4.394S1,20.007,1,16 S2.561,8.227,5.394,5.394S11.993,1,16,1s7.773,1.561,10.606,4.394S31,11.993,31,16S29.439,23.773,26.606,26.606z"></path> <path fill="#808184" d="M22.01,9.989c-0.195-0.195-0.512-0.195-0.707,0L16,15.293l-5.303-5.304c-0.195-0.195-0.512-0.195-0.707,0 s-0.195,0.512,0,0.707L15.293,16L9.99,21.304c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146 s0.256-0.049,0.354-0.146L16,16.707l5.303,5.304c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146 c0.195-0.195,0.195-0.512,0-0.707L16.707,16l5.303-5.304C22.206,10.501,22.206,10.185,22.01,9.989z"></path> </g> </g></svg>
                </Link>
                  <>
                    <ModalBody>
                      <div className="flex w-full h-full items-center justify-center lg:gap-20">
                        <div className="justify-start max-xl:w-full">
                          {project && (
                            <div className="relative mx-auto max-[1156px]:w-[400px] max-xl:w-[600px] w-[700px] h-screen max-lg:hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
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
                            {project?.title}
                          </p>
                          <p className="text-2xl text-center max-2xl:text-xl max-md:text-base">
                            {project?.description}
                          </p>
                          <div className="flex items-center justify-center gap-4 my-10 flex-wrap">
                            {(
                              (project?.availableIn ||
                                []) as AvailableIn[]
                            ).map((item, index) => (
                              <React.Fragment key={index}>
                                {renderIcon(item)}
                                {index <
                                  (project?.availableIn || []).length -
                                    1}
                              </React.Fragment>
                            ))}
                          </div>
                          <div className="flex flex-col justify-end">
                            <div className="grid grid-cols-5 gap-1">
                              {project &&
                                project.galleryVideosAndImages.map(
                                  (file:any, index:number) => (
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
                                  (project?.technologies ||
                                    []) as Technologies[]
                                ).map((item, index) => (
                                  <React.Fragment key={index}>
                                    {renderIconTechnologies(item)}
                                    {index <
                                      (project?.technologies || [])
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
                                      {project &&
                                        project.galleryVideosAndImages.map(
                                          (file:any, index:number) => (
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
              </ModalContent>
            </Modal>
          </>
        )}
      </div>
    );
  }