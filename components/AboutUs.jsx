import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <>
      <div className="container mt-20">
        <div
          style={{
            background:
              "linear-gradient(89.98deg,hsla(0,0%,85%,0) .01%,#fbba31 34.37%,#fbba31.69%,hsla(0,0%,85%,0) 99.97%)",
          }}
          className="flex flex-col text-center w-full mt-20 py-2 mb-10"
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
            About US
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:mt-28 ">
          <div className="lg:basis-1/2 ">
            <div>
              <div>
                <h1 className="xl:text-4xl md:text-3xl lg:text-[20px] font-bold mt-10 md:mt-0">
                  TPI Computer Programming Club
                </h1>
                <p className="mt-8">
                  Welcome to the TPI Computer Programming Club! We are a group
                  of students who are passionate about technology and
                  programming. Our goal is to provide a supportive and welcoming
                  environment for students to explore their interests in these
                  fields and develop their skills and knowledge.
                  <br />
                  <br />
                  As a member of the club, you'll have the opportunity to attend
                  workshops, lectures, and other events that can help you stay
                  up-to-date with the latest technology and trends in the
                  industry. You'll also have the chance to connect with other
                  students, professionals, and industry leaders through
                  networking and collaboration opportunities.
                </p>
              </div>
              <div className="pt-5">
                <Link
                  href="/about"
                  className="mt-8  bg-primary py-3 px-6  rounded text-white hover:bg-secondary"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="items-center lg:my-auto flex lg:ml-16">
            <img className="w-full " src="https://dummyimage.com/700x400" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
