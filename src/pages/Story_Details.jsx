'use client'
import Header from "@/components/Home/childComponents/Header"
import Footer from "@/components/Home/childComponents/Footer"
import StoryDetails from "@/components/successstories/StoryDetails"
import RebuildSection from "@/components/consult/RebuildSection"
import Testimonial from "@/components/successstories/Testimonal"
import ImpactVolume from "@/components/successstories/ImpactVolume"

export default function Story_Details() {

     return (
    <>
    <Header/>
   <StoryDetails/>
   <Testimonial/>
   <ImpactVolume/>
   <RebuildSection/>
    <Footer/>
    </>
     )
           }