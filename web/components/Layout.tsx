import React from 'react';;
import Image from 'next/image';
import GameItem from './GameItem';
import Header from './Header';
import Carousel from './carousel/ImageCarousel'
const Layout: React.FC = ({children}) => {


  return (
    <div className= "w-6/7  mx-auto px-4 sm:px-6 sm:w-6/7 lg:w-2/3">
      <Header/>

      <div className="w-full flex justify-center pt-10 pb-5">
        <div className="">
          <Image src="/img/RobertLogo.png" width={376} height={28.6}></Image>
        </div>
        
      </div>
        <div className=" pb-10 flex justify-center text-center text-lg sm:text-2xl">
          <p> Ilustrador Digital • Ilustrador Vetorial • Retrato Digital • Pixel Arte • Game Developer</p>
        </div>

      <div className="sm:flex justify-evenly flex-wrap">
        <GameItem
          href="https://scratch.mit.edu/projects/235764394/"
          img="/img/ShGame.png"
          title="WHEE1"
          genre="GENÉRICO"
          />

        <GameItem
          href="/"
          img="/img/Password.png"
          title="Password"
          genre="Puzzle"
          />

        <GameItem
          href="/"
          img="/img/ProtocolMidnight01 (1).png"
          title="Protocolo Midnight"
          genre="Investigação"
          />

        </div>
      
      <div className="flex justify-center">

      <div className="pb-20 w-full flex flex-col justify-center md:flex-row justify-evenly">

        <div className="pt-10 pb-10">
          <div className="flex justify-center"> 

          <Image className="rounded-full  flex justi" src="/img/gifHome.gif" width={360} height={204}/>

          </div>

          <h2 className="font-bold flex justify-center italic">"Toda arte tem um propósito" </h2>
          <h2 className=" flex justify-center italic">-Robert brant</h2>
        </div>
        
        <div className=" flex justify-center ">
        <Carousel />
        </div>
      </div>

      </div>
      {children}
    </div>  
  )
  ;
}

export default Layout;