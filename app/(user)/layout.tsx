import "../../styles/globals.css";
import "../../styles/custom.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "TPI - Computer Programming Club",
  description: "Join TPI - Computer Programming Club to learn and explore the world of coding. Our experienced instructors will guide you through the fundamentals of programming languages such as Java, Python, and C++. Whether you're a beginner looking to get started or a seasoned programmer looking to expand your skillset, our club has something for everyone. With hands-on projects, hackathons, and workshops, you'll have the opportunity to put your skills to the test and develop your knowledge in a collaborative and supportive environment. Join us today and take your programming skills to the next level!",
  keywords: "TPI,TPICPC,Computer Programming Club,Programming Club,Programming,Java,Python,C++,Coding,Learn,Explore,Instructors,Workshops,Hackathons,Projects,Hands-on,Skills,Knowledge,Supportive Environment,Join,Next Level",
  author: "TPI - Computer Programming Club",
  favicon: "/favicon.ico",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
