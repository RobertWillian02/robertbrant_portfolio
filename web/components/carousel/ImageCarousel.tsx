
import React, {useState} from 'react'
import Data from './DataCarousel'
import Image from 'next/image';


export const ImageCarousel = () => {
    const [current,setCurrent] = useState(0)
    const length = Data.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1  : current - 1)
    }

    console.log(current)

    if(!Array.isArray(Data) || Data.length <= 0){
        return null;
    }
    return (
        <section className="relative h-94 flex justify-center items-center transition ease-out duration-2000">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 cursor-pointer hover:text-blue-500" onClick={prevSlide}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            
            {Data.map((slide,index) =>{
                return(
                    <div className={index=== current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<Image src={slide.image} alt="oi" className="rounded-lg" width={300} height={220} />)}
                        
                    
                    
                    </div>
                )
            })}

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 cursor-pointer hover:text-blue-500" onClick={nextSlide}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
        </section>
    )
}

export default ImageCarousel;
