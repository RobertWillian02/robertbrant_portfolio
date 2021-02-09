import Image from 'next/image'
import React, { useState } from 'react';
import Link from 'next/link'


const Header: React.FC = () => {

    const [click, setClick] = useState(false);

    function handleClick(){
        setClick(currentClick => !currentClick)
    }

    return (
        <header className="">
            <div className="flex justify-center py-8 md: justify-evenly  py-2 md:py-4 items-center border-b-2 border-gray-600  " >
        
            <Link href="/" >
                <a>

                    <Image  src= '/img/RobertLogo.png' alt="rei" height = {14.3} width= {188}
                        className=" flex " 
                        />
                </a>
                
            </Link>

            <nav className ="hidden sm:block space-x-8 md:block space-x-8">
                <Link href="/" >
                    <a className="tracking-wide hover:text-blue-500 text-lg font-semibold " >Home</a>
                </Link>
                
                <Link href="/">
                    <a className="tracking-wide hover:text-blue-500 text-lg font-semibold" >About</a>
                </Link>
                
                <Link href="/">
                    <a className="tracking-wide hover:text-blue-500 text-lg font-semibold " >Contact</a>
                    
                </Link>
                

            </nav>
            <div className="block sm:hidden ">
                <button onClick={handleClick} type="button">
                    
                    <svg className="h-7 w-7 rounded-full " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={click? "M6 18L18 6M6 6l12 12 " : "M4 6h16M4 12h16M4 18h16"} />
                    </svg> 
                    
                    
                </button>
            </div>
        </div>
        <div  className={click? "px-4 pt-2 pb-4  border-gray-500 border-b-2 block sm:hidden " : "hidden"}>
            <Link href="/" >
                <a className={click? "text-center block tracking-wide py-1 hover:text-gray-100 rounded hover:bg-gray-700 text-lg font-semibold visible sm:hidden ":"hidden"}>Home</a>
            </Link>
            
            <Link href="/">
                <a className={click? "text-center block tracking-wide py-1 hover:text-gray-100 rounded hover:bg-gray-700 text-lg font-semibold visible sm:hidden ":"hidden"}>About</a>
            </Link>
            
            <Link href="/">
                <a className={click? "text-center block tracking-wide py-1 hover:text-gray-100 rounded hover:bg-gray-700 text-lg font-semibold visible sm:hidden":"hidden"} >Contact</a>
                
            </Link>
        </div>
            
      </header>
        
      
  );
}

export default Header;