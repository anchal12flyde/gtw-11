'use client'
import Head from 'next/head'
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
      <Hero_Section />

      <Card_Section />

      <Explore />

      <Industries />

      <Next_Steps />

      <Footer />
    </>
  );
}
