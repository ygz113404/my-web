
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
function Contact() {
    return (
        <div className="bg-white ">
            <h1 className="text-black text-3xl font-bold md:text-5xl text-center pt-6">Contact</h1>
            <div className="max-w-[1000px]  mx-auto grid md:grid-cols-2 gap-5   h-[400px]">
                <div className="border border-gray-800 h-[200px] my-[100px] flex flex-col justify-center items-center">
                    <AiFillGithub className='text-black text-6xl'></AiFillGithub>
                    <h1 className='text-black text-2xl font-bold'><a href='https://github.com/ygz113404'>Github</a></h1>
                </div>
                <div className="border border-gray-800 h-[200px] my-[100px] flex flex-col justify-center items-center">
                    <BsLinkedin className='text-black text-6xl'></BsLinkedin>
                    <h1 className='text-black text-2xl font-bold'><a href='https://www.linkedin.com/in/yagiz-omer/'>Linkedin</a></h1>
                </div>
            </div>
        </div>
    );
}

export default Contact;