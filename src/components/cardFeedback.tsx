import feedbacks from "@/database/feedbaks";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";
import Card from "./Cards/Card";



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
           
                <Card key={item.index} id={item.id} name={item.name} photo={item.photo} render={renderStars()} depoiment={item.depoiment}/>
      
        )
        })
 
    )
}