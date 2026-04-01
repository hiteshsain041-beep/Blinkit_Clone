import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
    return (
        <div>
            <footer className=" text-gray-500 px-2 pt-8 pb-3 hidden lg:block">

                <div className="grid grid-cols-4 gap-10 pl-10">

                    <div>
                        <h2 className="font-semibold text-lg mb-4 text-black">
                            Useful Links
                        </h2>
                        <div className="grid grid-cols-3 gap-2 text-sm cursor-pointer">
                            <p>Blog</p>
                            <p>Partner</p>
                            <p>Recipes</p>
                            <p>Privacy</p>
                            <p>Franchise</p>
                            <p>Bistro</p>
                            <p>Terms</p>
                            <p>Seller</p>
                            <p>District</p>
                            <p>FAQs</p>
                            <p>Warehouse</p>
                            <p> Ambulance</p>
                            <p>Security</p>
                            <p>Deliver</p>
                            <p></p>
                            <p>Contact</p>
                            <p>Resources </p>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <div className="flex items-center gap-3 mb-4">
                            <h2 className="font-semibold text-lg text-black">Categories</h2>
                            <span className="text-green-600 text-sm cursor-pointer">
                                see all
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 text-sm cursor-pointer">
                            <p>Vegetables & Fruits</p>
                            <p>Dairy & Breakfast</p>
                            <p>Munchies</p>
                            <p>Cold Drinks & Juices</p>
                            <p>Instant & Frozen Food</p>
                            <p>Tea, Coffee & Milk Drinks</p>
                            <p>Bakery & Biscuits</p>
                            <p>Sweet Tooth</p>
                            <p>Atta, Rice & Dal</p>
                            <p>Dry Fruits, Masala & Oil</p>
                            <p>Sauces & Spreads</p>
                            <p>Chicken, Meat & Fish</p>
                            <p>Paan Corner</p>
                            <p>Organic & Premium</p>
                            <p>Baby Care</p>
                            <p>Pharma & Wellness</p>
                            <p>Cleaning Essentials</p>
                            <p>Home Furnishing & Decor</p>
                            <p>Personal Care</p>
                            <p>Pet Care</p>
                            <p>Beauty & Cosmetics</p>
                            <p>Electronics & Electricals</p>
                            <p>Kitchen & Dining</p>
                            <p>Fashion & Accessories</p>
                            <p>Toys & Games</p>
                            <p>Stationery Needs</p>
                            <p>Books</p>
                            <p>Rakhi Gifts</p>
                            <p>Print Store</p>
                            <p>E-Gift Cards</p>
                        </div>
                    </div>
                </div>


                <div className="flex  mt-8 ml-18">
                    <p className="text-gray-500 text-sm mt-2.5  ">
                        © Blink Commerce Private Limited, 2016-2026</p>

                    <h2 className=" ml-25 font-bold mt-2 cursor-pointer text-gray-500 ">Download App</h2>

                    <div className="ml-8 flex gap-3 mt-1.5">
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="h-8 cursor-pointer"/>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-8 cursor-pointer"/>
                    </div>

                    <div className="flex text-4xl ml-15 gap-5  text-white  ">
                        <FaFacebookF className=" bg-black p-2 rounded-4xl w-10 h-10 cursor-pointer" />
                        <FaXTwitter className=" bg-black p-2 rounded-3xl  w-10 h-10 cursor-pointer" />
                        <FaInstagram className=" bg-black p-2 rounded-3xl  w-10 h-10 cursor-pointer" />
                        <FaLinkedinIn className=" bg-black p-2 rounded-3xl w-10 h-10 cursor-pointer " />
                        <FaThreads className=" bg-black p-2 rounded-3xl w-10 h-10 cursor-pointer" />

                    </div>

                </div>


                <div className="text-[15px] mr- text-gray-500  ">
                    <p className="mt-5">“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate</p>
                    <p>services business operated by “Redstone Consultancy Services Private Limited”.</p>
                </div>




            </footer>

            <footer className="  lg:hidden ">

                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1800/layout-engine/v2/2024-12/app_footer_android/light.png" alt="missing img" />
            </footer>
        </div>

    );
}