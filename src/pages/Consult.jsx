'use client'
import Footer from "@/components/Home/childComponents/Footer"
import ConsultHerosection from '@/components/consult/ConsultHerosection'
import ChallengeSection from '@/components/consult/ChallengeSolve'
import WorkWithSection from "@/components/consult/WorkWithSection"
import RebuildSection from "@/components/consult/RebuildSection"
import SuccessStories from "@/components/consult/SuccessStories"
import ConsultSection from '@/components/consult/ConsultSection'
import Roadmap from "@/components/consult/Roadmap"
import Next_Steps from '@/components/Home/childComponents/Next_Steps'
import ExecutionCapability from "@/components/consult/ExecutionCapability"
import YellowStrip from "@/components/consult/YellowStrip"

export default function Consult() {

     return (
    <>
       
      <ConsultHerosection/>
      <ChallengeSection/>
      <ExecutionCapability/>
      <Roadmap/>
      <SuccessStories/>
      <WorkWithSection/>
      <ConsultSection/>
      <YellowStrip/>
      <RebuildSection/>
       <Next_Steps/>
         <Footer/>
    
    </>
     )
    }