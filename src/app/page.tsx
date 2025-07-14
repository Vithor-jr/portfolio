'use client'

import Header from "@/components/header";
import { poppins } from "./fonts";
import { useEffect, useState, useRef } from "react";
import Inicio from "@/sections/Inicio";
import Sobre from "@/sections/Sobre";
import Projetos from "@/sections/Projetos";
import Contatos from "@/sections/Contatos";
import { useTheme } from "next-themes";
import Alert from "@/components/alert";
import MagicCursor from "@/components/Cursor";
interface ChangeEvent {
  target: {
    name: string;
    value: string;
  };
}

interface SubmitEvent {
  preventDefault: () => void;
}


import emailjs from '@emailjs/browser';
import CardNeon from "@/components/cardNeon";

export default function Home() {
  const [widthScreen, setWidthScreen] = useState<number>(0);
  const {setTheme, theme} = useTheme()
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  
  useEffect(()=>{
    if(theme !== 'light' && theme !== 'dark'){
      setTheme('dark')
    }
  }, [])

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

  
  const handleChange = (e: ChangeEvent) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
  
    try {
      emailjs.init({
        publicKey: 'Jd50REb-AOm6ahMug',
        blockHeadless: true,
        blockList: {
          list: ['foo@emailjs.com', 'bar@emailjs.com'],
          watchVariable: 'userEmail',
        },
        limitRate: {
          id: 'app',
          throttle: 10000,
        },
      });
  
      emailjs.send(
        'service_0zgkcwj', 
        'template_5li2i6m', 
      {
        from_name: form.nome,
        from_email: form.email,
        message: form.mensagem,
        to_email: "vithorjr728@gmail.com"
      },).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  
      setAlert({ message: "E-mail enviado com sucesso!", type: 'success' });
      setForm({ nome: "", email: "", mensagem: "" });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setAlert({ message: "Erro ao enviar e-mail, tente novamente.", type: 'error' });
    }
  };

  const closeAlert = () => setAlert(null);

  
  return (
    <div className={`${poppins.className} relative overflow-x-hidden w-full min-h-[100dvh] dark:bg-black bg-white`}>
      {alert && <Alert message={alert.message} type={alert.type} onClose={closeAlert} />}
      <Header/>
      <Inicio/>
      <Sobre/>
      <Projetos/>
      <Contatos form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
  );

}
