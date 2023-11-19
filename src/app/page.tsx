"use client"
import Button from "@/components/button";
import { CardFeedback } from "@/components/cardFeedback";
import Image from "next/image";
import { useEffect } from "react";
import { FaBehance, FaInstagram, FaCode, FaCamera, FaFilm, FaPenNib } from 'react-icons/fa';
import { SiAnalogue } from "react-icons/si";

export default function Home() {
  useEffect(() => {
    // Verifica se há um fragmento na URL
    const hash = window.location.hash;
    if (hash) {
      // Remove o "#" do início do fragmento
      const targetId = hash.substring(1);

      // Encontra o elemento alvo usando o ID
      const targetElement = document.getElementById(targetId);

      // Scroll suave para o elemento alvo
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className="flex flex-col justify-center items-center w-screen">
      {/* Banner topo */}
      <div id="topo" data-section="topo" className='container flex justify-center items-center pt-[5rem] space-y-6 py-8 md:py-12 lg:py-32 bg-gradient-to-bl from-purple-primary to-purple-secundary min-w-full h-screen'>
        <div className="container flex max-w-[64rem] flex-col items-center text-center gap-4">
          <h1 className=' text-4xl md:text-6xl lg-text-7xl text-green-primary font-bold'>SUA MARCA</h1>
          <h2 className='text-white font-light text-[1.7rem] leading-none'>nossas soluções personalizadas</h2>
          <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            Na Digital Maker, não apenas oferecemos serviços de marketing; 
            oferecemos uma parceria estratégica para o crescimento personalizado 
            da sua marca. Seja qual for a sua visão, estamos aqui para transformá-la em realidade.</p>
          <div className="flex flex-row gap-4 pt-12">
            <Button name="Soluções" link="#solucoes" preenchido color="green-primary"/>
            <Button name="Sobre" link="#sobre" color="white"/>
          </div>
        </div>
      </div>
      {/* Sobre */}
      <div id="sobre" data-section="sobre" className="container grid justify-center items-center bg-gradient-to-bl from-green-primary to-green-secundary min-w-full" >
        <div className='container md:max-w-[64rem] md:py-12 lg:py-48'>
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
            <div className="lg:pl-20 flex justify-center">
              <div className="relative mx-w-xs px-2.5 lg:max-w-none">
                <Image 
                  src="/sobre-sali.jpg" 
                  alt="Sali Produtor" 
                  width={800} 
                  height={800} 
                  quality='95' 
                  priority={true} 
                  placeholder="blur"
                  blurDataURL="/sobre-sali.jpg"
                  className="aspect-square rotate-3 rounded-2xl bg-white object-cover overflow-hidden scale-[.8]"
                />
                <div className="absolute top-16 ml-2 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <FaCode/>
                  <a>Dev</a>
                </div>
                <div className="absolute top-20 right-2 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <FaFilm/>
                  <a>Filmaker</a>
                </div>
                <div className="absolute bottom-24 -right-4 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <FaCamera/>
                  <a>Fotográfo</a>
                </div>
                <div className="absolute bottom-32 -left-4 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <FaPenNib/>
                  <a>Design</a>
                </div>
                <div className="absolute bottom-0 right-0 mr-32 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <SiAnalogue />
                  <a>Gestor de tráfego</a>
                </div>
              </div>
            </div>
            <div className="lg:order-first sm:px-2 md:pt-8 lg:pt-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Sali Produtor</h1>
              <p className="mt-6 text-base text-dark-muted-foreground">Como é conhecido <span className="font-medium">Wellington Gabriel Ramos de Souza</span>, representa a essência da Digital Maker Pro, uma empresa que vai além do convencional, oferecendo soluções digitais verdadeiramente personalizadas. Sua abordagem centrada no cliente e sua habilidade em fornecer exatamente o que cada cliente precisa para atingir seus objetivos fazem da Digital Maker Pro a escolha ideal para empresas que buscam uma presença online impactante e eficaz.</p>
              <div className='mt-6 flex justify-center md:justify-start gap-6'>
                <a className='opacity-[.8] text-white text-2xl hover:opacity-[1] transition-2000' href="https://www.behance.net/sali_produtor" target="_blank" rel="noopener noreferrer">
                  <FaBehance/>
                </a>

                <a className='opacity-[.8] text-white text-2xl hover:opacity-[1] transition-2000' href="https://instagram.com/sali_produtor" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Soluções */}
      <div id="solucoes" data-section="solucoes" className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 '>
        <div className="relative overflow-hidden rounded-2xl border bg-white p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FaCode/>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border bg-white p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FaCode/>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border bg-white p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FaCode/>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border bg-white p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FaCode/>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border bg-white p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FaCode/>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border bg-white p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FaCode/>
          </div>
        </div>
      </div>
      
      {/* Feedback */}
      <div id="feedback" data-section="feedback" className='mx-auto grid justify-center gap-4 sm:grid-cols-0 sm:snap-y md:max-w-[64rem] md:grid-cols-3 min-w-full'>

            <CardFeedback/>

      </div>
    </main>
  )
}
