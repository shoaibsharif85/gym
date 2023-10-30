import React from "react";
import img from "../assets/about.png";

const About = () => {
  return (
    <div className=" max-w-[1240px] m-auto md:mb-[-100px] md:py-20 my-10 ">
      
     <div className="md:grid md:grid-cols-2 mx-5 text-white ">
        <div className="w-full h-full ">
<h1 className="text-5xl font-bold mt-40 ml-10">About Us</h1>
<p className="text-2xl mt-6 ml-10">Lorem ipsum dolor sit amet consectetur adipisicing elit
    . Odio, aspernatur vero quidem illum quis
     molestiae cumque ea minus amet! Quia
      sint cumque dolorum adipisci animi
       esse dolor! Tenetur, porro commodi.</p>
       <button className="relative inline-flex items-center ml-10 w-[150px] hover:bg-[#dd4949] border border-[4px] b p-[12px] mt-10  text-white text-2xl justify-start px-5 my-7 border border-white overflow-hidden font-bold rounded-full group">Explore Now</button>
       </div>
       <div className="my-20 mx-5 mr-10">
        <img src={img}  alt="" className="md:w-[500px] md:h-[500px] rounded-md  w-[250px]  h-[250px] mb-10 mx-10 content-center"/>
       </div>
     </div>
    </div>
  );
};

export default About;