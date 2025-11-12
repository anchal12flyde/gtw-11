'use client'
import Head from 'next/head'
import Next_Steps from './Home/childComponents/Next_Steps'
import Footer from './Home/childComponents/Footer'

import HeroSection from './gtwWay/HeroSection';
import OperateAcrossSection from './gtwWay/OperateAcrossSection';
import FoundationSection from './gtwWay/FoundationSection';
import Testimonials from './gtwWay/Testimonials';


export default function Home() {


  return (
    <>
      <Head>
        <title>
          Digital Transformation & Tech Solutions | General Tech Works
        </title>
        <meta
          name="description"
          content="Empowering businesses with scalable web, mobile, and software solutions. General Tech Works builds secure, user-first digital infrastructure for growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://generaltechworks.com/" />
      </Head>
      {/* <Header /> */}
      <HeroSection />
      <OperateAcrossSection />
      <Testimonials />
      <FoundationSection />
      <Next_Steps />

      <Footer />
    </>
  );
}
