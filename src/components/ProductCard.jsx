import React from 'react'


export default function ProductCard({ img, name, price, quantity }) {
    return (
        <div className='border border-[#d1c9c9]  flex m-3  p-2   text-sm  flex-col gap-2 rounded-2xl bg-white'>
            <img className='mx-auto rounded-lg' src={img} alt="" />
            <span className='text-[10px]'>8 MINS</span>
            <div className='whitespace-nowrap overflow-hidden text-ellipsis text-[16px]'>{name}</div>
            <span className='text-[12px]'>{quantity}</span>
            <div className='flex justify-between'>
                <span className='mt-2 font-bold'>${price}</span>
                <button className='border border-[green] w-18 px-4 py-2 rounded-lg font-bold text-[green]'>Add</button>
            </div>
        </div>
    )
}
