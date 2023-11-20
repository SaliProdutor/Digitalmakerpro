"use client"
import Button from "@/components/button";
import { CardFeedback } from "@/components/cardFeedback";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaBehance, FaInstagram, FaCode, FaCamera, FaFilm, FaPenNib } from 'react-icons/fa';
import { FaMeta } from "react-icons/fa6";
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
    <main className="">
      {/* Banner topo */}
      <div id="topo" data-section="topo" className='container flex justify-center items-center pt-[5rem] py-16 md:py-12 lg:py-32 bg-gradient-to-bl from-purple-primary to-purple-secundary w-screen h-screen'>
        <div className="sm:w-[95vw] md:max-w-[64rem] p-8">
          <h1 className='text-4xl md:text-6xl lg:text-7xl text-green-primary font-bold'>SUA MARCA</h1>
          <h2 className='text-white font-light text-xl md:text-2xl lg:text:4xl'>nossas soluções personalizadas</h2>
            <p className='max-w-[32rem] pt-8 text-md text-muted-foreground'>
              Na Digital Maker, não apenas oferecemos serviços de marketing; 
              oferecemos uma parceria estratégica para o crescimento personalizado 
              da sua marca. Seja qual for a sua visão, estamos aqui para transformá-la em realidade.</p>
            <div className="flex flex-row gap-4 pt-12">
              <a href='/#solucoes' className="bg-green-primary md:hover:bg-green-primary py-2 px-4 rounded-full text-white md:hover:text-white md:hover:border-white border-green-primary border-[1px]">Soluções</a>
              <a href='/#sobre' className="bg-green-transparent md:hover:bg-green-primary py-2 px-4 rounded-full text-white md:hover:text-white md:hover:border-white border-white border-[1px]">Sobre</a>
            </div>
        </div>
      </div>
      {/* Sobre */}
      <div id="sobre" data-section="sobre" className="container pt-[5rem] grid justify-center items-center bg-gradient-to-bl from-green-primary to-green-secundary w-screen" >
        <div className='w-screen sm:w-[95vw] md:max-w-[64rem] p-8'>
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
            <div className="lg:pl-20 flex justify-center">
              <div className="relative mx-w-xs px-2.5 lg:max-w-none">
                <Image 
                  src="/sobre-sali.jpg" 
                  alt="Sali Produtor" 
                  width={100} 
                  height={100} 
                  quality='95' 
                  priority={true} 
                  placeholder="blur"
                  blurDataURL="/sobre-sali.jpg"
                  className="aspect-square rotate-3 rounded-2xl bg-white object-cover overflow-hidden scale-[.8]"
                />
                <div className="absolute top-16 -left-4 md-left-0 md:top-16 ml-2 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <FaCode/>
                  <p>Dev</p>
                </div>
                <div className="absolute top-16 -right-6 md:top-20 md:right-2 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <FaFilm/>
                  <p>Filmaker</p>
                </div>
                <div className="absolute bottom-24 -right-4 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <FaCamera/>
                  <p>Fotógrafo</p>
                </div>
                <div className="absolute bottom-24 md:bottom-32 -left-4 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <FaPenNib/>
                  <p>Design</p>
                </div>
                <div className="absolute bottom-0 right-0 mr-32 px-8 py-4 z-[2] bg-white rounded-2xl flex flex-row justify-center items-center gap-2 scale-[.7]">
                  <SiAnalogue />
                  <p>Gestor</p>
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
      <div id="solucoes" data-section="solucoes"  className='md:pt-[10rem] sm:pt-4 bg-white-primary w-screen py-16 flex flex-col gap-4 justify-center items-center'>
        <h1 className="font-bold text-2xl text-black mb-16">Principais Serviços</h1>
        <div className="p-2 grid-cols-2 md:p-8 mx-auto grid justify-between gap-2 sm:grid-cols-2 min-w-[95vw] md:min-w-[64rem] md:grid-cols-3 bg-muted-foreground rounded-2xl">
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <div className="flex cursor-default max-h-[180px] h-8 flex-row justify-between items-center rounded-md p-6 bg-green-primary">
              <FaCode/>
              <h2>Dev</h2>
            </div>
            <ul className="p-4 gap-2 cursor-default">
              <li className="text-lg md:text-base mb-2">Sites OnePage</li>
              <li className="text-lg md:text-base mb-2">Landing page</li>
              <li className="text-lg md:text-base mb-2">E-commerce</li>
              <li className="text-lg md:text-base mb-2">Site Institucional</li>
              <li className="text-lg md:text-base mb-2">Sistemas e Apps</li>
              <li className="text-lg md:text-base mb-2">SEO</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <div className="flex cursor-default max-h-[180px] h-8 flex-row justify-between items-center rounded-md p-6 bg-green-primary">
              <FaCamera/>
              <h2>Fotógrafo</h2>
            </div>
            <ul className="p-4 gap-2 cursor-default">
              <li className="text-lg md:text-base mb-2">Foto da empresa</li>
              <li className="text-lg md:text-base mb-2">Foto de produtos</li>
              <li className="text-lg md:text-base mb-2">Foto da equipe </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <div className="flex cursor-default max-h-[180px] h-8 flex-row justify-between items-center rounded-md p-6 bg-green-primary">
              <FaPenNib/>
              <h2>Desing</h2>
            </div>
            <ul className="p-4 gap-2 cursor-default">
              <li className="text-lg md:text-base mb-2">Logotipo</li>
              <li className="text-lg md:text-base mb-2">Identidade Visual</li>
              <li className="text-lg md:text-base mb-2">Artes impressas</li>
              <li className="text-lg md:text-base mb-2">Artes digitais</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <div className="flex cursor-default max-h-[180px] h-8 flex-row justify-between items-center rounded-md p-6 bg-green-primary">
              <FaFilm/>
              <h2>Filmaker</h2>
            </div>
            <ul className="p-4 gap-2 cursor-default">
              <li className="text-lg md:text-base mb-2">Video de produtos</li>
              <li className="text-lg md:text-base mb-2">Video Institucional</li>
              <li className="text-lg md:text-base mb-2">Reels para redes</li>
              <li className="text-lg md:text-base mb-2">Edição de conteúdo</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <div className="flex cursor-default max-h-[180px] h-8 flex-row justify-between items-center rounded-md p-6 bg-green-primary">
              <SiAnalogue/>
              <h2>Gestor</h2>
            </div>
            <ul className="p-4 gap-2 cursor-default">
              <li className="text-lg md:text-base mb-2">Campanhas</li>
              <li className="text-lg md:text-base mb-2">Tráfego pago</li>
              <li className="text-lg md:text-base mb-2">Google Ads</li>
              <li className="text-lg md:text-base mb-2">Google Meu Negócio</li>
              <li className="text-lg md:text-base mb-2">Gerenciado de Anúncios</li>
              <li className="text-lg md:text-base mb-2">Otimização de público</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <div className="flex cursor-default max-h-[180px] h-8 flex-row justify-between items-center rounded-md p-6 bg-green-primary">
              <FaMeta/>
              <h2>Social Media</h2>
            </div>
            <ul className="p-4 gap-2 cursor-default">
              <li className="text-lg md:text-base mb-2">Análise de métricas</li>
              <li className="text-lg md:text-base mb-2">Gestão de media</li>
              <li className="text-lg md:text-base mb-2">Agendamento de postagens</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Feedback */}
      <div id="feedback" data-section="feedback" className='md:pt-[10rem] sm:pt-4 flex gap-16 md:gap-8 flex-col items-center justify-center bg-gradient-to-bl from-purple-primary to-[#0b0929] md:max-w-full py-16'>
        <h1 className="text-white font-bold text-2xl">Feedbacks</h1>
        <div className="max-w-[64rem] mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 snap-x sm:p-8">
          <CardFeedback/>
        </div>
      </div>
    </main>
  )
}
