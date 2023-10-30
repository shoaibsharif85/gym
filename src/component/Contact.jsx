import React from "react";

import img from "../assets/contactImg.jpg";

const Contact = () => {
  return (
    <div className=" max-w-[1240px] m-auto md:mx-20 md:ml-5  mx-20 ml-[-20px]">
      <div className=" mx-10 flex flex-col md:flex-row justify-between w-full text-white ">
        <form className=" w-full md:w-2/5 space-y-5 pt-20">
          <h1 className="text-5xl font-semibold text-center">Contact Us</h1>
          <div className=" flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className=" py-3 my-5 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className=" py-3 my-5 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="enter your email"
            />
          </div>
          <div className=" flex flex-col ">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className=" py-3 my-5 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="enter your number"
            />
            <button className="relative inline-flex items-center ml-10 w-[150px] hover:bg-[#dd4949] border border-[4px] b p-[12px] mt-10  text-white text-2xl justify-start px-5 my-7 border border-white overflow-hidden font-bold rounded-full group">Send Massage</button>
          </div>

          <div className=" flex flex-row justify-center">
           
          </div>
        </form>

        <div className=" max-w-[1240px] m-auto  ml-[-20px]  my-40 ">
          <img className=" rounded-md md:w-[500px] md:h-[400px] w-[300px] h-[300px] " src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;