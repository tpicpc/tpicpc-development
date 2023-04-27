function EventCard() {
  return (
    <section className="container">
      <div className="flex basis-1/2 my-10 group bg-gray-200 hover:bg-cpcYellow transition-all shadow-lg rounded-md cursor-pointer relative">
        <div className="hidden lg:flex">
          <img
            className="w-[880px] h-[240px] rounded-l-md overflow-hidden"
            src="https://i.ibb.co/27mtZjK/comprsss-bannar.png"
            alt=""
          />
        </div>
        <div className="ml-10 my-5 mr-10">
          <h2 className="text-2xl font-semibold">
          Seminar on "Career & Competitive Programming Guidance Discussion with DUETians"
          </h2>
          <div className="text-secondary group-hover:text-black font-semibold">
            <i className="fa-regular fa-clock"></i>{" "}
            <span>TUESDAY, 2 MAY 2023 FROM 02:00PM-04:00PM</span>
          </div>
          <p className="font-medium ">
          This seminar is open to all who are interested in Competitive Programming and career development. Don't miss out on this incredible opportunity to take your programming career to the next level! See you there!
          </p>
          <span className="absolute top-0 right-0 p-1 shadow-lg text-yellow-800 font-semibold animate-bounce bg-yellow-400 rounded-md">
            Upcoming
          </span>
        </div>
      </div>
      <div className="flex basis-1/2 my-10 group bg-gray-200 hover:bg-cpcYellow transition-all shadow-lg rounded-md cursor-pointer relative">
        <div className="hidden lg:flex">
          <img
            className="w-[640px] h-[240px] rounded-l-md overflow-hidden"
            src="/05.png"
            alt=""
          />
        </div>
        <div className="ml-10 my-5 mr-10">
          <h2 className="text-2xl font-semibold">
            TPI CPC Solo Fast Programming Contest - 04
          </h2>
          <div className="text-secondary group-hover:text-black font-semibold">
            <i className="fa-regular fa-clock"></i>{" "}
            <span>14 Jan, 2023 - 14 Jan, 2023</span>
          </div>
          <p className="font-medium ">
            TPC CPC is arranging a webinar on 30th January, 2023 conveniently
            titled “Importance of digital awareness for smart career”
            collaborating with Youth in Di
          </p>
          <span className="absolute top-0 right-0 p-1 shadow-lg text-green-800 font-semibold bg-green-400 rounded-md">
            Finished
          </span>
        </div>
      </div>
      <div className="flex basis-1/2 my-10 group bg-gray-200 hover:bg-cpcYellow transition-all shadow-lg rounded-md cursor-pointer relative">
        <div className="hidden lg:flex">
          <img
            className="w-[640px] h-[240px] rounded-l-md overflow-hidden"
            src="/05.png"
            alt=""
          />
        </div>
        <div className="ml-10 my-5 mr-10">
          <h2 className="text-2xl font-semibold">
            TPI CPC Solo Fast Programming Contest - 03
          </h2>
          <div className="text-secondary group-hover:text-black font-semibold">
            <i className="fa-regular fa-clock"></i>{" "}
            <span>14 Jan, 2023 - 14 Jan, 2023</span>
          </div>
          <p className="font-medium ">
            TPC CPC is arranging a webinar on 30th January, 2023 conveniently
            titled “Importance of digital awareness for smart career”
            collaborating with Youth in Di
          </p>
          <span className="absolute top-0 right-0 p-1 shadow-lg text-green-800 font-semibold bg-green-400 rounded-md">
            Finished
          </span>
        </div>
      </div>
    </section>
  );
}

export default EventCard;
