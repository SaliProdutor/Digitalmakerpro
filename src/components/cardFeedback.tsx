
import feedbacks from "@/database/feedbaks";
import Image from "next/image";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";


export function CardFeedback(){
    const dadosFeedbacks =  feedbacks

    

    return(
        dadosFeedbacks.slice(0, 3).map((item:any, index:any) => {
            const renderStars = () => {
                const renderedStars = [];
                const stars = item.stars;
                for (let i = 1; i <= 5; i++) {
                    // Verificar se a estrela está cheia, meio cheia ou vazia
                    if (i <= Math.floor(stars)) {
                      renderedStars.push(<FaStar className="text-purple-primary" key={i} />);
                    }else if (i - 0.5 <= stars && stars < i) {
                        // Se a diferença for menor ou igual a 0.5 e stars for menor que i,
                        // então a estrela está meio cheia
                        renderedStars.push(<FaStarHalfAlt className="text-purple-primary" key={`${i}-half`} />);
                    } else {
                      renderedStars.push(<FaRegStar className=" text-black/20" key={i} />);
                    }
                  }
              
                  return renderedStars;
                };
        return (
            <div key={index} className="gap-x-16 flex flex-col justify-start items-center h-full">
                <Image 
                src={item.photo != '' ? item.photo : '/sobre-sali.jpg'}
                alt={`foto ${item.name}`}
                width={500}
                height={500}
                quality="95"
                placeholder="empty"
                className=" w-40 h-40 rounded-lg aspect-square object-cover overflow-hidden mb-8"
                />
                <a className="text-xl font-bold">{item.name}</a>
                <div className="flex flex-row mb-8">{renderStars()}</div>
                <div className=" w-48">
                    <p className=" text-center">{item.depoiment}</p>
                </div>
                
            </div>
        )
        })
    )
}