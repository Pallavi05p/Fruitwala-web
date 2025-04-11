import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import banana from "/bitmap.png";
import watermelon from "/watermelon.png";
import Apple from "/apple.png"
import Strawberry  from "/strawberry.png";
import bg from "../assets/bg.png"; // Ensure correct image path
import Kiwi from "/Kiwi.png";
import Button from "/bars.png";
const Our_product = () => {
    const products = [
        {
            name: "Banana",
            description:
                "Bananas are a great source of energy and potassium. They aid in digestion and help maintain heart health.",
            price: "₹ 60/kg",
            image: banana,
        },
        {
            name: "Watermelon",
            description:
                "Watermelon is a refreshing summer fruit with high water content (92%). It keeps you hydrated.",
            price: "₹ 60/kg",
            image: watermelon,
        },
        {
            name: "Banana",
            description:
                "Bananas are a great source of energy and potassium. They aid in digestion and help maintain heart health.",
            price: "₹ 60/kg",
            image: banana,
        },
        {
            name: "Watermelon",
            description:
                "Watermelon is a refreshing summer fruit with high water content (92%). It keeps you hydrated.",
            price: "₹ 60/kg",
            image: watermelon,
        },
    ];

    return (
        <section 
            className="py-10 my-10 px-20 w-full min-h-[600px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
            style={{ 
                backgroundImage: `url(${bg})`, 
                backgroundSize: "1180px auto", 
                backgroundPosition: "top", 
                paddingBottom: "100px" 
            }} 
            id="products"
        >
            <h2 className="mb-6 text-3xl font-bold text-center text-green-800">
                Our Products
            </h2>
            <p className="mb-8 text-lg text-center text-yellow-500">
                Fresh & Juicy Picks – Straight from Our Farm!
            </p>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 },
                }}
                className="w-full px-6 md:px-16"
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-lg rounded-t-xl overflow-hidden h-[300px] flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col justify-between p-4 text-white bg-green-800 md:w-1/2">
                                <div className="px-4 py-6">
                                    <h3 className="text-2xl font-poppins">{product.name}</h3>
                                    <p className="mt-2 text-lg font-poppins">{product.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 text-2xl text-center text-green-900 bg-yellow-400 rounded-b-xl">
                            {product.price}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Our_product;
