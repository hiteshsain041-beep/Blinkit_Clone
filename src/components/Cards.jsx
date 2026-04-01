import React from 'react'

export default function Cards() {
    const card = [
        { img: "img5.avif"},
        { img: "img6.avif" },
        { img: "img7.avif" },
        { img: "img8.avif" },
        { img: "img9.avif" },
        { img: "img10.avif" },
        { img: "img11.avif" },
        { img: "img12.avif" },
        { img: "img13.avif" },
        { img: "img14.avif" },
        { img: "img15.avif" },
        { img: "img16.avif" },
        { img: "img17.avif" },
        { img: "img18.avif" },
        { img: "img19.avif" },
        { img: "img20.avif" },
        { img: "img21.avif" },
        { img: "img22.avif" },
        { img: "img23.avif" },
        { img: "img24.avif" }
    ]

    return (
        <div className='max-w-9xl gap-5 mx-auto px-10 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7  xl:grid-cols-10'>

        {card.map((data,index) => {
            return (
                    <div key={index}>
                        <div className=' rounded-3xl ' >
                            <img className='w-full' src={data.img} alt="Missing Img" />
                        </div>
                    </div>
            )
        })}
  </div>  )
}
