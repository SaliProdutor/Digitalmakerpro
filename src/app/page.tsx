"use client"
import Button from "@/components/button";
import { useEffect } from "react";

export default function Home() {


  return (
    <main className="">
      {/* Banner topo */}
      <div id="topo" data-section="topo" className='flex bg-purple-secundary h-screen w-screen items-center px-24 gap-8'>
          <div className="flex w-[50%] flex-col cursor-default">
            <h1 className='text-green-primary font-bold text-[4rem] font-extrabold leading-none overflow-hidden'>SUA MARCA</h1>
            <h2 className='text-white font-light text-[1.7rem] leading-none'>nossas soluções personalizadas</h2>
            <p className='text-white opacity-[.7] pt-8'>Na Digital Maker, não apenas oferecemos serviços de marketing; 
oferecemos uma parceria estratégica para o crescimento personalizado 
da sua marca. Seja qual for a sua visão, estamos aqui para transformá-la em realidade.</p>
            <div className="flex flex-row gap-4 pt-12">
              <Button name="Soluções" link="#solucoes" preenchido color="green-primary"/>
              <Button name="Sobre" link="#sobre" color="white"/>
            </div>
          </div>
          <div className="flex w-[50%] justify-center items-center flex-col ">
          <h1 className='text-white'>Direita</h1>
          </div>
      </div>
      {/* Soluções */}
      <div id="solucoes" data-section="solucoes" className='flex bg-green-primary h-screen w-screen justify-center items-center'>
          <h1 className='text-white'>Soluções</h1>
      </div>
      {/* Sobre */}
      <div id="sobre" data-section="sobre" className='flex bg-black h-screen w-screen justify-center items-center'>
          <h1 className='text-white'>Sobre</h1>
      </div>
      {/* Feedback */}
      <div id="feedback" data-section="feedback" className='flex bg-green-primary h-screen w-screen justify-center items-center'>
          <h1 className='text-white'>Feedbacks</h1>
      </div>
    </main>
  )
}
