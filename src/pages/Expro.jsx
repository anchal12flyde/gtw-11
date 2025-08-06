'use client'
import Head from "next/head"
import Footer from "@/components/Home/childComponents/Footer"
import ExproHeroSection from "@/components/expro/ExproHeroSection"
import D2C from "@/components/expro/D2C"
import TechStack from "@/components/expro/TechStack"
import Infrastructure from "@/components/expro/Infrastructure"
import OutgrowStack from "@/components/expro/OutgrowStack"
import ShopifyMagento from "@/components/expro/ShopifyMagento"
import ChooseExpro from "@/components/expro/ChooseExpro"
import OperationalChaos from "@/components/expro/OperationalChaos"
import HeadlessSection from "@/components/expro/HeadlessSection"

export default function expro() {

     return (
       <>
         <Head>
           <title>
             ExPro – Smart eCommerce Software Solution | General Tech Works
           </title>
           <meta
             name="description"
             content="Boost your online business with ExPro-our powerful, scalable, and customizable eCommerce software built for seamless management and accelerated growth."
           />
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
           />
           <meta charSet="UTF-8" />
           <link
             rel="canonical"
             href="https://generaltechworks.com/expro/"
           />
         </Head>
         <ExproHeroSection />
         {/* <HeadlessSection/> */}
         {/* <OperationalChaos/> */}
         <OutgrowStack />
         <D2C />
         <TechStack />
         <ShopifyMagento />
         <ChooseExpro />
         <Infrastructure />
         <Footer />
       </>
     );
           }