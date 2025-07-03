'use client'
import Footer from '../components/Home/childComponents/Footer'
import HeroSection from '@/components/gtwWay/HeroSection'
import OperateAcrossSection from '@/components/gtwWay/OperateAcrossSection'
import FoundationSection from '@/components/gtwWay/FoundationSection'
import Testimonials from '@/components/gtwWay/Testimonials'
import Next_Steps from '@/components/Home/childComponents/Next_Steps'

export default function GTW_Way() {

     return (
    <>
     
    <HeroSection/>
    <OperateAcrossSection/>
    <Testimonials/>
    <FoundationSection/>
    <Next_Steps/>
    <Footer/>
        </>
      )
    }