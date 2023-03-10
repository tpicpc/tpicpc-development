import React from "react";

function TeachersSection() {
  return (
    <section className="container ">
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
      <div>
        <div className="flex flex-col justify-center items-center text-center my-10 md:mx-12 order-1 md:order-2 md:pr-7 mt-6 md:mt-0">
          <div className="overflow-hidden ring-4 rounded-full">
            {" "}
            <img
              alt="Engr. Md. Maksudur Rahman"
              className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]  rounded-full  p-1  ring-primary transform 
                        transition duration-1000 hover:scale-125
                         "
              src="/maksudur.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-xl title-font  mt-3">
              Engr. Md. Maksudur Rahman
            </h2>
            <p className=" text-sm mt-1 font-bold">CONVENER</p>
            {/* <!-- <p className=" text-sm mt-1 font-bold">Principal Of TPI</p> --> */}
          </div>
        </div>
      </div>
      {/* <!-- <div className="flex flex-col md:flex-row justify-center">
            <div className="flex flex-col justify-center items-center text-center md:mx-12">
                <div className="overflow-hidden ring-4 rounded-full "> <img alt="MD. Alamgir" className="w-[200px] h-[200px] rounded-full  p-1 ring-primary transform 
                    transition duration-1000 hover:scale-110"
                        src="https://thakpoly.gov.bd/assets/images/teacher/alamgirSir.jpg"></div>
                <div>
                    <h2 className="text-primary font-bold text-xl title-font  mt-3">MD. Alamgir</h2>
                    <p className=" text-sm mt-1 font-bold">MENTOR</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  mt-6 md:mt-0 md:mx-12">
                <div className="overflow-hidden ring-4 rounded-full "> <img alt="MD. Shafiqul Islam" className="w-[200px] h-[200px] rounded-full  p-1 ring-primary transform 
                    transition duration-1000 hover:scale-110"
                        src="https://thakpoly.gov.bd/assets/images/teacher/shafiq.png"></div>
                <div>
                    <h2 className="text-primary font-bold text-xl title-font  mt-3">MD. Shafiqul Islam</h2>
                    <p className=" text-sm mt-1 font-bold">MOVERS</p>
                </div>
            </div>
        </div> --> */}
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="flex flex-col justify-center items-center text-center  order-2 md:order-1  mt-6 md:mt-0">
          <div className="overflow-hidden ring-4 rounded-full">
            {" "}
            <img
              alt="MD. Alamgir"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]   rounded-full p-1 ring-primary transform 
                        transition duration-1000 hover:scale-125"
              src="https://thakpoly.gov.bd/assets/images/teacher/alamgirSir.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-xl title-font  mt-3 ">
              MD. Alamgir
            </h2>
            <p className=" text-sm mt-1 font-bold">MENTOR</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center md:mx-12 order-1 md:order-2 mt-6 md:mt-0">
          <div className="overflow-hidden ring-4 rounded-full">
            {" "}
            <img
              alt="Md. Mominul Islam"
              className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]  rounded-full  p-1 ring-primary transform 
                        transition duration-1000 hover:scale-125
                         "
              src="/Mominul.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-xl title-font  mt-3">
              Md. Mominul Islam
            </h2>
            <p className=" text-sm mt-1 font-bold">CO-CONVENER</p>
            {/* <!-- <p className=" text-sm mt-1 font-bold">Chef Instructor Department f Computer Science And Technology</p> --> */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center order-3  mt-6 md:mt-0  ">
          <div className="overflow-hidden ring-4 rounded-full">
            {" "}
            <img
              alt="MD. Shafiqul Islam"
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full p-1 ring-primary transform 
                        transition duration-1000 hover:scale-125"
              src="https://thakpoly.gov.bd/assets/images/teacher/shafiq.png"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-xl title-font  mt-3">
              MD. Shafiqul Islam
            </h2>
            <p className=" text-sm mt-1 font-bold">MOVERS</p>
          </div>
        </div>
      </div>
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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-rows-1 mt-10">
        <div className="flex flex-col justify-center items-center text-center md:my-8">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="Sanowar Hossain Anik"
              className="w-[150px] h-[150px] rounded-full  p-1 ring-cpcYellow transform 
                        transition duration-1000 hover:scale-110"
              src="https://thakpoly.gov.bd/assets/images/teacher/anik.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              Sanowar Hossain Anik
            </h2>
            <p className=" text-[12px] mt-1 font-bold">ADVISOR</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  mt-6 md:mt-0 ">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="Bikash Chandra Barman"
              className="w-[150px] h-[150px] rounded-full  p-1 ring-cpcYellow transform 
                        transition duration-1000 hover:scale-110"
              src="https://thakpoly.gov.bd/assets/images/teacher/bikash.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              Bikash Chandra Barman
            </h2>
            <p className=" text-[12px] mt-1 font-bold">ADVISOR</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  mt-6 md:mt-0">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="MD. Faisal Islam"
              className="w-[150px] h-[150px] rounded-full ring-2 p-1 ring-cpcYellow transform 
                    transition duration-1000 hover:scale-110"
              src="https://thakpoly.gov.bd/assets/images/teacher/faisal.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              MD. Faisal Islam
            </h2>
            <p className=" text-[12px] mt-1 font-bold">ADVISOR</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  mt-6 md:mt-0">
          <div className="overflow-hidden ring-2 rounded-full ring-cpcYellow">
            {" "}
            <img
              alt="MD.Ramjan Ali"
              className="w-[150px] h-[150px] rounded-full ring-2 p-1 ring-cpcYellow transform 
                    transition duration-1000 hover:scale-110"
              src="https://thakpoly.gov.bd/assets/images/teacher/romjan.jpg"
            />
          </div>
          <div>
            <h2 className="text-primary font-bold text-lg title-font  mt-3">
              MD. Ramjan Ali
            </h2>
            <p className=" text-[12px] mt-1 font-bold">ADVISOR</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeachersSection;
