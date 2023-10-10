"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Style.css";
const Team2023 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="w-full px-5 md:px-16 py-5 ">
    <div
      style={{
        background:
          "linear-gradient(89.98deg,hsla(0,0%,85%,0) .01%,#fbba31 34.37%,#fbba31.69%,hsla(0,0%,85%,0) 99.97%)",
      }}
      className="flex flex-col text-center w-full mt-20 mb-10 py-2"
    >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Meet The Team 2023
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        The core members of TPI Computer & Programming Club
      </p>
    </div>
    <Slider className="py-5" {...settings}>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500  rounded-full mx-auto ">
            <img
              alt="mahin"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://i.ibb.co/P4b6sdR/Al-Mohai-Minul-Islam-Mahin.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Al Mohai Minul Islam Mahin 
            </h2>
            <p className=" text-sm mt-1 font-bold">President</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Chironjit Chandra Roy"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://i.ibb.co/H2wLtmy/Chironjit-Chandra-Roy.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Chironjit Chandra Roy
            </h2>
            <p className=" text-sm mt-1 font-bold">Vice President</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="shofiur Rahman"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://i.ibb.co/TrnTzyc/Shofiur-Rahman.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3 ">
            Shofiur Rahman
            </h2>
            <p className=" text-sm mt-1 font-bold">Vice President</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Mehedi Hasan Murad"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://i.ibb.co/hZ12sGx/Mehedi-Hasan-Murad.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Mehedi Hasan Murad
            </h2>
            <p className=" text-sm mt-1 font-bold">General Secretary</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Ishan Rana"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://i.ibb.co/WnhqBTp/Ishan-Rana.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Ishan Rana
            </h2>
            <p className=" text-sm mt-1 font-bold">General Secretary</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Rakib"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://i.ibb.co/XS9L64d/Md-Rakib-Islam.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Md Rakib
            </h2>
            <p className=" text-sm mt-1 font-bold">Assistant General Secretary</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="MD Payel"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://i.ibb.co/LzfzDpb/MD-Payel.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            MD Payel
            </h2>
            <p className=" text-sm mt-1 font-bold">Assistant General Secretary</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Nifad Uzzaman"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://i.ibb.co/5xVXCTn/Nifad-Uzzaman.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Nifad Uzzaman
            </h2>
            <p className=" text-sm mt-1 font-bold">Executive Member</p>
          </div>
        </div>
      </Slider>

  </section>
  )
}

export default Team2023