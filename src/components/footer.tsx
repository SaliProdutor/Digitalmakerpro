import Image from 'next/image'
import { FaBehance, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  //Function que adiciona o ano no rodapé do site
  const anoInicio:any = "2023";
  const anoAtual:any = new Date().getFullYear();
  const anoFooter:string = anoAtual > anoInicio ? `${anoInicio}-${anoAtual}` : anoInicio;
  // -- FIM DA FUNCTION ANO RODAPÉ -- //

  return (
    <div className='bg-gradient-to-t from-purple-primary to-purple-secundary flex flex-col'>
      {/* Logo Digital Maker */}
      <div className='px-16 flex justify-center items-center pb-32 pt-16 flex-col'>
      <Image
        src="/Logo.png"
        width={180}
        height={10}
        alt="Logo"
      />
      {/* Slugan */}
      <h2 className='mt-2 text-center text-white text-base font-bold opacity-[.9]'>Potencializando sua presença online</h2>
      <p className='mt-2 text-center text-white text-sm opacity-[.8]'>Estratégias personalizadas, resultados extraordinários!</p>
      
      {/* Icones sociais */}
      <div className='flex flex-row gap-8 mt-8'>
        <a className='opacity-[.8] text-white text-[1.5rem] hover:opacity-[1] transition-2000' href="https://www.behance.net/DigitalMakerPro" target="_blank" rel="noopener noreferrer">
          <FaBehance/>
        </a>

        <a className='opacity-[.8] text-white text-[1.5rem] hover:opacity-[1] transition-2000' href="https://instagram.com/digital_maker_pro" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
      </div>
      </div>

      {/* Copyright */}
      <div className='relative flex h-[5vh] w-full items-center justify-center -mt-[5vh] bg-purple-primary'>
        <p className='text-white text-[.8rem]'>&copy; {anoFooter} Digital Maker. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}
