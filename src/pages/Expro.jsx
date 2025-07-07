'use client'
import Footer from "@/components/Home/childComponents/Footer"
import ExproHeroSection from "@/components/expro/ExproHeroSection"
import D2C from "@/components/expro/D2C"
import TechStack from "@/components/expro/TechStack"
import Infrastructure from "@/components/expro/Infrastructure"
import ExecutionCapability from "@/components/consult/ExecutionCapability"


export default function Expro() {

     return (
    <>
       <ExproHeroSection/>
       <ExecutionCapability/>
       <D2C/>
       <TechStack/>
       <Infrastructure/>
        <Footer/> 
           </>
            )
           }