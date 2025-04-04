import { motion } from 'framer-motion'
import styles from './styles.module.css'
import Luz from '../../assets/luz.svg'

import python from '../../assets/languages/python.svg'
import Javascript from '../../assets/languages/JS.svg'
import Typescript from '../../assets/languages/TS.svg'
import Sql from '../../assets/languages/SQL.svg'
import Java from '../../assets/languages/JAVA.svg'
import css from '../../assets/languages/CSS.svg'
import html from '../../assets/languages/HTML.svg'
import c from '../../assets/languages/C.svg'

import { useTheme } from 'next-themes'

import AndroidStudio from '../../assets/APIs/android.svg'
import ReactNativve from '../../assets/APIs/React.svg'
import Express from '../../assets/APIs/ex.svg'
import MongoDB from '../../assets/APIs/mongo.svg'
import MySql from '../../assets/APIs/mySq.svg'
import NestJS from '../../assets/APIs/nest2.svg'
import NextJs from '../../assets/APIs/Next.svg'
import Postgree from '../../assets/APIs/post.svg'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import TextAnimated from '@/components/TextAnimated'

const ItemLanguage = ({image, label, href, index}:{image:string, label:string, href:string, index:number}) => {
	return(
		<div className='flex flex-col items-center'>
			<motion.a 
				initial={{x:-50, opacity:0}}
				whileInView={{x:0, opacity:1}}
				transition={{duration:1, delay:index*0.2, type:'spring'}}
			
				href={href} 
				target="_blank" 
				rel="noopener noreferrer"
				className='cursor-pointer dark:hover:bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(0,0,0,0.1)] rounded-[5px] p-1'>
				<Image src={image} className={`max-[601px]:h-[12vw] max-[900px]:h-[5vw] h-[3vw] justify-self-start ${styles.noselect}`} alt={label}/>
			</motion.a>
			<TextAnimated delay={index * 0.2} className='text-[1vw] max-[900px]:text-[1.5vw] max-[601px]:text-[3.4vw] font-medium text-black dark:text-white' text={label}/>
		</div>
	)
}

const ItemBackend = ({ image, label, href, index}: { image: string, index:number, label: string, href: string }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isNextJsLight = label === "Next.js" && theme === 'light'
  const isExpressJsDark = label === "Express.js" && theme === 'dark'

  return (
    <div className='flex flex-col items-center'>
      <motion.a 
				initial={{x:-50, opacity:0}}
				whileInView={{x:0, opacity:1}}
				transition={{duration:1, delay:index*0.2, type:'spring'}}

				href={href} target="_blank" rel="noopener noreferrer"
        className='cursor-pointer flex items-center justify-center max-[601px]:h-[14vw] max-[900px]:h-[5vw] h-[4vw] 
        dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.1)] rounded-[5px] p-1'>
        {mounted ? (
          <Image
            src={image}
            className={`max-[601px]:w-[14vw] max-[900px]:w-[5vw] w-[4vw] ${isNextJsLight || isExpressJsDark ? styles.image : ''} ${styles.noselect}`}
            alt={label}
          />
        ) : (
          <div className="w-[4vw] h-[4vw] bg-gray-200 dark:bg-gray-800 rounded-[5px] animate-pulse" />
        )}
      </motion.a>

			<TextAnimated delay={index * 0.2} className='text-[1vw] text-center max-[900px]:text-[1.5vw] max-[601px]:text-[3.4vw] font-medium text-black dark:text-white' text={label}/>
    </div>
  )
}

