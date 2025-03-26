import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from 'framer-motion'
import bot from '../../assets/robotProjects.svg'
import Tecnologia from "../tecnologia";

import tecnologias from "@/data/tecnologias";

import '../../app/globals.css'

type ProjetoProps = {
  titulo: string;
  descricao: string;
  ano: number;
  video: string;
  tecnologias: { nome: keyof typeof tecnologias | string}[];
  isFirst: boolean;
  isLast: boolean;
  link:string
};

export default function Projeto({ titulo, link, descricao, ano, video, tecnologias, isFirst, isLast }: ProjetoProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-row px-5 w-full">
      <div className="w-[10%] items-end flex flex-col relative">
        <div className="h-full w-[5vw] relative flex items-center flex-col">
          
          <div className="h-[13vw] max-[600px]:h-[18vw] flex items-center flex-col w-[5vw]">
            {
            isFirst ? 
            <div className="flex flex-col h-full items-center relative">
              <div className="w-[0.2vw] h-full min-w-[3px] absolute bg-[#1F3EF5]"/>
              <Image src={bot} className="w-[100%] z-2" alt="bot"/>
            </div>
            : <div className="w-[0.2vw] min-w-[3px] bg-[#1F3EF5] h-full"/>
            }
          </div>
          
          <div className="w-[1.5vw] relative flex flex-row items-center max-[600px]:h-[15px] max-[600px]:w-[15px] h-[1.5vw] bg-[#1F3EF5] rounded-full">
            <p className="absolute text-[1vw] max-[900px]:text-[10px] font-semibold right-[2vw] max-[600px]:right-[20px] text-[#1F3EF5]">{ano}</p>
          </div>

          <div className="w-[0.2vw] min-w-[3px] bg-[#1F3EF5] flex-1"/>  
        </div>
      </div>

      <div className="flex flex-col w-[90%]" style={{paddingBottom:isLast ? '0vw' : '10vw'}}>
        <div className='flex flex-col ms-[-8%] items-center max-[600px]:h-[18vw] h-[13vw]'>
          <motion.h1
            className='max-[600px]:text-[7vw] text-[5vw] text-black dark:text-white z-2 font-bold'  
          >Projetos</motion.h1>
          <motion.p
            className='max-[600px]:text-[2.5vw] text-[1.5vw] z-3 mt-[-1vw] text-black dark:text-white'  
          >Tecnologia em ação.</motion.p>
        </div> 
        
        <div
          className="w-full relative flex flex-row justify-between max-[901px]:flex-col gap-[2vw]"
        >
          <a
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="w-[50vw] max-[900px]:w-full max-[900px]:h-[calc(100%*(503/758))] relative cursor-pointe p-[2vw] h-[calc(50vw*(503/758))] dark:bg-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)] rounded-[1vw] overflow-hidden"
          >
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              disablePictureInPicture
              controlsList="nodownload nofullscreen noplaybackrate"
              className="w-full h-full object-cover pointer-events-none"
              style={{ WebkitUserSelect: "none" }}
            />

            {hover && (
              <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(0,0,0,0.6)]">
                <p className="dark:text-white text-black text-lg font-bold">Acessar</p>
              </div>
            )}
          </a>

          <div className="flex-1">
              <h1 className="text-[#0084FF] text-[2.5vw] max-[900px]:text-[1.4rem] font-bold">{titulo}</h1>
              
              <div
                className="min-[900px]:h-[55%] relative"
              >
                <p className="text-black h-full text-[1vw] max-[900px]:text-[0.8rem] dark:text-white description overflow-y-scroll">
                 {descricao}
                </p>
              </div>


            <div className="min-[900px]:h-[30%] max-[900px]:mt-[5%] max-[900px]:static absolute bottom-0">
              <p className="text-[#0084FF] text-[1.2vw] max-[900px]:text-[1rem] mb-[10px] font-bold">Tecnologias usadas</p>
              <div className="flex h-[calc(100%-2.5vw)] max-[900px]:gap-x-[30px] max-[900px]:gap-y-[10px] gap-[1vw] flex-wrap max-[900px]:flex-row flex-col">
                {tecnologias.map((tech) => (
                  <Tecnologia key={tech.nome} nome={tech.nome} />
                ))}
              </div>    
            </div>          
          </div>
        </div>
      </div>
    </div>
  );
}
