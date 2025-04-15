import Image from "next/image";
import fundo from '../../assets/fundo_contato.svg'
import Logo from "@/components/logo";
import '../../app/globals.css'
import { useState, useEffect } from "react";

import { poppins } from "@/app/fonts";
import { motion } from 'framer-motion'

import Whatsapp from '../../assets/whatsapp.svg'
import Linkedin from '../../assets/linkedin.svg'
import Instagram from '../../assets/instagram.svg'
import Gmail from '../../assets/gmail.svg'

import bot1 from '../../assets/bot1.svg'
import bot2 from '../../assets/bot2.svg'
import TextAnimated from "@/components/TextAnimated";

interface ChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

interface SubmitEvent {
  preventDefault: () => void;
}

type Props = {
	form: { nome: string, email: string, mensagem: string}
	handleChange: (e: ChangeEvent) => void,
	handleSubmit: (e: SubmitEvent) => void
}

export default function Contatos({form, handleChange, handleSubmit}:Props){
	const [widthScreen, setWidthScreen] = useState<number>(0);

	useEffect(() => {
			const handleResize = () => {
				setWidthScreen(window.innerWidth);
			};
	
			handleResize();
			window.addEventListener("resize", handleResize);
			
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, [])

	return(
		<section className={`${poppins.className} w-full relative pb-[3vw] mt-[10vw] flex items-center flex-col`} id="contatos">
			<Logo width={100}/>	

			<motion.h1 
				initial={{ clipPath: 'inset(0 50% 0 50%)', opacity: 0 }}
				
				transition={{type:'spring', duration:1, delay:0.5}}
				whileInView={{ clipPath: 'inset(0 0% 0 0%)', opacity: 1 }}
				className="z-2 mt-[2vw] mb-[2vw] max-[600px]:mb-[8vw] max-[600px]:text-[5vw] text-black dark:text-white text-[3vw] w-[70vw] text-center font-bold">A Tecnologia é uma ferramenta. Vamos construir o
  			<span className="text-[#0084FF]"> futuro</span> juntos?
			</motion.h1>

			
			<div  className="max-[900px]:w-[70vw] z-1 w-[35vw] relative">
				<div className="w-full
					dark:shadow-[inset_0px_0px_2px_white] shadow-[inset_0px_0px_2px_black] 
				dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px]
					rounded-2xl overflow-hidden z-2 px-[3vw] py-[2vw] max-[600px]:pb-[6vw]">
					<form>
						<TextAnimated className="font-semibold text-black dark:text-white max-[600px]:text-[0.8rem] max-[900px]:text-[1.6vw] text-[1vw]" text='Nome'/>
						<motion.input
							initial={{scaleX:0}}
							whileInView={{scaleX:1}}
							viewport={{once:true}}
							transition={{duration:1, type:'spring'}}
							name="nome"
							value={form.nome}
							onChange={handleChange}
							className="border-black dark:border-white max-[600px]:text-[0.8rem] max-[900px]:text-[1.6vw] text-[1vw] text-black mb-[1vw] mt-[0.5rem] dark:text-white border-1 py-2 rounded-[0.5rem] w-full px-3"
							required
						/>
						<TextAnimated className="font-semibold text-black dark:text-white max-[600px]:text-[0.8rem] max-[900px]:text-[1.6vw] text-[1vw]" text="Email"/>
						<motion.input
							initial={{scaleX:0}}
							whileInView={{scaleX:1}}
							viewport={{once:true}}
							transition={{duration:1, type:'spring', delay:0.2}}
							name="email"
							type="email"
							value={form.email}
							onChange={handleChange}
							className="border-black dark:border-white max-[600px]:text-[0.8rem] max-[900px]:text-[1.6vw] text-[1vw] text-black mb-[1vw] mt-[0.5rem] dark:text-white border-1 py-2 rounded-[0.5rem] w-full px-3"
							required
						/>

						<TextAnimated className="font-semibold text-black dark:text-white max-[600px]:text-[0.8rem] max-[900px]:text-[1.6vw] text-[1vw]" text="Mensagem"/>
						<motion.textarea
							initial={{scaleX:0}}
							whileInView={{scaleX:1}}
							viewport={{once:true}}
							transition={{duration:1, type:'spring', delay:0.4}}
							name="mensagem"
							value={form.mensagem}
							onChange={handleChange}
							className="border-black dark:border-white text-black  max-[600px]:text-[0.8rem] max-[900px]:text-[1.6vw]  mt-[0.5rem] text-[1vw] dark:text-white textarea border-1 py-2 rounded-[0.5rem] w-full px-3 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent"
							required
						/>

						<div className="w-full flex mt-[1rem] items-center justify-center">
							<motion.button 
								whileInView={{scaleX:1}}
								initial={{scaleX:0}}
								viewport={{once:true}}
								transition={{duration:1, type:'spring'}}
								className="bg-[#000568] cursor-pointer font-semibold rounded-[0.5rem] max-[600px]:text-[0.8rem] max-[900px]:text-[1.6vw] text-[1vw] px-[1.5rem] py-[0.2rem]"
								type="submit">
								Enviar
							</motion.button>
						</div>
					</form>

					<motion.p 
						initial={{ opacity: 0, x: -100}} 
						whileInView={{ opacity: 1.2, x: 0}} 
						viewport={{once:true}}
						transition={{ duration: 1, ease: "easeOut" }} 
						className="font-bold text-center text-black max-[600px]:text-[0.8rem] max-[900px]:text-[1.6vw] text-[1vw] dark:text-white mt-3">
					Fale comigo</motion.p>

					<motion.div className="flex w-full flex-row mt-3 justify-center items-center gap-4">
						<motion.button 
							initial={{y:-80, opacity:0}}
							whileInView={{y:0, opacity:1}}
							viewport={{once:true}}
							whileHover={{scale:1.2}} 
							transition={{ duration: 1, type:'spring', ease: "easeOut", delay:0.2 }} 
							onClick={() => window.open("https://wa.me/5592985941696", "_blank")}>
							<Image className="w-8 cursor-pointer" src={Whatsapp} alt="whatsapp"/>
						</motion.button>

						<motion.button 
							initial={{y:-80, opacity:0}}
							whileInView={{y:0, opacity:1}}
							viewport={{once:true}}
							whileHover={{scale:1.2}} 
							transition={{ duration: 1, type:'spring', ease: "easeOut", delay:0.4}}
							onClick={() => window.open("https://www.linkedin.com/in/vithor-vit%C3%B3rio-63887b2a6/", "_blank")}>
							<Image className="w-8 cursor-pointer" src={Linkedin} alt="linkedin"/>
						</motion.button>

						<motion.button 
							initial={{y:-80, opacity:0}}
							whileInView={{y:0, opacity:1}}
							viewport={{once:true}}
							whileHover={{scale:1.2}} 
							transition={{ duration: 1, type:'spring', ease: "easeOut", delay:0.6}}
							onClick={() => window.open("https://www.instagram.com/vithor_vitorio/", "_blank")}>
							<Image className="w-8 cursor-pointer" src={Instagram} alt="instagram"/>
						</motion.button>

						<motion.button 
							initial={{y:-80, opacity:0}}
							whileInView={{y:0, opacity:1}}
							viewport={{once:true}}
							whileHover={{scale:1.2}} 
							transition={{ duration: 1, type:'spring', ease: "easeOut", delay:0.8}}
							onClick={() => window.open("mailto:vithorjr728@gmail.com")}> 
							<Image className="w-8 cursor-pointer" src={Gmail} alt="gmail"/>
						</motion.button>
					</motion.div>
				</div>

				<motion.div
					className="absolute z-[-1] w-[10vw] top-[-5vw] left-[-8vw]"
					initial={{x:-100, opacity:0}}
					whileInView={{x:0, opacity:1}}
					
					transition={{duration:1, delay:1, type:'spring'}}
				>
					<Image src={bot1} alt="bot1" className="noselect w-full"/>
				</motion.div>

				<motion.div
					className="absolute z-[-1] w-[15vw] bottom-[2vw] right-[-10vw]"
					initial={{x:100, opacity:0}}
				
					whileInView={{x:0, opacity:1}}
					transition={{duration:1, delay:1, type:'spring'}}
				>
					<Image src={bot2} alt="bot2" className="noselect w-full"/>
				</motion.div>
			</div>

			<Image
				src={fundo}
				alt="fundo"
				className="w-full z-[0] absolute noselect bottom-0"
			/>
		</section>
	)
}