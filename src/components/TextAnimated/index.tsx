import {motion} from 'framer-motion'

type props = {
	className : string;
	text: string,
	delay?:number
}

export default function TextAnimated({className, text, delay=0}:props){

	return(
		<motion.p>
			{
				text.split('').map((letter, index) => {
					return(
						<motion.span
							key={index}
							className={className}
							initial={{opacity:0}}
							
							whileInView={{opacity:1}}
							transition={{duration:1, delay: delay+index*0.2, type:'spring',}}
						>
							{letter}
						</motion.span>
					)
				})
			}
		</motion.p>
	)
}