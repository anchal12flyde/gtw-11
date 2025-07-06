'use client'
import { useState } from 'react'
import Link from 'next/link'
import  Header from './Home/childComponents/Header'
import Next_Steps from './Home/childComponents/Next_Steps'
import Footer from './Home/childComponents/Footer'
import Hero_Section from './Home/childComponents/Hero_Section'
import Card_Section from './Home/childComponents/Card_Section'
import Explore from './Home/childComponents/Explore_Digital'
import Industries from './Home/childComponents/IndustriesSection'

export default function Home() {


  return (
    <>
    <Header/>
        <Hero_Section />
        
        <Card_Section />

        <Explore />

        <Industries />

        <Next_Steps />

      <Footer/>
   

    </>
  )
}
