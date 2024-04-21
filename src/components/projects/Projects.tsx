"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from '../../images/logo.png'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import web from '../../images/web.png'
import vr from '../../images/vr.png'
import ar from '../../images/ar.png'
import desktop from '../../images/computer.png'
import console from '../../images/console.png'
import '../../app/globals.css'


async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('https://diarc-backend.vercel.app/projects');
  const data = await response.json();
  return data as Project[]; 
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterProjects = (platform: string) => {
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

    
  return (
    <div className="bg-zinc-900">
      <div className="flex justify-center gap-2 p-2">
        <button onClick={() => filterProjects("web")} className="p-2 hover:scale-105 transition duration-75">
          <Image className="invert" width={50} height={50} src={web} alt="Web Icon"/>
        </button>
        <button onClick={() => filterProjects("mobile")} className="p-2 hover:scale-105 transition duration-75">
          <svg fill="#ffffff" width={50} height={50} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M404.144,146.228c-4.365,0-7.902,3.537-7.902,7.902v313.747c0,15.616-12.706,28.32-28.321,28.32h-33.362 c-4.365,0-7.902,3.537-7.902,7.902s3.537,7.902,7.902,7.902h33.362c24.329,0,44.123-19.794,44.124-44.122V154.13 C412.046,149.765,408.509,146.228,404.144,146.228z"></path> <path d="M367.921,0H144.079c-24.331,0-44.124,19.794-44.124,44.125v423.751c0,24.329,19.794,44.123,44.124,44.123h158.874 c4.364,0,7.902-3.536,7.902-7.901c0-4.365-3.537-7.902-7.902-7.902H144.079c-15.616,0-28.321-12.705-28.321-28.32V44.125 c0-15.617,12.706-28.322,28.321-28.322h223.843c15.616,0,28.321,12.706,28.321,28.322v78.398c0,4.365,3.537,7.902,7.902,7.902 c4.365,0,7.902-3.537,7.902-7.902V44.125C412.046,19.794,392.252,0,367.921,0z"></path> </g> </g> </g> <g> <g> <path d="M361.766,69.376H214.462c-4.365,0-7.902,3.537-7.902,7.902c0,4.365,3.537,7.902,7.902,7.902h139.402v316.148H158.137 V85.179h24.718c4.365,0,7.902-3.537,7.902-7.902c0-4.365-3.537-7.902-7.902-7.902h-32.62c-4.365,0-7.902,3.537-7.902,7.902 v331.951c0,4.365,3.537,7.902,7.902,7.902h211.53c4.364,0,7.902-3.538,7.902-7.902V77.277 C369.667,72.912,366.13,69.376,361.766,69.376z"></path> </g> </g> <g> <g> <circle cx="255.999" cy="42.173" r="8.309"></circle> </g> </g> <g> <g> <path d="M255.999,428.221c-15.965,0-28.954,12.989-28.954,28.954s12.989,28.953,28.954,28.953 c15.966,0,28.954-12.988,28.954-28.953S271.965,428.221,255.999,428.221z M255.999,470.325c-7.252,0-13.151-5.899-13.151-13.15 c0-7.252,5.899-13.151,13.151-13.151c7.253,0,13.152,5.9,13.151,13.151C269.151,464.425,263.251,470.325,255.999,470.325z"></path> </g> </g> </g></svg>
        </button>
        <button onClick={() => filterProjects("console")} className="p-2 hover:scale-105 transition duration-75">
          <Image className="invert" width={50} height={50} src={console} alt="Console Icon"/>
        </button>
        <button onClick={() => filterProjects("desktop")} className="p-2 hover:scale-105 transition duration-75">
          <Image className="invert" width={50} height={50} src={desktop} alt="Desktop Icon"/>
        </button>
        <button onClick={() => filterProjects("ar")} className="p-2 hover:scale-105 transition duration-75">
          <Image className="invert" width={50} height={50} src={ar} alt="AR Icon"/>
        </button>
        <button onClick={() => filterProjects("vr")} className="p-2 hover:scale-105 transition duration-75">
          <Image className="invert" width={50} height={50} src={vr} alt="VR Icon"/>
        </button>
      </div>
      <div className="flex items-center justify-around gap-10 flex-wrap">
      {filteredProjects.map((project) => (
        <div key={project._id} className="relative w-[400px] h-[440px] my-10 cursor-pointer hover:scale-105 transition duration-75">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="z-10"
            />
          <div className="absolute border-3 border-zinc-900 top-0 left-0 w-full h-full after:content-[''] after:absolute after:inset-5 after:border-3 after:border-white after:-z-10 z-10 hover:bg-black hover:bg-opacity-50 transition-all">
            <Image className="translate-x-8 translate-y-8" width={50} height={50} src={logo} alt="Diarc Logo"/>
          <div className="opacity-0 hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300">
            <h3 className="text-2xl font-semibold text-white w-52 text-center">{project.title}</h3>
            <Button key={project._id} className="mt-5"  onPress={() => handleOpen(project)}>Open</Button>
          </div>
        </div>
        </div>
      ))}
      <Modal 
        size="full" 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="text-4xl translate-y-10">{selectedProject?.title}</ModalHeader> */}
              <ModalBody>
                <div className="flex items-center justify-between">
                  {selectedProject && <Image width={300} height={300} className="w-[500px] h-[700px]" src={selectedProject.image} alt={selectedProject.title}/>}
                  <div className="flex flex-col items-center gap-4">
                    <p className="font-semibold text-3xl text-center">{selectedProject?.title}</p>
                    <p className="w-[50%] text-2xl">{selectedProject?.description}</p>
                    <p>
                      {selectedProject?.availableIn.map((item, index) => (
                        <React.Fragment key={index}>
                          <span>{item}</span>
                          {index < selectedProject.availableIn.length - 1 && <span>, </span>}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center">
                      {selectedProject && selectedProject.galleryVideosAndImages.map((file, index) => (
                        <div key={index}  className="w-1/3 p-1 gap-5">
                          <Image width={200} height={200} src={file} alt="a"/>
                        </div>
                      ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>  
  </div>
  );
}

