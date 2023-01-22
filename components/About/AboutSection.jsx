function AboutSection() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex px-5 py-24 md:flex-col-reverse flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-4/5">
            <p className="mt-8 text-justify md:text-justify lg:text-justify lg:mr-12">
              Welcome to the TPI Computer Programming Club! We are a group of
              students who are passionate about technology and programming. Our
              goal is to provide a supportive and welcoming environment for
              students to explore their interests in these fields and develop
              their skills and knowledge.
              <br />
              <br />
              As a member of the club, you'll have the opportunity to attend
              workshops, lectures, and other events that can help you stay
              up-to-date with the latest technology and trends in the industry.
              You'll also have the chance to connect with other students,
              professionals, and industry leaders through networking and
              collaboration opportunities.
            </p>
          </div>
          <div className="w-full">
            <img
              className="object-cover object-center rounded lg:w-[700px] lg:h-400 "
              alt="hero"
              src="/group-img/1673766130925.jpg"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container flex px-5 py-24 md:flex-col flex-col lg:flex-row items-center">
          <div className="w-full lg:mr-10">
            <img
              className="object-cover object-center rounded lg:w-[700px] lg:h-400 mt-5"
              alt="hero"
              src="/group-img/about-2.jpg"
            />
          </div>

          <div className="lg:w-4/5">
            <p className="mt-8 text-justify md:text-justify lg:text-justify lg:mr-12">
              In addition to educational and professional development events,
              the TPI Computer Programming Club also hosts fun and engaging
              activities such as hackathons, coding competitions, and guest
              speakers. We believe that learning should be enjoyable and strive
              to create a positive and dynamic atmosphere for our members.
              <br />
              <br />
              Whether you're just starting out in programming or have advanced
              skills, the TPI Computer Programming Club has something for
              everyone. We hope you'll join us and become a part of our
              community of tech-savvy students.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
