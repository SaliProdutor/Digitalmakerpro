import Image from "next/image";

interface CardProps {
    id: number;
    photo: string;
    name: string;
    stars?: string;
    depoiment: string;
    render: any;
}
export default function Card({id, name, photo, render, depoiment}:CardProps){
    return(
        <div key={id} className="flex max-w-[95vw] h-[250px] shadow-2xl md:hover:scale-[1.01] transition-[1s] relative min-h-[30rem] overflow-hidden rounded-2xl flex-col justify-start items-center bg-purple-secundary cursor-default">
            <Image 
                src={photo != '' ? photo : '/sobre-sali.jpg'}
                alt={`foto ${name}`}
                width={100}
                height={100}
                quality="95"
                placeholder="empty"
                objectPosition="center top"
                className=" w-full h-full rounded-lg aspect-square object-cover overflow-hidden mb-8"
            />
            <div className="w-full absolute min-h-[14rem] bottom-0 p-4 bg-muted-foreground rounded-2xl">
                <h2 className="text-xl font-bold">{name}</h2>
                <div className="flex flex-row mb-4">{render}</div>
                <p className=" text-start">{depoiment.slice(0, 160)}</p>
            </div>
        </div>
    )
}