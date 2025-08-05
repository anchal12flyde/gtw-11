'use client'
import Head from "next/head";
import Header from "@/components/Home/childComponents/Header"
import Footer from "@/components/Home/childComponents/Footer"
import Next_Steps from "@/components/Home/childComponents/Next_Steps"
import BrowseStories from "@/components/successstories/BrowseStories"
import StoriesHeroSection from "@/components/successstories/StoriesHeroSection"

export default function SuccessStories() {

     return (
       <>
         <Head>
           <title>
             Client Success Stories & Case Studies | General Tech Works
           </title>
           <meta
             name="description"
             content="Discover how General Tech Works empowers clients through real-world success stories. Explore case studies showcasing innovation, growth, and digital impact.."
           />
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
           />
           <meta charSet="UTF-8" />
           <link
             rel="canonical"
             href="https://generaltechworks.com/success-stories/"
           />
         </Head>

         <Header />
         <StoriesHeroSection />
         <BrowseStories />
         <Next_Steps />
         <Footer />
       </>
     );
}