"use client";
import { useState, useEffect } from "react";

import OtherHeroSection from "../../../components/OtherHeroSection";

function page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sahinur"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data?.items);
        setLoading(false);
      });
  }, []);

  console.log(data);
  return (
    <>
      <OtherHeroSection title="Blogs" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div id="blog-card" className="flex flex-wrap -m-4">
            {data?.map((blogs, index) => (
              <div key={blogs.title} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center transform 
                    transition duration-1000 hover:scale-110"
                    src={blogs.thumbnail}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      <span>AUTHOR : {blogs.author}</span>
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {blogs.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      <span>Tropic : </span> 
                      {
                        blogs.categories.map((category, index) => (
                          <span key={index} className="font-medium">
                            {category}, 
                          </span>
                        ))}
        
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a
                        target="_blank"
                        href={blogs.link}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
