'use client'
import { useState } from 'react'
import Link from 'next/link'
import  Header from './Home/Folder/Header'
import Next_Steps from './Home/Folder/Next_Steps'
import Footer from './Home/Folder/Footer'
import Hero_Section from './Home/Folder/Hero_Section'
import Card_Section from './Home/Folder/Card_Section'
import Explore from './Home/Folder/Explore_Digital'
import Industries from './Home/Folder/IndustriesSection'

export default function Home() {


  return (
    <>
   <div className="min-h-screen flex flex-col">
      <Header/>

    <main className="flex-grow space-y-12">

      <Hero_Section />
      
      <Card_Section />

      <Explore />

      <Industries />

      <Next_Steps />

    </main>


      <Footer/>
    </div>

    </>
  )
}
