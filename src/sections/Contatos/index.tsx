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


import { LuPhone } from "react-icons/lu";


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

			<h1 className="z-2 mt-[5vw] max-[600px]:text-[5vw] text-black dark:text-white text-[3vw] w-[70vw] text-center font-bold">A Tecnologia é uma ferramenta. Vamos construir o
  			<span className="text-[#0800AA]"> futuro</span> juntos?
			</h1>

			
			<div className="max-[900px]:w-[70vw] w-[40vw]
				dark:shadow-[inset_0px_0px_1px_white] shadow-[inset_0px_0px_1px_black] 
			dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px]
				rounded-[1vw] overflow-hidden z-2 px-[3vw] py-[2vw] max-[600px]:pb-[6vw] mt-[2vw]">
				<form>
					<label className="font-bold text-black dark:text-white text-[0.8rem]">Nome</label>
					<input
						name="nome"
						value={form.nome}
						onChange={handleChange}
						className="border-black dark:border-white text-black mb-[1vw] dark:text-white border-1 py-2 rounded-xl w-full px-5"
						required
					/>

					<label className="font-bold text-black dark:text-white text-[0.8rem]">Email</label>
					<input
						name="email"
						type="email"
						value={form.email}
						onChange={handleChange}
						className="border-black dark:border-white text-black mb-[1vw] dark:text-white border-1 py-2 rounded-xl w-full px-5"
						required
					/>

					<label className="font-bold mt-5 text-black dark:text-white text-[0.8rem]">Mensagem</label>
					<textarea
						name="mensagem"
						value={form.mensagem}
						onChange={handleChange}
						className="border-black dark:border-white text-black dark:text-white textarea border-1 py-2 rounded-xl w-full px-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent"
						required
					/>

					<div className="w-full flex items-center justify-center">
						<button 
							className="bg-[#000568] cursor-pointer font-bold rounded-[10px] px-[2rem] py-[0.3rem]"
							type="submit">
							Enviar
						</button>
					</div>
				</form>

				<motion.p 
					initial={{ opacity: 0, x: -100}} 
					whileInView={{ opacity: 1.2, x: 0}} 
					transition={{ duration: 1, ease: "easeOut" }} 
					className="font-bold text-center text-black text-[1.5vw] max-[900px]:text-[3vw] dark:text-white mt-5">
				Fale comigo</motion.p>

				<motion.div className="flex w-full flex-row mt-5 justify-center items-center gap-4">
					<motion.button whileHover={{ opacity: 1, scale:1.2}} transition={{ duration: 1, ease: "easeOut" }} onClick={() => window.open("https://wa.me/5592991556772", "_blank")}>
						<Image className="w-8 cursor-pointer" src={Whatsapp} alt="whatsapp"/>
					</motion.button>

					<motion.button whileHover={{ opacity: 1, scale:1.2}} transition={{ duration: 1, ease: "easeOut" }} onClick={() => window.open("https://www.linkedin.com/in/cec%C3%ADlia-costa-da-silva-595686350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}>
						<Image className="w-8 cursor-pointer" src={Linkedin} alt="linkedin"/>
					</motion.button>

					<motion.button whileHover={{ opacity: 1, scale:1.2}} transition={{ duration: 1, ease: "easeOut" }} onClick={() => window.open("https://www.instagram.com/ceciliadesignn?igsh=ZGcyazNnbnlpdnk5", "_blank")}>
						<Image className="w-8 cursor-pointer" src={Instagram} alt="instagram"/>
					</motion.button>

					<motion.button whileHover={{ opacity: 1, scale:1.2}} transition={{ duration: 1, ease: "easeOut" }} onClick={() => window.open("mailto:ceciliadsgr@gmail.com")}> 
						<Image className="w-8 cursor-pointer" src={Gmail} alt="gmail"/>
					</motion.button>
				</motion.div>
			</div>

			<Image
				src={fundo}
				alt="fundo"
				className="w-full z-[1] absolute noselect bottom-0"
			/>
		</section>
	)
}