import Head from "next/head";
import blogs from "@/data/blogs.json";
import Header from "@/components/Home/childComponents/Header";
import Footer from "@/components/Home/childComponents/Footer";
import ImpactVolume from "@/components/successstories/ImpactVolume";
import RebuildSection from "@/components/consult/RebuildSection";
import StoryDetaling from "@/components/globalcomponents/StoryDetailing";
import GoToTop from "@/components/GoToTop";

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false, // false = 404 for unknown slug
  };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug);

  return {
    props: {
      blog: blog || null,
    },
  };
}

export default function BlogDetailPage({ blog }) {
  if (!blog) {
    return <div className="p-10 text-center">Blog not found.</div>;
  }

  return (
    <>
    <GoToTop/>
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
