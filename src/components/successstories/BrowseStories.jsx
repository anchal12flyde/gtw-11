import { useState, useEffect } from "react";
import Head from "next/head";
import BlogCard from "@/components/globalcomponents/BlogCards";


export default function BrowseStories() {
  const blogData = [
    {
      imageSrc: "/images/assets/story_img1.png",
      details: "Reinventing the Cloud Kitchen Ordering Experience. ",
      title: "Numyum",
      slug: "Numyum",
    },
    {
      imageSrc: "/images/assets/story_img2.png",
      details: "Operating System for Student Housing. ",
      title: "EzStays",
      slug: "Ezstays",
    },
    {
      imageSrc: "/images/assets/story_img3.png",
      details:
        " A Custom-Built E-commerce Platform for a D2C Electronics Brand. ",
      title: "Itel",
      slug: "Itel",
    },
    {
      imageSrc: "/images/assets/story_img4.png",
      details: "A Complete Corporate Rebuild for a Logistics Powerhouse. ",
      title: "TransExpert ",
      slug: "Transexpert",
    },
    // {
    //   imageSrc: "/images/assets/story_img1.png",
    //   details: "Reinventing the Cloud Kitchen Ordering Experience. ",
    //   title: "Numyum",
    //   link: "/Story_Details",
    // },
    // {
    //   imageSrc: "/images/assets/story_img2.png",
    //   details: "Operating System for Student Housing. ",
    //   title: "EzStays",
    //   link: "/Story_Details",
    // },
    // {
    //   imageSrc: "/images/assets/story_img3.png",
    //   details:
    //     " A Custom-Built E-commerce Platform for a D2C Electronics Brand. ",
    //   title: "Itel",
    //   link: "/Story_Details",
    // },
    // {
    //   imageSrc: "/images/assets/story_img4.png",
    //   details: "A Complete Corporate Rebuild for a Logistics Powerhouse. ",
    //   title: "TransExpert ",
    //   link: "/Story_Details",
    // },
    // {
    //   imageSrc: "/images/assets/story_img1.png",
    //   details: "Reinventing the Cloud Kitchen Ordering Experience. ",
    //   title: "Numyum",
    //   link: "/Story_Details",
    // },
    // {
    //   imageSrc: "/images/assets/story_img2.png",
    //   details: "Operating System for Student Housing. ",
    //   title: "EzStays",
    //   link: "/Story_Details",
    // },
  ];
  const [hasMounted, setHasMounted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(8);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize(); 
    setHasMounted(true); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  if (!hasMounted) return null;

  return (
    <>
      <Head>
        <title>Success Stories</title>
      </Head>
      <div className="mb-26">
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
                link={`/Successstories/${blog.slug}`}
                details={blog.details}
                linkText="View Story"
              />
            ))}
          </div>

          {visibleCount < blogData.length && (
            <div className="flex justify-center mt-15">
              <button
                href="#"
                className="client-button bg-white-color1 text-primary border border-primary hover:bg-primary hover:text-white-color1"
                onClick={() => setVisibleCount((prev) => prev + 4)}
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
