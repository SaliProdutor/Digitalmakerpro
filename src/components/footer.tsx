import Image from 'next/image'

export default function Footer() {
  //Function que adiciona o ano no rodapé do site
  const anoInicio:any = "2023";
  const anoAtual:any = new Date().getFullYear();
  const anoFooter:string = anoAtual > anoInicio ? `${anoInicio}-${anoAtual}` : anoInicio;
  // -- FIM DA FUNCTION ANO RODAPÉ -- //

  return (
    <div className='relative flex h-[5vh] w-full items-center justify-center -mt-[5vh]'>
      <p className='text-white text-[.8rem]'>&copy; {anoFooter} Digital Maker. Todos os direitos reservados.</p>
    </div>
  )
}
