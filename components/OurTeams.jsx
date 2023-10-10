
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Style.css";
const OurTeams = () => {
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
    <section className="w-full px-5 md:px-16 pt-5 pb-16 ">
     <div
        style={{
          background:
            "linear-gradient(89.98deg,hsla(0,0%,85%,0) .01%,#fbba31 34.37%,#fbba31.69%,hsla(0,0%,85%,0) 99.97%)",
        }}
        className="flex flex-col text-center w-full mt-20 mb-10 py-2"
      >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Meet The 2023 EX Team
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
              src="/team/sahinur.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Sahinur Islam 
            </h2>
            <p className=" text-sm mt-1 font-bold">President</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt=" Mursalin Islam Mubin"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/mubin.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Mursalin Islam Mubin
            </h2>
            <p className=" text-sm mt-1 font-bold">Vice President</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Masipul Islam Siam"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/siam.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3 ">
            Masipul Islam Siam
            </h2>
            <p className=" text-sm mt-1 font-bold">General Secretary</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Sajjad Ul Islam"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/Sajjad.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Sajjad Ul Islam
            </h2>
            <p className=" text-sm mt-1 font-bold">Assistant General Secretary</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Md Abir"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/abir.png"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Md Abir
            </h2>
            <p className=" text-sm mt-1 font-bold">Assistant General Secretary</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Murad"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/murad.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Mehedi Hasan
            </h2>
            <p className=" text-sm mt-1 font-bold">Treasurer</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Dipok Roy Dip"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/dipok1.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Dipok Roy Dip
            </h2>
            <p className=" text-sm mt-1 font-bold">Executive Member</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Nimur Rahman"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/Nimur.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Nimur Rahman
            </h2>
            <p className=" text-sm mt-1 font-bold">Executive Member</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Mst Rinky Akter"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/rinky.jpg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Mst Rinky Akter
            </h2>
            <p className=" text-sm mt-1 font-bold">Executive Member</p>
          </div>
        </div>
        <div className="w-full p-5">
          <div className="w-44 h-44 overflow-hidden ring-4 ring-orange-500 rounded-full mx-auto ">
            <img
              alt="Sakib Hossain"
              className="w-full h-full  rounded-full  p-1  transform transition duration-1000 hover:scale-125 hover:cursor-pointer "
              src="/team/Sakib.png"
            />
          </div>
          <div className="text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] font-bold text-xl title-font  mt-3">
            Sakib Hossain
            </h2>
            <p className=" text-sm mt-1 font-bold">Creative Desiginer</p>
          </div>
        </div>
      </Slider>

  </section>
  )
}

export default OurTeams;