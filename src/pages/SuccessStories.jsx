'use client'
import Header from "@/components/Home/childComponents/Header"
import Footer from "@/components/Home/childComponents/Footer"
import Next_Steps from "@/components/Home/childComponents/Next_Steps"
import BrowseStories from "@/components/successstories/BrowseStories"
import StoriesHeroSection from "@/components/successstories/StoriesHeroSection"

export default function SuccessStories() {

     return (
    <>
    <Header/>
    <StoriesHeroSection/>
    <BrowseStories/>
   <Next_Steps/>
    <Footer/>
    </>
     )
}