function Skills() {
    return (
    <div id="skills" className="bg-black">
    <h1 className="text-white text-3xl font-bold md:text-5xl text-center pt-6">My Skills</h1>
    <div className="max-w-[1000px]  mx-auto grid md:grid-cols-4 gap-5   h-[800px] bg-black">
     <div className="border h-[400px] my-[100px]">Javascript</div>
     <div  className="border h-[400px] my-[100px]">React</div>
     <div  className="border h-[400px] my-[100px]">HTML</div>
     <div  className="border h-[400px] my-[100px]">JAVA</div>
    </div>
    </div>
      );
}

export default Skills;