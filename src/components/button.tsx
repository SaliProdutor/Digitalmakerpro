import Link from 'next/link'
import { useEffect, useState } from 'react';

interface Props {
  name: string,
  preenchido?: boolean, 
  color?: string,
  link?: any,
}

export default function Button({name, preenchido, link, color}:Props) {
  const [colorfontbtn, setColorFontbtn] = useState('');

  useEffect(()=>{
    if (color == 'green-primary'){
      setColorFontbtn('white')
    }
    if (color == 'green-secundary'){
      setColorFontbtn('white')
    }
    if (color == 'purple-primary'){
      setColorFontbtn('white')
    }
    if (color == 'purple-secundary'){
      setColorFontbtn('white')
    }
    if (color == 'black'){
      setColorFontbtn('white')
    }
    if (color == 'white'){
      setColorFontbtn('black')
    }
    if (color == null){
      setColorFontbtn('white')
    }
  })
  return (
    <div className={ 
      preenchido == true ? 
      `hover:border-${colorfontbtn} bg-${color} rounded-full px-4 py-2 relative cursor-pointer border-solid border-[1px] border-black hover:bg-transparent`
      :
      `hover:bg-${color} rounded-full px-4 py-2 relative cursor-pointer border-solid border-[1px] border-${color} hover:bg-${colorfontbtn}`
    }>
        
      <Link href={link} className={
        preenchido == true ?
        `text-${colorfontbtn} text-transform: capitalize font-light`
        :
        `text-${color} font-light`
    }>{name}</Link>
    </div>
  )
}