const TextType = ({ text, className = '' }: { text: string; className?: string }) => {
  const [words, setWords] = useState<Array<{ word: string; key: string }>>([])

  useEffect(() => {
    setWords(
      text.split(' ').map((word, index) => ({
        word: word + ' ', 
        key: `word_${index}_${Math.random().toString(36).substring(2, 9)}`
      }))
    )
  }, [text])

  return (
    <motion.div 
      className={`flex flex-wrap max-[900px]:justify-center`}
      style={{ whiteSpace: 'pre-wrap' }}
    >
      {words.map(({ word, key }, index) => (
        <motion.span
          key={key}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
					className={className}
          transition={{
            delay: index * 0.05,
            type: 'spring',
            stiffness: 100,
            damping: 10
          }}
          style={{ display: 'inline-block' }} 
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
const ItemFrontEnd = ({image, label, href, index}:{image:string, label:string, href:string, index:number}) => {
	const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isNextJsLight = label === "Next.js" && theme === 'light'
  const isExpressJsDark = label === "Express.js" && theme === 'dark'

	return(
		<div className='flex flex-col items-center'>
			<motion.a 
				initial={{x:-50, opacity:0}}
				whileInView={{x:0, opacity:1}}
				transition={{duration:1, delay:index*0.2, type:'spring'}}
				href={href} target="_blank" rel="noopener noreferrer" className='cursor-pointer flex items-center justify-center max-[601px]:h-[20vw] max-[901px]:h-[6vw] h-[7vw] dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.1)] rounded-[5px] p-1'>
					{mounted ? (
							<Image
								src={image}
								className={`max-[601px]:w-[18vw] max-[901px]:w-[6vw] w-[7vw] ${isNextJsLight || isExpressJsDark ? styles.image : ''} ${styles.noselect}`}
								alt={label}
							/>
						) : (
							<div className="w-[4vw] h-[4vw] bg-gray-200 dark:bg-gray-800 rounded-[5px] animate-pulse" />
						)}
			</motion.a>

			
			<TextAnimated delay={index * 0.2} className='text-[1vw] text-center max-[900px]:text-[1.5vw] max-[601px]:text-[3.4vw] font-medium text-black dark:text-white' text={label}/>
		</div>
	)
}

export default function Sobre(){
	return(
		<section className="w-full mt-[16vw] z-2 flex items-center flex-col" id="sobre">
			<div className='flex flex-col items-center'>
				<motion.h1
					initial={{scaleX:0}}
					whileInView={{scaleX:1}}
					transition={{type:'spring', duration:1}}
					className='max-[600px]:text-[7vw] text-[5vw] text-black dark:text-white pt-10 z-2 font-bold'	
				>Sobre mim</motion.h1>
				<motion.p
					initial={{scaleX:0}}
					whileInView={{scaleX:1}}
					transition={{type:'spring', duration:1}}
					className='max-[600px]:text-[2.5vw] text-[1.5vw] z-3 mt-[-1vw] text-black dark:text-white'	
				>Programador Full stack.</motion.p>

				<div className='flex flex-row justify-between w-full items-center'>
					<motion.p
						initial={{opacity:0}}
						whileInView={{opacity:1}}
						transition={{type:'spring', delay:1}}
						className='max-[600px]:text-[1.5vw] text-[0.8vw] dark:text-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)]'>2022</motion.p>
					<motion.div 
						initial={{scaleX:0}}
						whileInView={{scaleX:1}}
						transition={{type:'spring', duration:1.2, delay:0.2}}
						className='h-[0.1vw] dark:bg-[rgba(255,255,255,0.5)] bg-[rgba(0,0,0,0.7)] w-full'/>
					<motion.p 
						initial={{opacity:0}}
						whileInView={{opacity:1}}
						transition={{type:'spring', delay:1}}
						className='max-[600px]:text-[1.5vw] text-[0.8vw] dark:text-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)]'>2025</motion.p>
				</div>
			</div>

			<div className='flex mt-16 flex-row max-[900px]:flex-col px-5 justify-between w-full items-center'>

				<div className='w-[30%] max-[900px]:w-full'>
					<TextType className='text-black dark:text-white max-[900px]:mb-5' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book" />
				</div>

				<div className='flex flex-row flex-wrap max-[600px]:w-[calc(90vw)] max-[600px]:gap-[6vw] max-[900px]:w-[calc(80vw+20px)] w-[calc(60vw+20px)] gap-x-[20px] gap-y-[2vw]'>
					<div className={`${styles.container} dark:shadow-[inset_0px_0px_1px_white] shadow-[inset_0px_0px_1px_black]  bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]`}>
						<Image src={Luz} alt='luz' className={`${styles.noselect} absolute top-[-0.85vw] max-[600px]:top-[-2.3vw] max-[600px]:w-[28vw] max-[900px]:top-[-1.14vw] max-[900px]:w-[13vw] w-[10vw]`}/>
						
						<div className='flex gap-2 items-center'>
							<svg xmlns="http://www.w3.org/2000/svg" className='max-[600px]:w-[5vw] w-[2vw]' viewBox="0 0 23 23" fill="none">
								<g clipPath="url(#clip0_350_281)">
								<path d="M19.452 20.0042C19.452 20.3071 19.2065 20.5527 18.9034 20.5527H18.0225H16.1939H2.89387C1.86035 20.5527 1.01959 19.7119 1.01959 18.6785V16.6208C1.01959 15.5874 1.86035 14.7466 2.89387 14.7466H16.1939H18.0225H18.9034C19.2065 14.7466 19.452 14.9922 19.452 15.2951C19.452 15.5981 19.2065 15.8437 18.9034 15.8437H18.5711V19.4556H18.9034C19.2065 19.4556 19.452 19.7012 19.452 20.0042ZM21.8016 13.4867C21.8016 13.7896 21.556 14.0353 21.253 14.0353H20.4279H18.5434H7.50963C6.54851 14.0353 5.76668 13.2534 5.76668 12.2924V10.8281C5.76668 9.86705 6.54851 9.08521 7.50963 9.08521H18.5433H20.4278H21.2529C21.5559 9.08521 21.8015 9.33086 21.8015 9.63379C21.8015 9.93672 21.5559 10.1824 21.2529 10.1824H20.9764V12.9381H21.2529C21.556 12.9381 21.8016 13.1837 21.8016 13.4867ZM7.50963 12.9381H18.5433H19.8792V10.1823H18.5433H7.50963C7.1536 10.1823 6.86384 10.4719 6.86384 10.8279V12.2923C6.86395 12.6485 7.1536 12.9381 7.50963 12.9381ZM22.4514 2.44739H17.7524H5.24772H0.54858C0.245545 2.44739 0 2.69304 0 2.99597C0 3.29889 0.245545 3.54455 0.54858 3.54455H1.01959V8.23579C0.768451 8.41013 0.603329 8.70022 0.603329 9.02849C0.603329 9.5605 1.03616 9.99333 1.56817 9.99333C2.10019 9.99333 2.53302 9.5605 2.53302 9.02849C2.53302 8.70022 2.36789 8.41024 2.11675 8.23579V3.54455H4.69914V7.86967C4.69914 8.17259 4.94468 8.41825 5.24772 8.41825H17.7524C18.0554 8.41825 18.301 8.17259 18.301 7.86967V3.54455H22.4514C22.7545 3.54455 23 3.29889 23 2.99597C23 2.69304 22.7545 2.44739 22.4514 2.44739Z" fill="#1F3EF5"/>
								</g>
								<defs>
								<clipPath id="clip0_350_281">
								<rect width="23" height="23" fill="white"/>
								</clipPath>
								</defs>
							</svg>
							<h1 className='font-bold text-[1.5vw] max-[601px]:text-[4vw] max-[900px]:text-[2vw] text-[#1F3EF5]'>Formação</h1>
						</div>

						<div className='flex flex-col relative'>
							<div className='w-full flex flex-row'>
								<div className='flex flex-col items-center max-[601px]:w-[5vw] w-[2vw]'>
									<div className='w-[1vw] h-[1vw] max-[601px]:w-[3vw] max-[601px]:h-[3vw] bg-[#1F3EF5] rounded-full'/>
									<div className='w-[2px] flex-1 bg-[#1F3EF5]'/>
								</div>

								<div className='flex-1 max-[600px]:pb-[6vw] pb-[1.5vw]'>
									<TextAnimated className='text-[1.2vw] font-bold max-[900px]:text-[1.5vw] max-[601px]:text-[3.7vw] text-black dark:text-white' text="Fundação Matias Machline" />
									<TextAnimated className='text-[1vw] max-[900px]:text-[1.5vw] max-[601px]:text-[3vw] font-light text-[rgba(0,0,0,0.7)] dark:text-[rgba(255,255,255,0.5)]' text="2022 | 2024" />
									<TextAnimated className='text-[1vw] max-[900px]:text-[1.5vw] max-[601px]:text-[3.4vw] font-medium text-black dark:text-white' text="Técnico em informática" />		
								</div>
							</div>

							<div className='w-full flex flex-row'>
								<div className='flex  flex-col items-center max-[601px]:w-[5vw] w-[2vw]'>
									<div className='w-[1vw] h-[1vw] max-[601px]:w-[3vw] max-[601px]:h-[3vw] bg-[#1F3EF5] rounded-full'/>
									<div className='w-[2px] flex-1 bg-[#1F3EF5]'/>
								</div>

								<div className='flex-1'>
									<TextAnimated className='text-[1.2vw] font-bold max-[900px]:text-[1.5vw] max-[601px]:text-[3.7vw] text-black dark:text-white' text="Universidade Federal do Amazonas" />
									<TextAnimated className='text-[1vw] max-[900px]:text-[1.5vw] max-[601px]:text-[3.4vw] font-light text-[rgba(0,0,0,0.7)] dark:text-[rgba(255,255,255,0.5)]' text="2025 | 2028" />
									<TextAnimated className='text-[1vw] max-[900px]:text-[1.5vw] max-[601px]:text-[3.4vw] font-medium text-black dark:text-white' text="Graduando em Ciência da computação" />
								</div>
							</div>
							
						</div>
					</div>

					<div className={`${styles.container} flex flex-col dark:shadow-[inset_0px_0px_1px_white] shadow-[inset_0px_0px_1px_gray]  bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]`}>
						<Image src={Luz} alt='luz' className={`${styles.noselect} absolute top-[-0.85vw] max-[600px]:top-[-2.3vw] max-[600px]:w-[28vw] max-[900px]:top-[-1.14vw] max-[900px]:w-[13vw] w-[10vw]`}/>
						
						<div className='flex gap-2 items-center'>
							<svg xmlns="http://www.w3.org/2000/svg" className='max-[600px]:w-[5.5vw] w-[2.5vw]'viewBox="0 0 28 22" fill="none">
								<path d="M3.375 6C3.375 4.80383 3.37632 3.96956 3.46095 3.3401C3.54316 2.72862 3.69354 2.40481 3.92418 2.17418C4.15481 1.94354 4.47862 1.79316 5.0901 1.71095C5.71956 1.62632 6.55383 1.625 7.75 1.625H20.25C21.4461 1.625 22.2805 1.62632 22.9099 1.71095C23.5214 1.79316 23.8452 1.94354 24.0759 2.17418C24.3065 2.40481 24.4569 2.72862 24.539 3.3401C24.6236 3.96956 24.625 4.80383 24.625 6V16.625H3.375V6Z" stroke="#1F3EF5" strokeWidth="2.5"/>
								<path d="M3.58334 16.625C2.77791 16.625 2.125 17.2779 2.125 18.0834C2.125 19.349 3.15101 20.375 4.41666 20.375H23.5834C24.849 20.375 25.875 19.349 25.875 18.0834C25.875 17.2779 25.2221 16.625 24.4166 16.625H3.58334Z" stroke="#1F3EF5" strokeWidth="2.5"/>
							</svg>
							<h1 className='font-bold text-[1.5vw] max-[601px]:text-[4vw] max-[900px]:text-[2vw] text-[#1F3EF5]'>Linguagens</h1>
						</div>

						<div className='flex-1 mx-[-1vw] mt-[1vw] grid grid-cols-4 grid-rows-2'>
								<ItemLanguage index={1} href='https://sqldocs.org/' image={Sql} label='Sql'/>
								<ItemLanguage index={2} href='https://docs.python.org/3/' image={python} label='Python'/>
								<ItemLanguage index={3} href='https://devdocs.io/javascript/' image={Javascript} label='Javascript'/>
								<ItemLanguage index={4} href='https://www.typescriptlang.org/docs/' image={Typescript} label='Typecript'/>

								<ItemLanguage index={5} href='https://devdocs.io/css/' image={css} label='CSS'/>
								<ItemLanguage index={6} href='https://devdocs.io/html/' image={html} label='HTML'/>
								<ItemLanguage index={7} href='https://devdocs.io/c/' image={c} label='C'/>
								<ItemLanguage index={8} href='https://docs.oracle.com/en/java/' image={Java} label='Java'/>
						</div>

					</div>

					<div className={`${styles.container} dark:shadow-[inset_0px_0px_1px_white] shadow-[inset_0px_0px_1px_black]  bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]`}>
						<Image src={Luz} alt='luz' className={`${styles.noselect} absolute top-[-0.85vw] max-[600px]:top-[-2.3vw] max-[600px]:w-[28vw] max-[900px]:top-[-1.14vw] max-[900px]:w-[13vw] w-[10vw]`}/>
						
						<div className='flex gap-2 items-center'>
							<svg xmlns="http://www.w3.org/2000/svg" className='max-[600px]:w-[5vw] w-[2.5vw]' viewBox="0 0 26 26" fill="none">
								<path d="M24 20.6098C25.1046 20.6098 26 19.7143 26 18.6098V3.58533C26 2.48076 25.1046 1.58533 24 1.58533H2C0.89543 1.58533 0 2.48076 0 3.58533V18.6097C0 19.7143 0.895431 20.6097 2 20.6097H8.56099C9.08632 20.6097 9.51219 21.0356 9.51219 21.5609C9.51219 22.0863 9.08632 22.5121 8.56098 22.5121H8.2439C7.71857 22.5121 7.2927 22.938 7.2927 23.4633C7.2927 23.9887 7.71857 24.4145 8.2439 24.4145H17.7561C18.2814 24.4145 18.7073 23.9887 18.7073 23.4633C18.7073 22.938 18.2814 22.5121 17.7561 22.5121H17.439C16.9137 22.5121 16.4878 22.0863 16.4878 21.5609C16.4878 21.0356 16.9137 20.6097 17.439 20.6097L24 20.6098ZM14.5853 21.561C14.5853 22.0863 14.1595 22.5122 13.6341 22.5122H12.3658C11.8405 22.5122 11.4146 22.0863 11.4146 21.561C11.4146 21.0356 11.8405 20.6098 12.3658 20.6098H13.6341C14.1595 20.6098 14.5853 21.0356 14.5853 21.561ZM3.90242 18.7073C2.79785 18.7073 1.90242 17.8119 1.90242 16.7073V5.48779C1.90242 4.38322 2.79785 3.4878 3.90242 3.4878H22.0975C23.2021 3.4878 24.0975 4.38323 24.0975 5.4878V16.7073C24.0975 17.8119 23.2021 18.7073 22.0975 18.7073H3.90242Z" fill="#1F3EF5"/>
								<path d="M17.1606 7.57129L15.8154 8.91643L17.9965 11.0975L15.8154 13.2786L17.1606 14.6237L20.6869 11.0975L17.1606 7.57129Z" fill="#1F3EF5"/>
								<path d="M10.1849 8.91643L8.83978 7.57129L5.31348 11.0975L8.83978 14.6237L10.1849 13.2786L8.00387 11.0975L10.1849 8.91643Z" fill="#1F3EF5"/>
								<path d="M13.2696 6L11 16.7805H12.9443L15.2139 6H13.2696Z" fill="#1F3EF5"/>
							</svg>
							<h1 className='font-bold text-[1.5vw] max-[601px]:text-[4vw] max-[900px]:text-[2vw] text-[#1F3EF5]'>Back-end</h1>
						</div>
					
						<div className='flex-1 flex flex-row justify-between items-center pt-2'>
							<div className='flex flex-col items-center gap-2'>
								<ItemBackend index={1} href='https://www.postgresql.org/docs/' image={Postgree} label='PostgreeSQL'/>
								<ItemBackend index={2} href='https://dev.mysql.com/doc/' image={MySql} label='Mysql'/>
							</div>

							<div className='flex flex-col items-center gap-2'>
								<ItemBackend index={3} href='https://www.mongodb.com/pt-br/docs/?msockid=17db215a5b8366663f1c32e55a156716' image={MongoDB} label='MongoDb'/>
								<ItemBackend index={4} href='https://nextjs.org/docs/pages/building-your-application/routing/api-routes' image={NextJs} label='Next.js'/>
							</div>

							<div className='flex flex-col items-center gap-2'>
								<ItemBackend index={5} href='https://docs.nestjs.com/' image={NestJS} label='Nest.js'/>
								<ItemBackend index={6} href='https://expressjs.com/' image={Express} label='Express.js'/>	</div>					
							</div>
					</div>

					<div className={`${styles.container} dark:shadow-[inset_0px_0px_1px_white] shadow-[inset_0px_0px_1px_black]  bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]`}>
						<Image src={Luz} alt='luz' className={`${styles.noselect} absolute top-[-0.85vw] max-[600px]:top-[-2.3vw] max-[600px]:w-[28vw] max-[900px]:top-[-1.14vw] max-[900px]:w-[13vw] w-[10vw]`}/>
						
						<div className='flex gap-2 items-center'>
							<svg xmlns="http://www.w3.org/2000/svg" className='max-[600px]:w-[5vw] w-[3vw]' viewBox="0 0 41 27" fill="none">
								<path d="M15.2789 0.607422C18.1617 0.607422 20.5 2.9457 20.5 5.82852C20.5 8.71133 18.1617 11.0496 15.2789 11.0496C12.3961 11.0496 10.0578 8.71133 10.0578 5.82852C10.0578 2.9457 12.3961 0.607422 15.2789 0.607422ZM38.5016 11.8984L34.3535 24.0863H28.0594C28.0594 22.5168 26.8742 21.3477 25.2246 21.3477H15.4551C15.4551 21.3477 13.2289 13.7883 12.0437 11.8664C11.275 10.6172 10.0898 9.83242 8.53633 9.83242C6.13398 9.83242 4.32422 11.8184 3.01094 14.6852C1.40937 18.1766 0.496484 22.3246 0.320312 26.3926H35.1543C35.6508 26.3926 36.0992 26.0723 36.2594 25.5918L40.6797 12.6352L38.5016 11.8984Z" fill="#1F3EF5"/>
							</svg>
							<h1 className='font-bold text-[1.5vw] max-[601px]:text-[4vw] max-[900px]:text-[2vw] text-[#1F3EF5]'>Front-end</h1>
						</div>
						
		
						<div className='flex-1 flex flex-row justify-between items-center'>
							<ItemFrontEnd index={1} href='https://developer.android.com/develop?hl=pt-br' image={AndroidStudio} label='Android Studio'/>
							<ItemFrontEnd index={2} href='https://reactnative.dev/' image={ReactNativve} label='React Native'/>
							<ItemFrontEnd index={3} href='https://nextjs.org/docs' image={NextJs} label='Next.js'/>	
						</div>	
						
					</div>
				</div>
			</div>
		</section>
	)
}