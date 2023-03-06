import {AiFillHtml5} from 'react-icons/ai'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'

function Skills() {
    return (
    <div id="skills" className="bg-black">
    <h1 className="text-white text-3xl font-bold md:text-5xl text-center pt-6">My Skills</h1>
    <div className="max-w-[1000px]  mx-auto grid md:grid-cols-4 gap-5   h-[500px] bg-black">
     <div className="border h-[300px] my-[100px] flex flex-col justify-center items-center">
      <SiJavascript className='text-white text-6xl'></SiJavascript>
       <h1 className='text-white text-2xl font-bold'>Javascript</h1>  
      </div>
     <div  className="border h-[300px] my-[100px] flex flex-col justify-center items-center">
       <FaReact className='text-white text-6xl'></FaReact>
       <h1 className='text-white text-2xl font-bold'>React</h1>
     </div>
     <div  className="border h-[300px] my-[100px] flex flex-col justify-center items-center">
      <AiFillHtml5 className='text-white  text-6xl'></AiFillHtml5>
      <h1 className='text-white text-2xl font-bold'>Html</h1>
     </div>
     <div  className="border h-[300px] my-[100px] flex flex-col justify-center items-center">
      <FaJava className='text-white text-6xl'></FaJava>
      <h1 className='text-white text-2xl font-bold'>Java</h1>
       </div>
    </div>
    </div>
      );
}

export default Skills;