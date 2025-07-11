'use client'
import Head from 'next/head'
import  Header from '../components/Home/childComponents/Header'
import Next_Steps from '../components/Home/childComponents/Next_Steps'
import Footer from '../components/Home/childComponents/Footer'
import MobileCards from '@/components/Home/childComponents/MobileCards'
import MobileAppDesign from '@/components/Home/childComponents/MobileAppsDesign'
import UseCases from '@/components/Home/childComponents/UseCases'
import ProductThinking from '@/components/Home/childComponents/ProductThinking'

export default function mobile_apps() {


  return (
    <>
    <Head>
        <title>Mobile Apps </title>
      </Head>
            <Header/>
              <MobileAppDesign/>
            <MobileCards/>
            <UseCases/>
          <ProductThinking/>
          <Next_Steps/>
          <Footer/>
  
       </>
     )
   }
