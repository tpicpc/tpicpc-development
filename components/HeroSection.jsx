"use client";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <>
      <div className="w-full">
        <Slider {...settings}>
          <div
            className={` w-full h-[90vh] bg-[url('https://i.ibb.co/pJ9Qr9f/1673766130925.jpg')] bg-no-repeat  bg-gray-800 bg-opacity-80 md:h-screen cursor-pointer bg-center bg-blend-multiply  bg-cover`}
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
                TPI CPC is the most primitive and extensive club as well as the
                biggest club in Thakurgaon Polytechnic Institute. We work
                together to explore every field of Computer Science .
              </p>
              <div>
                <Link href={"/about"}>
                  <button className="py-2 px-7  bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] rounded font-semibold  text-white hover:-translate-y-2 transition-all duration-500">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={` w-full h-[90vh] bg-[url('https://i.ibb.co/9qkPyw7/banner.jpg')] bg-gray-800 bg-opacity-80 md:h-screen cursor-pointer bg-center bg-blend-multiply flex justify-end  bg-cover`}
          >
            <div className="w-full lg:w-1/2  px-5 md:px-20 pt-10 md:pt-28 text-white space-y-5">
              <h2 className="text-2xl font-semibold">
                Thakurgaon Polytechnic Institute Computer Programming Club
              </h2>
              <h2 className=" text-2xl sm:text-3xl md:text-4xl font-semibold uppercase leading-tight tracking-wide">
                Club Seminar{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31]">
                  Career & Cp Guidance
                </span>{" "}
                Discussion With Duetians
              </h2>
              <p className="text-xl">
                In the event, Duetian gave lectures on Competitive Programming,
                Higher study related and career guidelines related topics.
              </p>
              <div>
                <Link href={"/events"}>
                  <button className="py-2 px-7  bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] rounded font-semibold  text-white hover:-translate-y-2 transition-all duration-500">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HeroSection;