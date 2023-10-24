import React, { useState } from 'react'


const Navbar = () => {
    const [toggel, setToggel] = useState();
    return (
        <div className='fixed  p-5'>
            <div className='max-w-[1240px] md:px-[110px] py-[10px] items-center  mx-auto flex justify-between'>


                {
                    toggel ?
                        <i class="fa-solid fa-xmark" onClick={() => setToggel(!toggel)} className='text-white fixed text-2xl md:hidden block'></i>
                        :
                        <i class="fa-solid fa-bars-sort" onClick={() => setToggel(!toggel)} className='text-white fixed text-2xl md:hidden block'></i>
                }



                <ul className='md:flex hidden text-white gap-10   ' >
                    <li className='text-[18px]  '>
                        <a href=""> Home</a>
                    </li>

                    <li className='text-[18px]'><a href="">Plans</a></li>
                    <li className='text-[18px]'><a href="">About</a></li>
                    <li className='text-[18px]'><a href="">Trainer</a></li>
                    <li className='text-[18px]'><a href="">Contact us</a></li>
                </ul>

                {/* Responsive */}
                <ul className={` md:hidden text-white fixed w-full left-0 h-[60vh] px-2  bg-[#000]  top-[80px]  ${toggel ? "left-[0]" : "left-[-100%]"}`} >
                    <li className='text-[18px] mx-10 py-5'>
                        <a href=""> Home</a>
                    </li>
                    <li className='text-[18px] mx-10 py-5'><a className='' href="">Plans</a></li>

                    <li className='text-[18px] mx-10 py-5'><a className='' href="">About us</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className='' href="">Trainer</a></li>
                    <li className='text-[18px] mx-10 py-5'><a className='' href="">Contact us</a></li>



                </ul>

            </div>
        </div >
    )
}

export default Navbar