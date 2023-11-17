import Image from 'next/image'
import Link from 'next/link'


export default function ButtonHeader({name, active, link}:any) {
  return (
    active == true ?
    <div className='bg-purple-secundary rounded-full px-4 py-2 relative cursor-pointer'>
      <Link href={link} className='text-white-primary text-transform: capitalize'>{name}</Link>
    </div>
    :
    <div className='rounded-full px-4 py-2 relative cursor-pointer  opacity-[.5] hover:opacity-[1]'>
      <Link href={link} className='text-white-primary hover:text-white text-transform: none'>{name}</Link>
    </div>
  )
}
