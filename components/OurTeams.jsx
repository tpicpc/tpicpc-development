import React from "react";

function OurTeams() {
  return (
    <section className="container mt-20">
      <div
        style={{
          background:
            "linear-gradient(89.98deg,hsla(0,0%,85%,0) .01%,#fbba31 34.37%,#fbba31.69%,hsla(0,0%,85%,0) 99.97%)",
        }}
        className="flex flex-col text-center w-full mt-20 mb-10 py-2"
      >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Meet The Team
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          The core members of TPI Computer & Programming Club
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="flex flex-col justify-center items-center text-center  order-2 md:order-1  mt-6 md:mt-0">
          <div className="overflow-hidden ring-4 rounded-full">
            {" "}
            <img
              alt="Mursalin Islam Mubin"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]   rounded-full p-1 ring-primary transform 
                    transition duration-1000 hover:scale-125"
              src="/team/mubin.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-xl title-font  mt-3 ">
              Mursalin Islam Mubin
            </h2>
            <p className=" text-sm mt-1 font-bold">Vice President</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center md:mx-12 order-1 md:order-2 mt-6 md:mt-0">
          <div className="overflow-hidden ring-4 rounded-full">
            {" "}
            <img
              alt="Sahinur Islam"
              className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]  rounded-full  p-1 ring-primary transform 
                    transition duration-1000 hover:scale-125 "
              src="/team/sahinur.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-xl title-font  mt-3">
              Sahinur Islam
            </h2>
            <p className=" text-sm mt-1 font-bold">President</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center order-3  mt-6 md:mt-0  ">
          <div className="overflow-hidden ring-4 rounded-full">
            {" "}
            <img
              alt="Masipul Islam Siam"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full p-1 ring-primary transform 
                    transition duration-1000 hover:scale-125"
              src="/team/siam.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-xl title-font  mt-3">
              Masipul Islam Siam
            </h2>
            <p className=" text-sm mt-1 font-bold">Vice President</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-2 grid-rows-1 mt-10">
        <div className="flex flex-col justify-center items-center text-center md:my-8 ">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="Dipok Roy Dip"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full p-1 ring-cpcYellow transform 
                    transition duration-1000 hover:scale-125"
              src="/team/dipok1.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              Dipok Roy Dip
            </h2>
            <p className=" text-[12px] mt-1 font-bold">
              Vice President (Development)
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  mt-6 md:mt-0">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="Nimur Rahman "
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full ring-2 p-1 ring-cpcYellow transform 
                    transition duration-1000 hover:scale-125"
              src="/team/Nimur.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              Nimur Rahman{" "}
            </h2>
            <p className=" text-[12px] mt-1 font-bold">
              Vice President(Development)
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  mt-6 md:mt-0">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="Sajjad Ul Islam"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full ring-2 p-1 ring-cpcYellow transform 
                    transition duration-1000 hover:scale-125"
              src="/team/Sajjad.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              Sajjad Ul Islam
            </h2>
            <p className=" text-[12px] mt-1 font-bold">Vice President</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center   mt-6 md:mt-0">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="Md Abir"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full ring-2 p-1 ring-cpcYellow transform 
                    transition duration-1000 hover:scale-125"
              src="/team/abir.png"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              Md Abir
            </h2>
            <p className=" text-[12px] mt-1 font-bold">Vice President</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center   mt-6 lg:mt-0">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="Mst Rinky Akter"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full ring-2 p-1 ring-cpcYellow transform 
                    transition duration-1000 hover:scale-125"
              src="/team/rinky.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              Mst Rinky Akter
            </h2>
            <p className=" text-[12px] mt-1 font-bold">
              Vice President (Development)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeams;
