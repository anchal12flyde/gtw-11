'use client'
import Head from "next/head"
import Header from "@/components/Home/childComponents/Header"
import Footer from "@/components/Home/childComponents/Footer"
import Next_Steps from "@/components/Home/childComponents/Next_Steps"
import BlogDetails from "@/components/insights/BlogDetails"

export default function Blog_Details() {

     return (
    <>
    <Head>
        <title>Blog Details</title>
      </Head>
    <Header/>
   <BlogDetails/>
    <Next_Steps/>
    <Footer/>
    </>
     )
           }