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
        <title>Mobile App Development Company | General Tech Works</title>
        <meta
          name="description"
          content="Build powerful Android & iOS apps with General Tech Works. We deliver scalable, secure, and user-centric mobile app solutions tailored to your business goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Header />
      <MobileAppDesign />
      <MobileCards />
      <UseCases />
      <ProductThinking />
      <Next_Steps />
      <Footer />
    </>
  );
   }
