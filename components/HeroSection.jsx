"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


function HeroSection() {
  return (
    <section id="hero">
    {/* <section > */}
      <div className="container">
        <div className="py-10 xl:w-3/6 md:w-4/6 sm:w-5/6">
          <h4 className="xl:text-4xl md:text-3xl sm:text-xl font-bold text-cpcYellow">
            Thakurgaon Polytechnic Institute
          </h4>
          <h2 className="xl:text-6xl md:text-4xl sm:text-3xl my-4 font-bold ">
            Computer Programming Club
          </h2>
          <p className="my-6 xl:text-xl md:text-lg sm:text-sm ">
            TPI CPC is the most primitive and extensive club as well as the
            biggest club in Thakurgaon Polytechnic Institute. We work together
            to explore every field of Computer Science .
          </p>
          <Link
            href="/about"
            className="mt-8 bg-primary py-3 px-6  rounded text-white hover:bg-secondary"
          >
            Read More
          </Link>
        </div>
      </div>
      {/* <div className="container">
        <Swiper className="mySwiper">
          <SwiperSlide>
            <div className="relative">
            <h1 className="absolute">hello would</h1>
            <img src="/group-img/1673766130925.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide><img src="/group-img/1673766130925.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/group-img/1673766130925.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div> */}
    </section>
  );
}

export default HeroSection;
