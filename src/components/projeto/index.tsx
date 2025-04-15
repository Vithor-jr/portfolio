import Image from "next/image";
import { motion } from 'framer-motion'
import bot from '../../assets/robotProjects.svg'
import Tecnologia from "../tecnologia";
import { MdOutlineOpenInNew } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import tecnologias from "@/data/tecnologias";

import '../../app/globals.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper";

import 'swiper/css';
import 'swiper/css/effect-creative';

import { EffectCreative } from 'swiper/modules';
import { useRef } from "react";

type ProjetoProps = {
  titulo: string;
  descricao: string[];
  ano: number;
  video: string;
  tecnologias: { nome: keyof typeof tecnologias | string}[];
  isFirst: boolean;
  isLast: boolean;
  image:string;
  link:string;
  repositorio:string
};

export default function Projeto({ titulo, image, link, repositorio, descricao, ano, video, tecnologias, isFirst, isLast }: ProjetoProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  
  return (
    <div className="flex flex-row px-5 w-full">
      <div className="w-[10%] items-end flex flex-col relative">
        <div className="h-full w-[5vw] relative flex items-center flex-col">
          
          <div className="h-[13vw] max-[600px]:h-[18vw] flex items-center flex-col w-[5vw]">
            {
            isFirst ? 
            <div className="flex flex-col h-full items-center relative">
              <Image src={bot} className="w-[100%] z-2 opacity-100" alt="bot"/>
              <div className="w-[0.2vw] h-full min-w-[3px] bg-[#1F3EF5]"/>
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

      <div className="flex flex-col w-[90%] relative" style={{paddingBottom:isLast ? '0vw' : '10vw'}}>
        <div className='flex relative flex-col ms-[-8%] items-center max-[600px]:h-[18vw] h-[13vw]'>
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
          
          <div className="w-[50vw] max-[901px]:w-full max-[901px]:h-[calc(100%*(503/758))] relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              grabCursor={true}
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
              modules={[EffectCreative]}
              className="w-full h-full relative rounded-[1vw] overflow-hidden"
            >
              <SwiperSlide
                className={`
                  w-full h-full relative p-[2vw]
                  dark:shadow-[inset_0px_0px_1px_white] shadow-[inset_0px_0px_1px_black] 
                  dark:bg-[rgba(255,255,255,0.15)] bg-[rgba(0,0,0,0.08)] 
                  rounded-[1vw] overflow-hidden`
                }  
              >
                <Image
                  src={image}
                  alt="image"
                  width={1}
                  height={1}
                  className="w-full object-cover pointer-events-none rounded-2xl"
                />
              </SwiperSlide>

              <SwiperSlide
                className={`
                  w-full h-full relative p-[2vw]
                  dark:shadow-[inset_0px_0px_1px_white] shadow-[inset_0px_0px_1px_black] 
                  dark:bg-[rgba(255,255,255,0.15)] bg-[rgba(0,0,0,0.08)] 
                  rounded-[1vw] overflow-hidden`
                }
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noplaybackrate"
                  className="w-full h-full object-cover rounded-2xl pointer-events-none"
                  style={{ WebkitUserSelect: "none" }}
                />
              </SwiperSlide>
            </Swiper>

            <div className="mt-[2px] right-0 absolute z-10 flex flex-row items-center gap-2">
              <button className="cursor-pointer w-[1.3vw] h-[1.3vw] max-[900px]:w-[1.5rem] max-[900px]:h-[1.5rem] flex items-center justify-center  hover:bg-[rgba(0,0,0,0.15)] rounded-[10px] dark:hover:bg-[rgba(255,255,255,0.2)]" onClick={() => {swiperRef.current?.slidePrev()}}>
                <IoIosArrowBack className="text-[1vw] max-[900px]:text-[0.8rem] text-[rgba(0,0,0,0.8)] dark:text-[rgba(255,255,255,0.4)]"/>
              </button>

              <p className="text-[1vw] max-[900px]:text-[0.8rem] text-[rgba(0,0,0,0.8)] dark:text-[rgba(255,255,255,0.4)]">Arraste</p>

              <button className="rotate-180 w-[1.3vw] h-[1.3vw] max-[900px]:w-[1.5rem] max-[900px]:h-[1.5rem] flex items-center justify-center cursor-pointer hover:bg-[rgba(0,0,0,0.15)] rounded-[10px] dark:hover:bg-[rgba(255,255,255,0.2)]" onClick={() => swiperRef.current?.slideNext()}>
                <IoIosArrowBack className="text-[1vw] max-[900px]:text-[0.8rem] text-[rgba(0,0,0,0.8)] dark:text-[rgba(255,255,255,0.4)]"/>
              </button>
            </div>
          </div>

          <div className="flex min-[900px]:h-[calc(50vw*(503/758))] max-[900px]:mt-[20px] flex-1 flex-col justify-between">
            <div className="min-[900px]:h-[19vw] flex flex-col">
              <h1 className="text-[#0084FF] text-[2.5vw] max-[900px]:text-[1.4rem] font-bold">{titulo}</h1>
              
              <div
                className="flex flex-1 flex-col gap-3 overflow-y-scroll description"
              >
                {descricao.map((text, index)=>{
                  return(
                    <p key={index} className="text-black text-[1vw] max-[900px]:text-[0.8rem] dark:text-white">{text}</p>
                  )
                })}
              </div>
            </div>


            <div className="flex flex-col gap-4 mt-5 overflow-hidden ">
              <div className="gap-5 flex flex-row">
                  {
                    link !== "" &&
                    <button onClick={() => window.open(link, "_blank")} className="flex-row flex items-center gap-1 cursor-pointer decoration-black dark:decoration-white hover:underline">
                      <MdOutlineOpenInNew className="w-[2vw] h-[2vw] min-w-[25px] min-h-[25px] dark:text-white text-black"/>

                      <p className="dark:text-[white] text-black text-[1.2vw] max-[900px]:text-[1rem] font-normal ">Acessar</p>
                    </button>
                  }

                  {
                    repositorio !== "" && (
                      <button onClick={() => window.open(repositorio, "_blank")} className="flex-row flex items-center gap-1 cursor-pointer hover:underline decoration-black dark:decoration-white">
                        <svg className="w-[2vw] min-w-[25px]" viewBox="0 0 128 128">
                          <g className="dark:invert" fill="black"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                        </svg>

                        <p className="dark:text-[white] text-black text-[1.2vw] max-[900px]:text-[1rem] font-normal">Repositório</p>
                      </button>
                    )
                  }
              </div>

              <p className="text-[#0084FF] text-[1.2vw] max-[900px]:text-[1rem] font-bold">Tecnologias usadas</p>
              
              <div className="flex flex-col min-h-[20px] max-h-[calc(4.5vw+1rem)] max-[900px]:flex-row min-[900px]:flex-wrap gap-4 overflow-x-auto description">
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
