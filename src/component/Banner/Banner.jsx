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
          className="relative flex items-center justify-between px-10 py-25 overflow-hidden rounded-b-3xl 
        bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500"
        >
          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>

          {/* Left Content */}
          <div className="relative max-w-[600px] text-white z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Your <span className="text-yellow-300">Dream Project</span>{" "}
              Today
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-6">
              Create modern and responsive websites with beautiful UI and smooth
              animations. Start your journey now.
            </p>

            <Button>See All</Button>
          </div>

          {/* Right Image Card */}
          <div className="relative z-10 w-[320px] h-[400px]">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="h-full rounded-2xl"
            >
              {bannerCards.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative w-full h-full bg-white/20 backdrop-blur-xl p-5 rounded-2xl shadow-2xl">
                    <div className="relative w-full h-full group overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <Button Tagname="a" href="/shop">
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
