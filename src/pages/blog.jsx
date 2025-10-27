'use client'
import Head from "next/head";
import Footer from "@/components/Home/childComponents/Footer"
import Header from "@/components/Home/childComponents/Header"
import InsightHeroSection from "@/components/insights/InsightHeroSection"
import BrowseBlogs from "@/components/insights/BrowseBlogs"
import GoToTop from "@/components/GoToTop";


export default function Insights() {

     return (
       <>
       <GoToTop/>
         <Head>
           <title>Insights & Industry Trends Blog | General Tech Works</title>
           <meta
             name="description"
             content="Stay updated with the latest tech insights, expert tips, and digital trends. Explore articles from the minds behind innovation at General Tech Works."
           />
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
           />
           <meta charSet="UTF-8" />
           <link
             rel="canonical"
             href="https://generaltechworks.com/blog/"
           />
         </Head>
         <Header />
         <InsightHeroSection />
         <BrowseBlogs />
         <Footer />
       </>
     );
              }