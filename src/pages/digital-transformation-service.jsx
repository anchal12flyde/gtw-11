'use client'
import Head from "next/head"
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
     
         <Head>
           <title>Digital Transformation Services | General Tech Works</title>
           <meta
             name="description"
             content="Accelerate your business growth with our digital transformation services. General Tech Works modernizes systems, streamlines processes & drives innovation."
           />
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
           />
           <meta charSet="UTF-8" />
           <link
             rel="canonical"
             href="https://generaltechworks.com/digital-transformatio-service/"
           />
         </Head>
         <ConsultHerosection />
         <ChallengeSection />
         <ExecutionCapability />
         <Roadmap />
         <SuccessStories />
         <WorkWithSection />
         <ConsultSection />
         <YellowStrip />
         <RebuildSection />
         <Next_Steps />
         <Footer />
       </>
     );
    }