import React from "react";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between md:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" flex flex-col justify-center">
        <h1 className=" text-8xl text-white  font-bold md:text-start text-center md:w-2/3">
          Your body, your rules.
        </h1>
<button className="relative inline-flex items-center ml-20 w-[220px] hover:bg-[#dd4949] border border-[4px] b p-[18px] mt-10  text-white text-2xl justify-start mx-10  my-5 border border-white overflow-hidden font-bold rounded-full group">Cheackouct Plan</button>
     
      </div>
    </div>
  );
};

export default Home;