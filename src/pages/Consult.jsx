'use client'
import Header from "@/components/Home/childComponents/Header"
import Footer from "@/components/Home/childComponents/Footer"
import ConsultHerosection from '@/components/consult/ConsultHerosection'
import ChallengeSection from '@/components/consult/ChallengeSolve'
import WorkWithSection from "@/components/consult/WorkWithSection"
import RebuildSection from "@/components/consult/RebuildSection"
import SuccessStories from "@/components/consult/SuccessStories"
import ConsultSection from '@/components/consult/ConsultSection'
import Roadmap from "@/components/consult/Roadmap"

export default function Consult() {

     return (
    <>
       <Header/>
      <ConsultHerosection/>
      <ChallengeSection/>
      <Roadmap/>
      <SuccessStories/>
      <WorkWithSection/>
      <ConsultSection/>
      <RebuildSection/>
      
      
         <Footer/>
    
    </>
     )
    }