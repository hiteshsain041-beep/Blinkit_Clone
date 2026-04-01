import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";




export default function Header() {
    return (
        <header className=' w-full shadow bg-white '>

            <div className='max-w-7xl  hidden  lg:flex items-center justify-between border-b border-gray-200 mx-auto px-7 h-20 '>
                {/* logo */}
                <div className='text-[40px] font-bold py-5 pt-2.5 pr-10 border-r border-gray-300 h-full text-yellow-500  '>blink<span className='text-green-500 '>it</span>
                </div>


                {/* Location */}
                <div className='ml-7'>
                    <p className='font-bold text-lg'>Delivery in 14 minutes</p>
                    <p>Railway station, Gopalbari, Jaipur...</p>
                </div>
                {/* search */}
                <div className='bg-gray-200 flex-1  items-center flex mx-4   py-3 px-6 rounded-xl'>
                <IoIosSearch className='text-3xl' />

                    <input type="text" className='w-full outline-none px-5' placeholder='Search' />
                </div>
                {/* button */}
                <div>
                    <button className='mx-8 mr-20 text-[18px] mb-1'>Account</button>
                    <button className='p-2 bg-green-600 rounded-sm text-white px-8 py-3 '  >
                        <LuShoppingCart className='text-white ' />

                        </button>
                </div>

            </div>

            <div className='max-w-7xl lg:hidden  flex flex-col  border-b border-gray-200 mx-auto px-7 py-4 '>

                {/* Location */}
                <div className='ml-7 flex justify-between'>
                   <div>
                   <p className='font-bold text-lg'>Delivery in 14 minutes</p>
                    <p>Railway station, Gopalbari, Jaipur...</p>

                   </div>
                    <RiAccountCircleLine className='text-3xl mt-2 mx-10' />

                </div>
                {/* search */}
                <div className='bg-gray-200 flex-1 rotate-xl items-center flex mx-4 mr-5 mt-3  py-3 px-6 rounded-xl'>
                <IoIosSearch className='text-3xl' />
                    <input type="text" className='w-full outline-none px-5' placeholder='Search' />
                </div>

            </div>
        </header>
    )
}
