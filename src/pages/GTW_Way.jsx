'use client'
import  Header from '../components/Home/childComponents/Header'
import Footer from '../components/Home/childComponents/Footer'
import HeroSection from '@/components/gtwWay/HeroSection'
import OperateAcrossSection from '@/components/gtwWay/OperateAcrossSection'
import FoundationSection from '@/components/gtwWay/FoundationSection'
import Testimonials from '@/components/gtwWay/Testimonials'

export default function GTW_Way() {

     return (
    <>
     <Header/>
    {/* <HeroSection/> */}
    <OperateAcrossSection/>
    <Testimonials/>
    <FoundationSection/>
    
    
    
    
    
    <Footer/>
       
    
        </>
      )
    }