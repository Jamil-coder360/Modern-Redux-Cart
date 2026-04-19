import React from "react";
import Section from "../Common/Section";
import Container from "../Common/Container";

import cart1 from "../../assets/nahid.jpg";
import Button from "../Common/Button";
import Arrows from "./Arrows";

import { bannerCards } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <Section>
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between 
  px-5 md:px-10 py-16 md:py-20 lg:py-24 lg:h-[90vh]
  gap-10 overflow-hidden rounded-b-3xl
  bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>

        {/* Left Content */}
        <div className="relative max-w-[600px] text-white z-10 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Buy Your <span className="text-yellow-300">Dream Product</span>{" "}
            Today
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6">
          Buty all modern and lattest product's with beautiful  and smooth
            look's.
          </p>

          <Button>See All</Button>
        </div>

        {/* Right Slider */}
        <div className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[350px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="h-full"
          >
            {bannerCards.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full h-full bg-white/20 backdrop-blur-xl p-4 md:p-5 rounded-2xl">
                  <div className="relative w-full h-full group overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div
                      className="absolute inset-0 bg-black/40 
                flex items-end lg:items-center justify-center
                opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                transition duration-300 p-4"
                    >
                      <Button
                        Tagname="a"
                        href="/shop"
                        className="w-full lg:w-auto"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
