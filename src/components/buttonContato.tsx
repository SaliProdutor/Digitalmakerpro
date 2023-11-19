import Image from 'next/image'

export default function ButtonContato({name, active}:any) {
  return (
    <div className={active == true ? 
      'flex justify-center items-center bg-green-primary rounded-full px-4 py-2 relative cursor-pointer hover:bg-purple-secundary'
    :
      'cursor-pointer flex justify-center items-center'
    }>
      <a className={active == true ? 
      'text-white-primary text-transform: capitalize text-[1rem]'
      :
      'text-white-primary hover:text-black text-transform: none text-[1rem]'
      } href='https://api.whatsapp.com/send?phone=5551997696794' target="_blank">{name}</a>
    </div>
  )
}
