"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Style.css";
function TeachersSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:640,
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
    <section className="w-full px-5  py-5 overflow-hidden">
      <div
         style={{
          background:
            "linear-gradient(89.98deg,hsla(0,0%,85%,0) .01%,#fbba31 34.37%,#fbba31.69%,hsla(0,0%,85%,0) 99.97%)",
        }}
        className="flex flex-col text-center w-full mt-20 mb-10 py-2"
      >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          The advising teachers of TPI Computer Programming Club
        </h1>
      </div>
      <Slider className="py-5" {...settings}>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Engr. Md. Maksudur Rahman"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/maksudur.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
              Engr. Md. Maksudur Rahman
            </h2>
            <p className=" text-sm mt-1 font-bold">CONVENER</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Mominul"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/Mominul.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
              Md. Mominul Islam
            </h2>
            <p className=" text-sm mt-1 font-bold">CO-CONVENER</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="alamgir"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://thakpoly.gov.bd/assets/images/teacher/alamgirSir.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3 ">
              MD. Alamgir
            </h2>
            <p className=" text-sm mt-1 font-bold">MENTOR</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="shafiq"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://thakpoly.gov.bd/assets/images/teacher/shafiq.png"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
              MD. Shafiqul Islam
            </h2>
            <p className=" text-sm mt-1 font-bold">MOVERS</p>
          </div>
        </div>
      </Slider>
      <div
         style={{
          background:
            "linear-gradient(89.98deg,hsla(0,0%,85%,0) .01%,#fbba31 34.37%,#fbba31.69%,hsla(0,0%,85%,0) 99.97%)",
        }}
        className="flex flex-col text-center w-full mt-20 mb-10 py-2"
      >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Meet The Advisors
        </h1>
      </div>
      <Slider className="py-5" {...settings}>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Sanowar Hossain Anik"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://thakpoly.gov.bd/assets/images/teacher/anik.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Sanowar Hossain Anik
            </h2>
            <p className=" text-sm mt-1 font-bold">ADVISOR</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Bikash Chandra Barman"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://thakpoly.gov.bd/assets/images/teacher/bikash.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Bikash Chandra Barman
            </h2>
            <p className=" text-sm mt-1 font-bold">ADVISOR</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="MD. Faisal Islam"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://thakpoly.gov.bd/assets/images/teacher/faisal.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3 ">
            MD. Faisal Islam
            </h2>
            <p className=" text-sm mt-1 font-bold">ADVISOR</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="MD. Ramjan Ali"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="https://thakpoly.gov.bd/assets/images/teacher/romjan.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            MD. Ramjan Ali
            </h2>
            <p className=" text-sm mt-1 font-bold">ADVISOR</p>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default TeachersSection;
