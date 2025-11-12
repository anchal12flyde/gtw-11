'use client'
import Head from 'next/head'
import Footer from '../components/Home/childComponents/Footer'
import Hero_Section from '@/components/Home/childComponents/Hero_Section';
import Card_Section from '@/components/Home/childComponents/Card_Section';
import Explore from '@/components/Home/childComponents/Explore_Digital';
import Industries from '@/components/Home/childComponents/IndustriesSection';

import Next_Steps from '@/components/Home/childComponents/Next_Steps'


export default function GTW_Way() {

     return (
       <>
         <Head>
           <title>
             Our Philosophy | Vision-Driven Innovation | General Tech Works
           </title>
           <meta
             name="description"
             content="At General Tech Works, our philosophy centers on innovation, integrity, and client success-driving digital solutions that make a real-world impact."
           />
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
           />
           <meta charSet="UTF-8" />
           <link
             rel="canonical"
             href="https://generaltechworks.com/philosophy/"
           />
         </Head>
         <Hero_Section />

         <Card_Section />

         <Explore />

         <Industries />

     

         <Next_Steps />
         <Footer />
       </>
     );
    }