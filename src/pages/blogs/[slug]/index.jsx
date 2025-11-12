"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BlogCard from "@/components/globalcomponents/BlogCards";
import Header from "@/components/Home/childComponents/Header";
import Footer from "@/components/Home/childComponents/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BlogDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // ✅ Fetch the main post
        const res = await fetch(
          `https://lightblue-rhinoceros-219580.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        if (!data.length) throw new Error("Post not found");
        const currentPost = data[0];
        setPost(currentPost);

        // ✅ Fetch related posts
        const relatedRes = await fetch(
          `https://lightblue-rhinoceros-219580.hostingersite.com/wp-json/wp/v2/posts?_embed&per_page=4`,
          { cache: "no-store" }
        );
        const relatedData = await relatedRes.json();
        const filtered = relatedData
          .filter((r) => r.id !== currentPost.id)
          .slice(0, 3);
        setRelated(filtered);
      } catch (err) {
        console.error("❌ Error fetching blog:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading)
    return <p className="text-center mt-20 text-gray-500">Loading post...</p>;
  if (error)
    return (
      <p className="text-center mt-20 text-red-500">
        ⚠️ {error || "Something went wrong"}
      </p>
    );
  if (!post)
    return <p className="text-center mt-20 text-gray-500">Post not found</p>;

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/insights_bg.png";
  const category =
    post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
  const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
    <Header/>
    <div className="util-flex util-flex-1 util-mx-1-5">
      <div className="px-0 lg:px-30">
        {/* Back + Share */}
        <div className="mt-15">
          <div className="flex items-center justify-between mb-6">
            {/* Back button */}
            <div className="inline-flex items-center gap-[10px] rounded-[6px] bg-gray-light p-[12px_16px]">
              <Link
                href="/blog"
                className="flex items-center text-sm text-gray-dark2 hover:underline"
              >
                <img
                  src="/images/assets/backArrow.png"
                  alt="Back"
                  className="w-2 h-3 mr-2"
                />
                Back to GTW Blog
              </Link>
            </div>

            {/* Share icons */}
            <div className="flex items-center gap-2 relative perspective">
              <div
                className={`absolute left-[-120px] top-0 flex origin-right flip-container transition-transform duration-500 ${
                  open ? "rotate-y-0" : "rotate-y-90"
                }`}
              >
                <Image
                  src="/images/assets/facebookIcon.png"
                  alt="Facebook"
                  width={43}
                  height={43}
                  className="hover:scale-110 transition-transform duration-300"
                />
                <Image
                  src="/images/assets/linkedinIcon.png"
                  alt="LinkedIn"
                  width={43}
                  height={43}
                  className="hover:scale-110 transition-transform duration-300"
                />
                <Image
                  src="/images/assets/eclipse1 (5).png"
                  alt="Threads"
                  width={43}
                  height={43}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="z-10 transition-transform duration-300"
              >
                <Image
                  src={
                    open
                      ? "/images/assets/crossIcon.png"
                      : "/images/assets/shareIcon.png"
                  }
                  alt="Toggle Share"
                  width={43}
                  height={43}
                />
              </button>

              <Image
                src="/images/assets/shareLink.png"
                alt="Link"
                width={43}
                height={43}
              />
            </div>
          </div>

          {/* Post title + meta */}
          <h1
            className="heading-systems mb-8"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="blog-details-text flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div className="flex items-center gap-[26px]">
              <span className="category">Category:</span>
              <p className="insight-tags">
                <span>{category}</span>
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <p>{publishedDate}</p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="background-hero mt-16">
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-auto object-cover rounded-xl"
            width={1920}
            height={1080}
          />
        </div>

        {/* Blog Content */}
        <motion.div
          className="mt-20 blog-reading flex flex-col gap-y-16 prose max-w-none"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
        </motion.div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-26 mb-26 md:mb-0">
            <h1 className="heading-systems text-center">Related Articles</h1>

            <div className="grid-cols-blog mt-10">
              {related.map((r) => (
                <BlogCard
                  key={r.id}
                  imageSrc={
                    r._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/fallback.jpg"
                  }
                  title={r.title.rendered}
                  link={`/blogs/${r.slug}`}
                  category={
                    r._embedded?.["wp:term"]?.[0]?.[0]?.name || "CATEGORY"
                  }
                  linkText="Read More"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}
