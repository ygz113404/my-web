import React , {useState}from "react";
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

function NavBar() {
    const [nav,setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    return ( 
        <div className="sticky top-0 w-full bg-black">
            <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto  ">
            <h1 className="text-white w-full text-3xl font-bold">Yağız Ömer <span className="text-kırmızı ">Altun.</span></h1>
           
           <ul className="hidden md:flex text-white">
             <li className="p-4"><a href="#home">Home</a></li>
             <li className="p-4"><a href="#about">About</a></li>
             <li className="p-4"><a href="#skills">Skills</a></li>
             <li className="p-4"><a href="#contact">Contact</a></li>
         </ul>
         <div onClick={handleNav} className='block md:hidden'>
             {!nav ? <AiOutlineClose size={20} className="text-white"></AiOutlineClose> : <AiOutlineMenu size={20} className="text-white"></AiOutlineMenu>}
             
         </div>
         <div className={!nav ? 'text-white fixed left-0 top-0 w-[60%] border-r border-r-red-600 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
         <h1 className="text-white w-full text-3xl font-bold m-4">Yağız Ömer <span className="text-kırmızı ">Altun.</span></h1>
             <ul className="p-4 uppercase">
             <li className="p-4 border-b border-gray-600"><a href="#home">Home</a></li>
             <li className="p-4 border-b border-gray-600" ><a href="#about">About</a></li>
             <li className="p-4 border-b border-gray-600"><a href="#skills">Skills</a></li>
             <li className="p-4 "><a href="#contact">Contact</a></li>

             </ul>
         </div>

            </div>    
        </div>
    
    
     );
}

export default NavBar;