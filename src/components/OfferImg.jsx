import React from 'react'

export default function OfferImg() {
    return (
        <div>

            <div className="hidden lg:block">
                <div>
                    <img
                        src="img1.jpg"
                        alt="Missing Img"/>
                </div>

                <div className="flex mt-8 gap-5 px-5">
                    <div className="w-90">
                        <img src="img2.avif" alt="Missing Img" />
                    </div>

                    <div className="w-90">
                        <img src="img3.avif" alt=" Missing Img" />
                    </div>

                    <div className="w-90">
                        <img src="img4.avif" alt="Missing Img" />
                    </div>
                </div>

            </div>

        </div>
    )
}