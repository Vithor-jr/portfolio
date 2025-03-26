import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import {motion} from 'framer-motion'

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme()
		const [mounted, setMounted] = useState(false);
		

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
		
		useEffect(() => {
				setMounted(true);
		}, []);

		if(mounted){
			return (
        <motion.button initial={{y:-100}} transition={{type:'spring', delay:1}} animate={{y:0}} className='button cursor-pointer' onClick={toggleTheme}>
					{
						theme === 'dark' ? 
						<MdDarkMode className='text-2xl text-white'/> 
						: <MdLightMode className='text-2xl text-black'/>
					}
				</motion.button>
    )
		}
}
