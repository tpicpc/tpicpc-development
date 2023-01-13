import React from 'react'

function WhyJoinSection() {
  return (
    <section className="container my-8">
        <div className="flex flex-col text-center w-full mt-20">
            <h1 style={{background:"linear-gradient(89.98deg,hsla(0,0%,85%,0) .01%,#fbba31 34.37%,#fbba31.69%,hsla(0,0%,85%,0) 99.97%)"}}
                className="sm:text-3xl text-2xl py-2 font-medium title-font mb-4 text-gray-900">Why Join TPI Computer
                Programming Club ?</h1>


        </div>

        <div className="grid md:grid-cols-3 gap-4  grid-cols-1 text-center my-10 ">
            <div className="  border-primary border-2 py-8 px-2 rounded">
                <i className="fa-solid fa-user-tie text-primary text-6xl" aria-hidden="true"></i>
                <h2 className="mt-3 font-bold ">Professional Development</h2>
                <p className=" mt-6 	">As a member of the Computer Programming Club,
                    you'll have the opportunity to attend workshops, lectures, and other events that can help you
                    develop your skills and knowledge in programming and technology. This can be particularly valuable
                    for students who are looking to pursue a career in the tech industry.</p>
            </div>
            <div className="  border-primary border-2 py-8 px-2 rounded">
                <i className="fa fa-users  text-primary text-6xl" aria-hidden="true"></i>
                <h2 className="mt-3 font-bold ">Networking Opportunities</h2>
                <p className=" mt-6 ">Joining the Computer Programming Club allows
                    you to connect with other students who share your interests in programming and technology. This can
                    provide you with the chance to collaborate on projects, exchange ideas, and learn from one another.
                </p>
            </div>
            <div className=" border-primary border-2 py-8 px-2 rounded">
                <i className="fa-solid fa-chart-line text-primary text-6xl" aria-hidden="true"></i>
                <h2 className="mt-3 font-bold ">Fun and Engaging Activities</h2>
                <p className=" mt-6 "> The Computer Programming Club often hosts
                    events and activities that are both educational and enjoyable. This can include hackathons, coding
                    competitions, guest speakers, and more. By joining the club, you'll have the chance to participate
                    in these exciting and engaging events.</p>
            </div>
        </div>
    </section>

  )
}

export default WhyJoinSection