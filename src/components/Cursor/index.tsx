// components/MagicCursor.tsx
"use client";

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  element: HTMLDivElement;
  life: number;
  velocity: {
    x: number;
    y: number;
  };
};

const MagicCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    if (!cursor) return;

    // Configurações
    const particleCount = 20;
    const particleSize = 4;
    const particleColor = '#0084FF';
    const particleSpeed = 0.5;

    // Movimento do cursor
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      // Criar nova partícula
      createParticle(e.clientX, e.clientY);
    };

    // Criar partícula
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.style.width = `${particleSize}px`;
      particle.style.height = `${particleSize}px`;
      particle.style.backgroundColor = particleColor;
      particle.style.borderRadius = '50%';
      particle.style.position = 'fixed';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '0';
      
      document.body.appendChild(particle);
      
      // Armazenar referência e animação
      const animation: Particle = {
        x: x,
        y: y,
        element: particle,
        life: 100, // Vida em frames
        velocity: {
          x: (Math.random() - 0.5) * particleSpeed,
          y: (Math.random() - 0.5) * particleSpeed
        }
      };
      
      particles.current.push(animation);
      
      // Limitar número de partículas
      if (particles.current.length > particleCount) {
        const oldParticle = particles.current.shift();
        if (oldParticle) {
          oldParticle.element.remove();
        }
      }
    };

    // Animação das partículas
    const animateParticles = () => {
      particles.current.forEach((p, index) => {
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        p.life--;
        
        p.element.style.left = `${p.x}px`;
        p.element.style.top = `${p.y}px`;
        p.element.style.opacity = (p.life / 100).toString();
        
        if (p.life <= 0) {
          p.element.remove();
          particles.current.splice(index, 1);
        }
      });
      
      requestAnimationFrame(animateParticles);
    };

    // Iniciar animação
    animateParticles();
    
    // Event listeners
    window.addEventListener('mousemove', moveCursor);
    
    // Limpeza
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      particles.current.forEach(p => p.element.remove());
      particles.current = [];
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        pointerEvents: 'none',
        zIndex: '-5',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference'
      }}
    />
  );
};

export default MagicCursor;