'use client'
import Head from 'next/head'
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
    <Head>
            <title>Home Page</title>
          </Head>
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
