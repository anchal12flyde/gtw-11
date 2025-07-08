'use client'
import Footer from "@/components/Home/childComponents/Footer"
import ExproHeroSection from "@/components/expro/ExproHeroSection"
import D2C from "@/components/expro/D2C"
import TechStack from "@/components/expro/TechStack"
import Infrastructure from "@/components/expro/Infrastructure"
import OutgrowStack from "@/components/expro/OutgrowStack"
import ShopifyMagento from "@/components/expro/ShopifyMagento"
import ChooseExpro from "@/components/expro/ChooseExpro"
import OperationalChaos from "@/components/expro/OperationalChaos"

export default function Expro() {

     return (
    <>
       <ExproHeroSection/>
       <OperationalChaos/>
       <OutgrowStack/>
       <D2C/>
       <TechStack/>
       <ShopifyMagento/>
       <ChooseExpro/>
       <Infrastructure/>
        <Footer/> 
           </>
            )
           }