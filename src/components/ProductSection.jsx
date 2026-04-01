import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from './ProductCard';

export default function ProductSection({ title, products }) {
    return (
        <div className='w-full p-3'>
            <div className='flex justify-between '>             <h2 className=' font-bold ml-6 text-[28px]'>{title}</h2>
<span className='font-medium text-[20px] mr-4 mt-3 text-[green] cursor-pointer'> see all</span>
</div>
            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                loop={false}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 5,
                    },
                }}
                className="mySwiper"
            >
                {
                    products.map((item, index) => {
                        return (<SwiperSlide>
                            <ProductCard key={index} quantity={item.quantity} price={item.price} name={item.name} img={item.images[0]} />
                        </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}



