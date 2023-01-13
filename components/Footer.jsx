function Footer() {
  return (
    <footer className="bg-slate-800">
      <div className="container">
        <div className="lg:flex lg:justify-between">
          <div className=" flex justify-center items-center">
            <img
              className="md:h-[150px] md:w-[150px] lg:h-32 lg:w-32"
              src="/footerLogo.png"
              alt=""
            />
          </div>
          <div className="text-center lg:w-[500px] mt-10 ">
            <h1 className="text-3xl text-white">About TPI CPC</h1>
            <p className="my-6 text-white">
              TPI CPC is the most primitive and extensive club as well as the
              biggest club in Thakurgaon Polytechnic Institute.We work together
              to explore every field of Computer Science .
            </p>
          </div>
          <div className="mt-10">
            <div>
              <h1 className="text-3xl text-white text-center">Find Us On</h1>
            </div>
            <div className="flex justify-center items-center mt-6">
              <a target="_blank" href="https://www.facebook.com/tpicpc">
                <i className="fa-brands fa-facebook-f hover:text-primary text-2xl p-3 text-white"></i>
              </a>
              <a target="_blank" href="https://www.youtube.com/@tpicpc">
                <i className="fa-brands fa-youtube hover:text-cpcRed text-2xl p-3 text-white"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/tpicpc">
                <i className="fa-brands fa-instagram hover:text-primary text-2xl p-3 text-white"></i>
              </a>
              <a target="_blank" href="https://github.com/tpicpc">
                <i className="fa-brands fa-github hover:text-primary text-2xl p-3 text-white"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/tpicpc/"
              >
                <i className="fa-brands fa-linkedin-in hover:text-cpcRed text-2xl p-3 text-white"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center bg-slate-800 text-white p-8">
          {new Date().getFullYear()} &copy;TPI - Computer Programming Club
        </p>
      </div>
    </footer>
  );
}

export default Footer;
