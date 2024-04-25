"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from '../../images/logo.png';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow} from "@nextui-org/react";
import '../../app/globals.css'
import WebIcon from "../icons/WebIcon";
import MobileIcon from "../icons/MobileIcon";
import VrIcon from "../icons/VrIcon";
import ArIcon from "../icons/ArIcon";
import ConsoleIcon from "../icons/ConsoleIcon";
import DesktopIcon from "../icons/DesktopIcon";
import '../../app/globals.css'
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
    web: <WebIcon />,
    mobile: <MobileIcon />,
    vr: <VrIcon />,
    ar: <ArIcon />,
    console: <ConsoleIcon />,
    desktop: <DesktopIcon />
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

    
  return (
    <div className="bg-black py-10">
      <div className="flex justify-center gap-2 p-2 mt-20 sticky top-[120px] z-20 mb-20">
        <button
          onClick={() => filterProjects("web")}
          className={buttonClass("web")}
        >
          {/* <WebIcon className={activeFilter === "web" ? "" : ""} /> */}
          <WebIcon className="invert"/>
        </button>
        <button
          onClick={() => filterProjects("mobile")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <MobileIcon />
        </button>
        <button
          onClick={() => filterProjects("console")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <ConsoleIcon />
        </button>
        <button
          onClick={() => filterProjects("desktop")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <DesktopIcon />
        </button>
        <button
          onClick={() => filterProjects("ar")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <ArIcon />
        </button>
        <button
          onClick={() => filterProjects("vr")}
          className="p-2 hover:scale-105 transition duration-75"
        >
          <VrIcon />
        </button>
      </div>
      <div className="flex items-center justify-around gap-10 flex-wrap mt-10 max-2xl:px-5">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="relative w-[400px] h-[440px] max-xl:w-[300px] max-xl:h-[330px] cursor-pointer hover:scale-105 transition duration-75"
          >
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="z-10"
            />
            <div className="absolute border-3 border-zinc-900 top-0 left-0 w-full h-full after:content-[''] after:absolute after:inset-5 after:border-3 after:border-white after:-z-10 z-10 hover:bg-black hover:bg-opacity-50 transition-all">
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
            </div>
          </div>
        ))}
        <Modal
          size="full"
          isOpen={isOpen}
          onClose={onClose}
          className="top-[110px]"
        >
          <ScrollShadow>
            <ModalContent className="bgProyect">
              {(onClose) => (
                <>
                  {/* <ModalHeader className="text-4xl translate-y-10">{selectedProject?.title}</ModalHeader> */}
                  <ModalBody>
                    <div className="flex w-full h-full items-center justify-center gap-20 max-2xl:flex-col">
                      <div className="w-[30%] justify-start max-2xl:w-full">
                        {selectedProject && (
                          <div
                            
                            className="relative w-[600px] h-[900px]"
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

                      <div className="flex flex-col items-center gap-4 w-[30%] ml-10 justify-center max-auto">
                        <p className="font-semibold text-3xl text-center">
                          {selectedProject?.title}
                        </p>
                        <p className="text-2xl text-center">
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
                  {/* <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter> */}
                </>
              )}
            </ModalContent>
          </ScrollShadow>
        </Modal>
      </div>
    </div>
  );
}

