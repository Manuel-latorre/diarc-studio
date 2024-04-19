"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from '../../images/logo.png'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('https://diarc-backend.vercel.app/projects');
  const data = await response.json();
  console.log(data);
  return data as Project[]; 
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpen = (project:any) => {
    setSelectedProject(project);
    onOpen();
  }

  useEffect(() => {
    fetchProjects()
    .then((data) => setProjects(data))  
    console.log(projects);
    
    
  }, [])

    
  return (
    <div className="bg-zinc-900">
      <div className="flex items-center justify-around gap-10">
      {projects.map((project) => (
        <div key={project._id} className="relative w-[400px] h-[440px] my-10 cursor-pointer">
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
                        <div className="w-1/3 p-1 gap-5">
                          <Image key={index} width={200} height={200} src={file} alt="a"/>
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

