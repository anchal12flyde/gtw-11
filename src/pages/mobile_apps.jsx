'use client'
import { useState } from 'react'
import Link from 'next/link'
import  Header from '../components/Home/Folder/Header'
import Next_Steps from '../components/Home/Folder/Next_Steps'
import Footer from '../components/Home/Folder/Footer'
import MobileCards from '@/components/Home/Folder/MobileCards'
import MobileAppDesign from '@/components/Home/Folder/MobileAppsDesign'
import UseCases from '@/components/Home/Folder/UseCases'
import ProductThinking from '@/components/Home/Folder/ProductThinking'

export default function mobile_apps() {


  return (
    <>
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
