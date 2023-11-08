import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import {BsFacebook} from 'react-icons/bs'

import {AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'




const Trainers = () => {
    return (
        <div className="  max-w-[1240px] m-auto flex flex-col justify-center items-center md:px-32 px-5">
            <h1 className="text-5xl  md:py-1 font-bold text-white text-center">Our Trainers</h1>

            <div className=" flex flex-col md:flex-row gap-10  mt-8">
                <div className="w-[280px] h-[430px]   bg-[#504747] rounded-2xl">
                    <img src={img1} alt="" className="w-[200px]  rounded-md mt-10 mx-10" />
                    <h1 className="ml-[90px] text-white my-5 font-bold text-3xl ">Anotly</h1>
                    <div className="flex text-center text-white ml-[80px] text-3xl">
                    <BsFacebook/>
                     <AiOutlineInstagram className="mx-5"/>
                     <AiOutlineTwitter/>
                    </div>
                </div>
                <div className="w-[280px] h-[430px]    bg-[#504747] rounded-2xl">
                    <img src={img2} alt="" className="w-[200px]  rounded-md mt-10 mx-10" />
                    <h1 className="ml-[90px] text-white my-5 font-bold text-3xl ">Anotly</h1>
                    <div className="flex text-center text-white ml-[80px] text-3xl">
                    <BsFacebook/>
                     <AiOutlineInstagram className="mx-5"/>
                     <AiOutlineTwitter/>
                    </div>
                </div>
                <div className="w-[280px] h-[430px]  bg-[#504747] rounded-2xl">
                    <img src={img3} alt="" className="w-[200px]  rounded-md mt-10 mx-10" />
                    <h1 className="ml-[90px] text-white my-5 font-bold text-3xl ">Anotly</h1>
                    <div className="flex text-center text-white ml-[80px] text-3xl">
                     <BsFacebook/>
                     <AiOutlineInstagram className="mx-5"/>
                     <AiOutlineTwitter/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainers;