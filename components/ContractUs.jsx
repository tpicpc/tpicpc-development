import React from "react";

function ContractUs() {
  return (
    <section className="w-full px-5 md:px-16">
      <div
        style={{
          background:
            "linear-gradient(89.98deg,hsla(0,0%,85%,0) .01%,#fbba31 34.37%,#fbba31.69%,hsla(0,0%,85%,0) 99.97%)",
        }}
        className="flex flex-col text-center w-full mt-20  py-2"
      >
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Contact Us
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          We welcome any questions or feedback you may have. Please feel free to
          contact us using the information provided above or by filling out the
          form below.
        </p>
      </div>
      <div className=" px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 md:flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105.092316791561!2d88.44204496963238!3d26.03878660355258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4ebe22c241dc5%3A0x11eacbc887a18571!2sTPI%20-%20Computer%20and%20Programming%20Club!5e1!3m2!1sen!2sbd!4v1685249498585!5m2!1sen!2sbd"
          ></iframe>
          <div className="backdrop-blur-md bg-white/30 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold tracking-widest text-xs text-white">
                ADDRESS
              </h2>
              <p className="mt-1 text-white">
                Gobindra Nogor, Thakurgaon Road , Thakurgaon
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs ">
                EMAIL
              </h2>
              <a className="text-white leading-relaxed">tpicpc@email.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-white">+8801751379009</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <form>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white rounded border  focus:border-orange-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              name="email"
              className="w-full bg-white rounded border  focus:border-orange-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-white rounded border  focus:border-orange-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="w-full py-2 px-7  bg-gradient-to-r from-[#B32A1C] to-[#FBBA31] rounded font-semibold  text-white ">
            Send
          </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            Thank you for visiting the TPI Computer & Programming Club website.
            We look forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContractUs;
