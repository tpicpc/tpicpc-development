// "use client"
// import React, { useEffect } from "react";
import AboutSection from "../../../components/About/AboutSection";
import OtherHeroSection from "../../../components/OtherHeroSection";
// import Head from 'next/head'

export const metadata = {
  title: 'About Us | TPI - Computer Programming Club',
};

function page() {

  // when visiting this page, the page will be scrolled to the top
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div>
      {/* <Head>
        <title>About Us | TPI - Computer Programming Club</title>
      </Head> */}
      <OtherHeroSection title="About Us" />
      <AboutSection />
    </div>
  );
}

export default page;
