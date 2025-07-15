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
  },{
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
  }

  ];

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
      <Head>
        <title>Insights</title>
      </Head>
      <div className="mt-26 mb-26">
        <main className="util-flex util-flex-1 util-mx-1-5 ">
          <div className="blog-title">
            <h1>Browse All Blogs</h1>
          </div>
          <div className="grid-cols-fixed-4">
           {blogData.slice(0, visibleCount).map((blog, index) => (
            <BlogCard
              key={index}
              imageSrc={blog.imageSrc}
              title={blog.title}
              link={blog.link}
              category="CATEGORY"
              linkText="Read More"
            />
             ))}
          </div>

         {visibleCount < blogData.length && (
        <div className="flex justify-center mt-15">
          <button
            href="#"
            className="client-button bg-white text-[#FFB100] border border-[#FFB100] hover:bg-[#FFB100] hover:text-white"
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
