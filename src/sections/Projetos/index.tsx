'use client';

import React, { useRef } from 'react';
import Projeto from '@/components/projeto';
import './styles.css'
import projetos from '../../data/projetos.json'

export default function Projetos() {
	
  return (
    <section id="projetos" className="w-full relative mt-[10vw] flex flex-col">
			{projetos.map((projeto, index) => (
        <Projeto
					key={index}
					link={projeto.link}
					isFirst={index === 0}
					isLast={index === projetos.length - 1} 
					titulo={projeto.titulo} 
					descricao={projeto.descricao} 
					ano={projeto.ano}
					video={projeto.video} 
					tecnologias={projeto.tecnologias}        
				/>
      ))}
    </section>
  );
}