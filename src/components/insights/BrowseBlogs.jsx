// pages/index.jsx
import Head from "next/head";
import BlogCard from "@/components/globalcomponents/BlogCards";

export default function BrowseBlogs() {
  const blogData = [
    "/images/assets/blog_img1.png",
    "/images/assets/blog_img2.png",
    "/images/assets/blog_img3.png",
    "/images/assets/blog_img4.png",
    "/images/assets/blog_img1.png",
    "/images/assets/blog_img2.png",
    "/images/assets/blog_img3.png",
    "/images/assets/blog_img4.png",
  ];

  return (
    <>
      <Head>
        <title>Blog Grid</title>
      </Head>
      <div className=" ">
<main className="util-flex util-flex-1 util-mx-1-5  py-12">
        <h1 className="text-sm fonts-normal mb-8">Browse All Blogs</h1>
        <div className=" grid-cols-fixed-4 ">
          {blogData.map((img, index) => (
            <BlogCard
              key={index}
              imageSrc={img}
              title="Design Slow. Build Smart. Launch Fast."
            />
          ))}
        </div>
      </main>
      </div>
      
    </>
  );
}
