'use client'
import Image from 'next/image';
import ButtonHeader from './buttonHeader';
import ButtonContato from './buttonContato';
import { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  {
    path: "/#topo",
    name: "Início"
  },
  {
    path: "/#solucoes",
    name: "Soluções"
  },
  {
    path: "/#sobre",
    name: "Sobre"
  },
  {
    path: "/#feedback",
    name: "Feedbacks"
  },
]

export default function Header() {
  const [hoverLink, setHoverLink] = useState(`/${window.location.hash}`);
  const [sectionLink, setSectionLink] = useState(`/${window.location.hash}`);

  function atualiza(){
    setSectionLink(`/${window.location.hash}`);
    setTimeout(function() {
      setHoverLink(`/${window.location.hash}`)
    }, 100);
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[data-section]');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 5 && rect.bottom >= window.innerHeight / 5) {
          const sectionId = section.getAttribute('data-section');
          
          // Verifica se a navegação por scroll está ativa
          const isNavigating = Boolean(sessionStorage.getItem('isNavigating'));

          if (!isNavigating) {
            // Atualiza a URL com o ID da seção apenas se não houver navegação ativa
            window.history.pushState(null,'null' ,`#${sectionId}`);
            atualiza();
          }
        }
      });
    };

    // Adiciona um ouvinte de evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o ouvinte quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const handleButtonClick = (sectionId:any) => {
    // Marca que uma navegação está ativa para evitar a atualização da URL durante o scroll
    sessionStorage.setItem('isNavigating', 'true');

    // Atualiza a URL com o ID da seção
    window.history.pushState( null,'null', `#${sectionId}`);
    atualiza();

    // Limpa a marcação após um pequeno atraso
    setTimeout(() => {
      sessionStorage.removeItem('isNavigating');
    }, 100); // Ajuste conforme necessário
  };
  return (
      <Popover>
        <div className='fixed z-10 flex min-h-[5rem] w-full items-center justify-center bg-purple-primary sm:h-16'>
          <div className='flex h-16 sm:h-16 w-full items-center bg-purple-primary justify-between max-w-[80vw]'>
            <div className=''>
              <h1>Logo aqui</h1>
            </div>
            <div className=''>
              <nav className='hidden sm:flex relative gap-5 items-center md:gap-'>
                {
                  navLinks.map((item:any, index:any) => {
                      const isActive = item.path === sectionLink;
                      return (
                        <Link key={item.path} href={item.path} className={`text-white px-4 py-2 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-200 z-[2]" : "text-zinc-500 opacity-[.8]"}`}
                        onMouseOver={()=> setHoverLink(item.path)}
                        onMouseLeave={()=> setHoverLink(sectionLink)}
                        onClick={()=> setSectionLink(item.path)}
                        >
                          {item.name}
                          {item.path === hoverLink && (
                            <motion.div
                            className='absolute top-0 left-0 h-full bg-purple-secundary rounded-full -z-[1]'
                            layoutId='navbar'
                            aria-hidden="true"
                            style={{
                              width: "100%"
                            }}
                            transition={{
                              type: "spring",
                              bounce: 0.25,
                              stiffness: 100,
                              damping: 5,
                              duration: 0.8,
                            }}
                            >

                            </motion.div>
                          )}
                        </Link>
                      )
                  })
                }
                {/*
                <ButtonHeader link="#topo" active name="Início"/>
                <ButtonHeader link="#solucoes" name="Soluções"/>
                <ButtonHeader link="#sobre" name="Sobre"/>
                <ButtonHeader link="#feedback" name="Feedbacks"/>
                */}
              </nav>
            </div>
            <div className='hidden sm:block'>
              <ButtonContato active name="contato"/>
            </div>
            {/* MENU HAMBURGER */}
            <div className='flex grow items-center justify-end sm:hidden'>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-transparent outline-none text-white focus:outline-none'>
                <span className='sr-only'>Abrir menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden/>
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel focus className=' z-10 fixed inset-x-0 top-0 origin-top-right transform transition md:hidden'>
              <div className='flex h-screen rounded-lg bg-purple-primary shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-white'>
                <div className='flex items-start justify-start flex-col w-screen'>
                  <div className=' h-16 flex flex-row items-center justify-between w-screen px-8'>
                    <div className=''>
                      <h1>Logo aqui</h1>
                    </div>
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-purple-primary p-2 text-white hover:bg-white hover:text-purple-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Fechar menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden/>
                    </Popover.Button>
                  </div>
                  
                  <div className=' grid gap-y-8 mt-8 w-full px-4'>
                    <Popover.Button>
                      <a href="#topo" className='text-white' >Início</a>
                    </Popover.Button>
                    <Popover.Button>
                      <a href="#solucoes" className='text-white' >Soluções</a>
                    </Popover.Button>
                    <Popover.Button>
                      <a href="#sobre" className='text-white' >Sobre</a>
                    </Popover.Button>
                    <Popover.Button>
                      <a href="#feedback" className='text-white'>Feedbacks</a>
                    </Popover.Button>
                  </div>
                  <div className=' absolute bottom-8 px-4 w-full'>
                    <ButtonContato active name="contato"/>
                  </div>
                </div>
              </div>
            </Popover.Panel>
            </Transition>
          </div>
        </div>
      </Popover>
  )
}
