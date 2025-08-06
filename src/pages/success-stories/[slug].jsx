"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blogs from "@/data/blogs.json";
import Header from "@/components/Home/childComponents/Header";
import Footer from "@/components/Home/childComponents/Footer";
import ImpactVolume from "@/components/successstories/ImpactVolume";
import RebuildSection from "@/components/consult/RebuildSection";
import StoryDetaling from "@/components/globalcomponents/StoryDetailing";

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      const found = blogs.find((item) => item.slug === slug);
      setBlog(found || null);
    }
  }, [slug]);

  if (!slug || !blog) {
    return <div className="p-10 text-center"></div>; 
  }

  return (
    <>
      <Head>
        <title>{blog.meta_title}</title>
        <meta name="description" content={blog.meta_description} />
      </Head>
      <Header />
      <StoryDetaling
        title={blog.title || ""}
        date={blog.date || ""}
        category={blog.category || ""}
        tags={blog.tags || []}
        heroImage={blog.heroImage || null}
        sections={blog.sections || []}
        quote={blog.quote || ""}
        author={blog.author || ""}
        position={blog.position || ""}
      />
      <ImpactVolume />
      <RebuildSection />
      <Footer />
    </>
  );
}
