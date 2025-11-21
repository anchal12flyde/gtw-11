import Head from "next/head";
import Header from "@/components/Home/childComponents/Header";
import Footer from "@/components/Home/childComponents/Footer";
import ImpactVolume from "@/components/successstories/ImpactVolume";
import RebuildSection from "@/components/consult/RebuildSection";
import StoryDetaling from "@/components/globalcomponents/StoryDetailing";
import api from "@/utils/api";


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // Server generate karega slug page ko
  };
}

export async function getStaticProps({ params }) {
  try {
    // 🔥 API CALL USING api.js (NO ENV)
    const res = await api.get(`/case-studies/${params.slug}`);
    const data = res.data;

    if (!data) {
      return { notFound: true };
    }

    return {
      props: { blog: data },
      revalidate: 60, // ISR (optional)
    };
  } catch (err) {
    console.error("API ERROR:", err);
    return { notFound: true };
  }
}

export default function BlogDetailPage({ blog }) {
  if (!blog) {
    return <div className="p-10 text-center">Blog not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.meta_title}</title>
        <meta name="description" content={blog.meta_description} />
      </Head>

      <Header />

      {/* API fetch now handled INSIDE the component using blog.slug */}
      <StoryDetaling slug={blog.slug} />

      <ImpactVolume />
      <RebuildSection />
      <Footer />
    </>
  );
}
