'use client'
import Header from "@/components/Home/childComponents/Header"
import Footer from "@/components/Home/childComponents/Footer"
import ConsultHerosection from '@/components/consult/ConsultHerosection'
import ChallengeSection from '@/components/consult/ChallengeSolve'
import WorkWithSection from "@/components/consult/WorkWithSection"
import RebuildSection from "@/components/consult/RebuildSection"

export default function Consult() {

     return (
    <>
       <Header/>
      <ConsultHerosection/>
      <ChallengeSection/>
      <WorkWithSection/>
      <RebuildSection/>
         <Footer/>
    
    </>
     )
    }