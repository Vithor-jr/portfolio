'use client'

import Header from "@/components/header";
import { poppins } from "./fonts";
import { useEffect, useState } from "react";
import Inicio from "@/sections/Inicio";
import Sobre from "@/sections/Sobre";
import Projetos from "@/sections/Projetos";
import Contatos from "@/sections/Contatos";

export default function Home() {
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
  }, []);

  return (
    <div className={`${poppins.className} w-full min-h-[100dvh] dark:bg-black bg-white`}>
      <Header/>
      <Inicio/>
      <Sobre/>
      <Projetos/>
      <Contatos/>
    </div>
  );
}
