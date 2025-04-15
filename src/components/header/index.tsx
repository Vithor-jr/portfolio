import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Logo from "../logo";
import ThemeToggleButton from "../toogleTheme";
import { MdOutlineMenu } from "react-icons/md";
import { motion } from 'framer-motion';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [widthScreen, setWidthScreen] = useState<number>(0);
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex fixed top-0 w-full h-10 bg-[rgba(255,255,255,1)] dark:bg-[rgba(0,0,0,1)] z-15 items-center justify-center">
      <div className="absolute left-5 z-5">
        <Logo width={100} />
      </div>

      {widthScreen > 600 && (
        <nav className="flex flex-row items-center text-[12px] gap-[4.5vw] text-black dark:text-white">
          <motion.button
            initial={{ y: -100 }}
            transition={{ type: 'spring', delay: 0.2 }}
            animate={{ y: 0 }}
            className={`cursor-pointer 
							font-medium
							${
								visibleSection === 'inicio' ? 'text-white' : 'text-black dark:text-white '
							} px-2 rounded-2xl ${
              visibleSection === 'inicio' ? 'bg-[#000145]' : ''
            }`}
            onClick={() => scrollToSection('inicio')}
          >
            Home
          </motion.button>
          <motion.button
            initial={{ y: -100 }}
            transition={{ type: 'spring', delay: 0.4 }}
            animate={{ y: 0 }}
            className={`cursor-pointer
							font-medium
							${
								visibleSection === 'sobre' ? 'text-white' : 'text-black dark:text-white '
							} px-2 rounded-2xl ${
              visibleSection === 'sobre' ? 'bg-[#000145]' : ''
            }`}
            onClick={() => scrollToSection('sobre')}
          >
            Sobre
          </motion.button>
          <motion.button
            initial={{ y: -100 }}
            transition={{ type: 'spring', delay: 0.6 }}
            animate={{ y: 0 }}
            className={`cursor-pointer
							font-medium
							${
								visibleSection === 'projetos' ? 'text-white' : 'text-black dark:text-white '
							}
							 px-2 rounded-2xl ${
              visibleSection === 'projetos' ? 'bg-[#000145]' : ''
            }`}
            onClick={() => scrollToSection('projetos')}
          >
            Projetos
          </motion.button>
          <motion.button
            initial={{ y: -100 }}
            transition={{ type: 'spring', delay: 0.8 }}
            animate={{ y: 0 }}
            className={`cursor-pointer 
							font-medium
							${
								visibleSection === 'contatos' ? 'text-white' : 'text-black dark:text-white '
							}
							 px-2 rounded-2xl ${
              visibleSection === 'contatos' ? 'bg-[#000145]' : ''
            }`}
            onClick={() => scrollToSection('contatos')}
          >
            Contato
          </motion.button>
        </nav>
      )}

      <div className="absolute right-5 flex gap-2 items-center z-5">
        {mounted && <ThemeToggleButton />}

        {mounted && widthScreen < 600 && (
          <motion.button
            initial={{ y: -100 }}
            transition={{ type: 'spring', delay: 1.2 }}
            animate={{ y: 0 }}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          >
            <MdOutlineMenu className="text-black dark:text-white text-2xl" />
          </motion.button>
        )}
      </div>

      {open && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-[rgba(255,255,255,1)] dark:bg-[rgba(0,0,0,1)] top-10 w-full gap-2 py-2 flex items-center flex-col absolute border-y-2 z-1"
        >
          <button
            className={`cursor-pointer px-5 rounded font-medium ${
              visibleSection === 'inicio' ?'bg-[#000145]' : ''
            }
						${
              visibleSection === 'inicio' ? 'text-white' : 'text-black dark:text-white '
            }`}
            onClick={() => scrollToSection('inicio')}
          >
            Home
          </button>
          <button
            className={`cursor-pointer px-5 rounded font-medium ${
              visibleSection === 'sobre' ? 'bg-[#000145]' : ''
            }
						
						${
              visibleSection === 'sobre' ? 'text-white' : 'text-black dark:text-white '
            }`}
            onClick={() => scrollToSection('sobre')}
          >
            Sobre
          </button>
          <button
            className={`cursor-pointer px-5 rounded font-medium ${
              visibleSection === 'projetos' ? 'bg-[#000145]' : ''
            }
						${
              visibleSection === 'projetos' ? 'text-white' : 'text-black dark:text-white '
            }`}
            onClick={() => scrollToSection('projetos')}
          >
            Projetos
          </button>
          <button
            className={`cursor-pointer px-5 rounded font-medium
						${
              visibleSection === 'contatos' ? 'bg-[#000145]' : ''
            }
						${
              visibleSection === 'contatos' ? 'text-white' : 'text-black dark:text-white '
            }
						`}
            onClick={() => scrollToSection('contatos')}
          >
            Contato
          </button>
        </motion.div>
      )}
    </header>
  );
}