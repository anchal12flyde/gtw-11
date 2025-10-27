'use client'
import Head from 'next/head'
import Footer from '../components/Home/childComponents/Footer'
import HeroSection from '@/components/gtwWay/HeroSection'
import OperateAcrossSection from '@/components/gtwWay/OperateAcrossSection'
import FoundationSection from '@/components/gtwWay/FoundationSection'
import Testimonials from '@/components/gtwWay/Testimonials'
import Next_Steps from '@/components/Home/childComponents/Next_Steps'
import GoToTop from '@/components/GoToTop'

export default function GTW_Way() {

     return (
       <>
       <GoToTop/>
         <Head>
           <title>
             Our Philosophy | Vision-Driven Innovation | General Tech Works
           </title>
           <meta
             name="description"
             content="At General Tech Works, our philosophy centers on innovation, integrity, and client success-driving digital solutions that make a real-world impact."
           />
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
           />
           <meta charSet="UTF-8" />
           <link
             rel="canonical"
             href="https://generaltechworks.com/philosophy/"
           />
         </Head>
         <HeroSection />
         <OperateAcrossSection />
         <Testimonials />
         <FoundationSection />
         <Next_Steps />
         <Footer />
       </>
     );
    }