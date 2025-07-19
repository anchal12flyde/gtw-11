import { useState, useEffect } from "react";
import Head from "next/head";
import BlogCard from "@/components/globalcomponents/BlogCards";


export default function BrowseStories() {
  const blogData = [
   {
    imageSrc: "/images/assets/story_img1.png",
    details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
    
  },
  {
    imageSrc: "/images/assets/story_img2.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
  },
  {
    imageSrc: "/images/assets/story_img3.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
  },
  {
    imageSrc: "/images/assets/story_img4.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
  },
  {
    imageSrc: "/images/assets/story_img1.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
  },{
    imageSrc: "/images/assets/story_img2.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
  },
  {
    imageSrc: "/images/assets/story_img3.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
  },
  {
    imageSrc: "/images/assets/story_img4.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
  },
  {
    imageSrc: "/images/assets/story_img1.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
  },
  {
    imageSrc: "/images/assets/story_img2.png",
     details:"TransExpert has been an exceptional partner to work with. ",
    title: "Design Slow. Build Smart. Launch Fast.",
    link: "/Story_Details",
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
        <title>Success Stories</title>
      </Head>
      <div 
       className="mb-26">
        <main className="util-flex util-flex-1 util-mx-1-5 mt-26">
          <h1 className="heading-systems mb-6">
           Success Stories – How GTW Transforms Businesses
        </h1>
          <div className="grid-cols-fixed-4">
           {blogData.slice(0, visibleCount).map((blog, index) => (
            <BlogCard
            key={index}
            imageSrc={blog.imageSrc}
            title={blog.title}
            link={blog.link}
            details= {blog.details}
            linkText="View Story"
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
