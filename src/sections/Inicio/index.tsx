import './styles.css'
import robo from '../../assets/robo.svg'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Fundo from '../../assets/fundo (2).svg'

export default function Inicio(){
	return(
		<section id="inicio" className="h-[50vw] max-[600px]:h-[70vw] relative w-full overflow-x-clip items-center justify-center flex flex-col">
			<motion.div
				initial={{opacity:0}}
				whileInView={{ opacity: 1}}
				viewport={{once:true}}
				transition={{duration:1, type:'keyframes', delay:1}}
				className='absolute min-w-[160vw] max-[600px]:bottom-[-30vw] bottom-[-33vw]'
			>
				<Image src={Fundo} alt='fundo' className='w-full noselect'/>
			</motion.div>
			
			<div className='flex items-center flex-col relative'>
				<motion.h2 
					initial={{ clipPath: 'inset(0 50% 0 50%)', opacity: 0 }}
				
					transition={{type:'spring', duration:1, delay:0.5}}
					whileInView={{ clipPath: 'inset(0 0% 0 0%)', opacity: 1 }} 
					className='text_gradient'>
						Seja bem vindo(a) ao meu portfólio
				</motion.h2>

				<motion.h1
					initial={{ clipPath: 'inset(0 50% 0 50%)', opacity: 0 }}
					
					transition={{type:'spring', duration:1, delay:0.5}}
					whileInView={{ clipPath: 'inset(0 0% 0 0%)', opacity: 1 }} 
					className="text-black dark:text-white font-semibold max-[600px]:text-[4.5vw] text-[3.5vw]">
						Conectando ideias, transformando
				</motion.h1>

				<motion.div 
					initial={{ clipPath: 'inset(0 50% 0 50%)', opacity: 0 }}
					
					transition={{type:'spring', duration:1, delay:0.5}}
					whileInView={{ clipPath: 'inset(0 0% 0 0%)', opacity: 1 }}
					className="flex items-center relative">
					<h1 className="text-black dark:text-white font-semibold max-[600px]:text-[4.5vw] text-[3.5vw]">o mundo com tecn</h1>
					<svg xmlns="http://www.w3.org/2000/svg" className='max-[600px]:w-[5vw] w-[4vw]' viewBox="0 0 44 28" fill="none">
						<circle cx="14.001" cy="14" r="14" fill="#0D00FF"/>
						<circle cx="30.001" cy="14" r="14" fill="#FF0000"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M22.001 2.54442C18.4104 5.07797 16.0645 9.2644 16.0645 14C16.0645 18.7356 18.4104 22.922 22.001 25.4556C25.5916 22.922 27.9375 18.7356 27.9375 14C27.9375 9.26441 25.5916 5.07797 22.001 2.54442Z" fill="#FF0000"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M22.001 25.4556C25.5916 22.922 27.9375 18.7356 27.9375 14C27.9375 9.26441 25.5916 5.07797 22.001 2.54442C18.4104 5.07797 16.0645 9.2644 16.0645 14C16.0645 18.7356 18.4104 22.922 22.001 25.4556Z" fill="white"/>
					</svg>
					<h1 className="text-black dark:text-white font-semibold max-[600px]:text-[4.5vw] text-[3.5vw]">logia.</h1>
				</motion.div>

				<motion.p 
					initial={{ clipPath: 'inset(0 50% 0 50%)', opacity: 0 }}
					viewport={{once:true}}
					transition={{type:'spring', duration:1, delay:0.5}}
					whileInView={{ clipPath: 'inset(0 0% 0 0%)', opacity: 1 }} 
					className='text-[rgba(0,0,0,0.7)] w-[45vw] max-[600px]:w-[55vw] max-[600px]:text-[1.5vw] dark:text-[rgba(255,255,255,0.5)] text-center text-[1vw]'>Programação é a minha ferramenta para criar soluções que inovam e impactam. Cada linha de código é um passo em direção ao futuro.</motion.p>
				
				<motion.div
					initial={{x:100, opacity:0}}
					className='select-none max-[600px]:left-[-5vw] z-[-2] left-[-4vw] top-[3vw] absolute w-[10vw] max-[600px]:top-[6vw]'
					whileInView={{x:0, opacity:1}}
					viewport={{once:true}}
					transition={{duration:1, delay:1, type:'spring'}}
				>
					<Image src={robo} alt='robo' className='w-full'/>
				</motion.div>
			</div>			
		</section>
	)
}