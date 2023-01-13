import React from "react";

function OtherHeroSection({ title}) {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 h-64">
      <div className="container">
        <h2 className="flex items-center justify-center pt-24 font-bold text-3xl md:text-6xl text-white ">
          {title}
        </h2>
      </div>
    </section>
  );
}

export default OtherHeroSection;
