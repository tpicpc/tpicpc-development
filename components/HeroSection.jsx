"use client";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const HeroSection = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div className="w-full">
        <div ref={sliderRef} className="keen-slider h-full">
          <div className="keen-slider__slide number-slide1">
            <div
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/pJ9Qr9f/1673766130925.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={` w-full h-[90vh] bg-gray-800 bg-opacity-80 md:h-screen cursor-pointer bg-center bg-blend-multiply  bg-cover`}
            >
              <div className="w-full lg:w-1/2 px-5 md:px-20 pt-10 md:pt-28 text-white space-y-5">
                <h2 className="text-2xl font-semibold">
                  Thakurgaon Polytechnic Institute
                </h2>
                <h2 className=" text-2xl sm:text-3xl md:text-4xl font-semibold uppercase   tracking-wide">
                  Computer{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31]">
                    Programming
                  </span>{" "}
                  Club
                </h2>
                <p className="text-xl">
                  TPI CPC is the most primitive and extensive club as well as
                  the biggest club in Thakurgaon Polytechnic Institute. We work
                  together to explore every field of Computer Science .
                </p>
                <div>
                <Link  href={'/about'}>
                <button className="py-2 px-7  bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] rounded font-semibold  text-white hover:-translate-y-2 transition-all duration-500">
                  Read More
                </button>
                </Link>
                </div>
                
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2 h-full">
            <div
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/9qkPyw7/banner.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={` w-full h-[90vh] bg-gray-800 bg-opacity-80 md:h-screen cursor-pointer bg-center bg-blend-multiply flex justify-end  bg-cover`}
            >
              <div className="w-full lg:w-1/2  px-5 md:px-20 pt-10 md:pt-28 text-white space-y-5">
                <h2 className="text-2xl font-semibold">
                Thakurgaon Polytechnic Institute Computer Programming Club
                </h2>
                <h2 className=" text-2xl sm:text-3xl md:text-4xl font-semibold uppercase leading-tight tracking-wide">
                  Club Seminar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31]">
                    Career & Cp Guidance
                  </span>{" "}
                 Discussion With Duetians
                </h2>
                <p className="text-xl">
                In the event, Duetian gave lectures on Competitive Programming, Higher study related and career guidelines related topics.
                </p>
                <div>
                <Link  href={'/events'}>
                <button className="py-2 px-7  bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] rounded font-semibold  text-white hover:-translate-y-2 transition-all duration-500">
                  Read More
                </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

/**
 * <section id="hero">
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
  </div> *
</section>
 * 
 * 
 */
