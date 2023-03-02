import { TypeAnimation } from "react-type-animation";

function Header() {
    return ( <div id="home" className=" max-w-[800px]  mx-auto grid md:grid-cols-2 gap-5   h-screen  "> 
<div className=" m-auto md:border-r-2 border-gray-400  ">
<p className=" text-white text-lg md:text-4xl ">Hi my name is</p>
    <h1 className="text-white text-3xl font-bold md:text-5xl ">Yağız Ömer <span className="text-kırmızı">Altun</span></h1>
    <p className="text-lg text-white  pt-4" >
        I am Software Engineer,
    </p>

</div>
<div className="m-auto ">
<h1 className="text-white text-2xl font-bold md:text-4xl ">I am experienced 
<span className="text-kırmızı text-3xl font-bold md:text-5xl">
    <TypeAnimation
    sequence={['React',1000,'JavaScript',1000,'Java']}
    repeat={Infinity}>
    </TypeAnimation>
    
    
    </span></h1>
</div>

   
    
    </div> );
}

export default Header;