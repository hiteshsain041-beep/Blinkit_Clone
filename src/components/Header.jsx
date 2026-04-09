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
                <div className="flex items-center gap-8">
        <button className="text-gray-700 font-medium hover:text-green-600 transition-colors">
          Account
        </button>

        <button className="flex items-center gap-3 bg-green-700 text-white px-4 py-3 rounded-lg font-bold hover:bg-green-800 transition-all shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <div className="flex flex-col items-start leading-none text-sm">
            <span>0 items</span>
            <span className="text-[10px] opacity-90 uppercase">View Cart</span>
          </div>
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
