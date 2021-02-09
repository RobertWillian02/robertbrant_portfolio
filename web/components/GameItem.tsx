import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GameItemProps {
  href: string;
  img: string;
  title: string;
  genre: string;

}
const GameItem: React.FC<GameItemProps> = ({href, img, title, genre}) => {
  

  return (
      <div className="flex justify-center pt-5">
        <Link href={href} >
        <a target="blank" className="text-gray-100 font-bold  text-sm pl-2 ">

        
        <div className="w-80  bg-gradient-to-t from-gray-500 to-gray-500 rounded-lg pb-2 pr-2 pl-2 hover:from-blue-400 hover:to-purple-500 hover:text-gra-500 sm:w-52 " >

          <div className="flex justify-evenly pt-4 pr-1 sm:flex-col ">
            

              
                <div className=" flex justify-center">
                  <Image  src= {img} alt="rei" height = {110} width= {110}
                              className="rounded-full flex  " 
                              
                              />
                </div>
              
            

          <div className="" >
            <h3 className=" flex justify-center pt-3 ">{title}</h3>
            <h3 className=" flex justify-center pt-3 ">{genre}</h3>
          </div>

          </div>
          
        </div >
        </a>
        </Link>

      </div>
  );
}

export default GameItem;