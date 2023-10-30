import React from "react";
import {MdVerifiedUser} from 'react-icons/md'

const Plans = () => {
    return (
        <div className=" max-w-[1240px] py-10  m-aoto  flex flex-col justify-center gap-10  items-center md:px-32 mr-10">
            <h1 className=" text-5xl font-bold py-[-100px] ml-20 text-center text-white">Gym membership</h1>

            <div className=" text-white  flex flex-col md:flex-row ml-[50px] justify-between mt-10 gap-20">
                <div className="border mx-10  my-10 rounded-2xl bg-[#524e4e] border-black w-[300px] h-[400px]">
                    <h1 className="text-center text-2xl font-bold  my-5 text-yellow-600">Trial Plan</h1>
                    <h2 className="text-center text-2xl font-bold">$ 0</h2>

                    <p className="mx-5 text-smibold flex"> <MdVerifiedUser className='text-yellow-600 mx-3 text-3xl'/> Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Ducimus distinctio neque animi,
                        numquam  alias vitae ex?</p>

                    <p className="mx-5 text-smibold my-2 flex "><MdVerifiedUser className='text-yellow-600 mx-3 text-3xl'/>  Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Ducimus distinctio neque animi,
                        numquam  alias vitae ex?</p>
                        <button className="ml-[100px] border border-white border-[4px] hover:bg-[#d65454]   hover:translate-y p-[12px] rounded-full my-3">Buy Plan</button>
                </div>
                <div className="border mx-10 my-10 rounded-2xl bg-[#524e4e] border-black w-[300px] h-[400px]">
                    <h1 className="text-center text-2xl font-bold  my-5 text-yellow-600">Plus Plan</h1>
                    <h2 className="text-center text-2xl font-bold ">$ 3000</h2>

                    <p className="mx-5 text-smibold flex"> <MdVerifiedUser className='text-yellow-600 mx-3 text-3xl'/>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Ducimus distinctio neque animi,
                        numquam  alias vitae ex?</p>

                    <p className="mx-5 text-smibold my-2 flex "><MdVerifiedUser className='text-yellow-600 mx-3 text-3xl'/>  Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Ducimus distinctio neque animi,
                        numquam  alias vitae ex?</p>
                        <button className="ml-[100px]  border border-white border-[4px] hover:bg-[#d65454]   hover:translate-y p-[12px] rounded-full my-3">Buy Plan</button>
                </div>
                <div className="border mx-10 my-10 rounded-2xl bg-[#534f4f] border-black w-[300px] h-[400px]">
                    <h1 className="text-center text-2xl  font-bold my-5  text-yellow-600" >ProMax Plan</h1>
                    <h2 className="text-center text-2xl font-bold ">$ 5000</h2>

                    <p className="mx-5 text-smibold flex"> <MdVerifiedUser className='text-yellow-600 mx-3 text-3xl'/> Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Ducimus distinctio neque animi,
                        numquam  alias vitae ex?</p>

                    <p className="mx-5 text-smibold my-2 flex text-white "><MdVerifiedUser className='text-yellow-600 mx-3 text-3xl'/>  Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                        Ducimus distinctio neque animi,
                        numquam  alias vitae ex?</p>
                    <button className="ml-[100px] border border-white border-[4px] hover:bg-[#d65454]   hover:translate-y p-[12px] rounded-full my-3">Buy Plan</button>
                </div>
            </div>
        </div>
    );
};

export default Plans;