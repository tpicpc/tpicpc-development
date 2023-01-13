function Header() {
  return (
    <header className="bg-white">
      <nav className="container bg-white flex justify-between items-center">
        <div>
          <img
            className="w-20 cursor-pointer mt-3"
            src="tpicpclogo.png"
            alt=""
          />
        </div>

        <div
          id="nav-links"
          className="md:static absolute bg-white left-0 top-[-100%] md:w-auto w-full flex items-center px-5"
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
            <li>
              <a
                className="hover:text-primary  decoration-2 font-bold"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary decoration-2 font-bold"
                href="team.html"
              >
                Team
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary  decoration-2 font-bold"
                href="blogs.html"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary  decoration-2 font-bold"
                href="event.html"
              >
                Events
              </a>
            </li>
            <li className="md:hidden lg:flex sm:hidden">
              <a target="_blank" href="https://www.facebook.com/tpicpc">
                <i className="fa-brands fa-facebook-f hover:text-primary cursor-pointer md:px-2 text-2xl mt-2"></i>
              </a>

              <a target="_blank" href="https://www.youtube.com/@tpicpc">
                <i className="fa-brands fa-youtube hover:text-cpcRed cursor-pointer text-2xl md:px-3 mt-2"></i>
              </a>

              <a target="_blank" href="https://www.instagram.com/tpicpc">
                <i className="fa-brands fa-instagram hover:text-primary cursor-pointer text-2xl md:px-3 mt-2"></i>
              </a>

              <a target="_blank" href="https://github.com/tpicpc">
                <i className="fa-brands fa-github hover:text-secondary cursor-pointer md:px-3 text-2xl mt-2"></i>
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/company/tpicpc/"
              >
                <i className="fa-brands fa-linkedin-in hover:text-cpcRed cursor-pointer text-2xl md:px-3 mt-2"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://forms.gle/eYDGgffwRXBK8SJA7"
            target="_blank"
            className="hidden md:flex bg-primary text-white px-5 py-2 rounded-full hover:bg-secondary"
          >
            Join Now
          </a>
          <ion-icon
            onclick="menuIcons(this)"
            name="menu"
            className="text-3xl cursor-pointer md:hidden hover:text-primary"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
}

export default Header;
