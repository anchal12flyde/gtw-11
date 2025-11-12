import { useState, useEffect } from "react";
import Head from "next/head";
import BlogCard from "@/components/globalcomponents/BlogCards";

export default function BrowseBlogs() {
  const blogData = [
    {
      imageSrc: "/images/assets/blog_img1.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img2.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img3.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img4.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img1.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img2.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img3.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img4.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img1.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
    {
      imageSrc: "/images/assets/blog_img2.png",
      title: "Design Slow. Build Smart. Launch Fast.",
      link: "/Blog_Details",
    },
  ];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch live blogs
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://lightblue-rhinoceros-219580.hostingersite.com/wp-json/wp/v2/posts?_embed",
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("❌ Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(8);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="mt-26 mb-26">
        <main className="util-flex util-flex-1 util-mx-1-5 ">
          <div className="blog-title">
            <h1>Browse All Blogs</h1>
          </div>
          <div className="grid-cols-fixed-4">
            {!loading ? (
              posts &&
              posts.map((b, index) => (
                <BlogCard
                  key={index}
                  imageSrc={b.imageSrc}
                  title={b.title?.rendered}
                  link={b.link}
                  category="CATEGORY"
                  linkText="Read More"
                />
              ))
            ) : (
              <p>Loading....</p>
            )}
          </div>

          {visibleCount < blogData.length && (
            <div className="flex justify-center mt-15">
              <button
                href="#"
                className="client-button bg-white-color1 text-primary border border-primary hover:bg-primary hover:text-white-color1"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
