import styles from "./styles.module.css"
import React, { useRef } from 'react';

export default function CardNeon () {
	 const boxRef = useRef<HTMLDivElement>(null);

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const box = boxRef.current;
  if (!box) return;

  const rect = box.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

	box.style.setProperty('--mouse-x', `${x}%`);
	box.style.setProperty('--mouse-y', `${y}%`);
};

const handleMouseLeave = () => {
  const box = boxRef.current;
  if (!box) return;

  box.style.setProperty('--mouse-x', '50%');
  box.style.setProperty('--mouse-y', '50%');
};


  return (
		<div>
			<div className="w-[150px] h-full bg-red-50"/>
			
			<div
				ref={boxRef}
				className={styles.glowBox}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			/>
    </div>
	)
}
