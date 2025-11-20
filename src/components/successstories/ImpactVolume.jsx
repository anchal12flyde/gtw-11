'use client'
import BlogCard from "../globalcomponents/BlogCards";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";



const items = [
  { number: "02", text: "Ready in weeks, not months" },
  { number: "02", text: "Ready in weeks, not months" },
  { number: "02", text: "Ready in weeks, not months" },
  { number: "02", text: "Ready in weeks, not months" },
];
const blogData = [
  {
    imageSrc:
      "https://ik.imagekit.io/a9uxeuyhx/New%20Folder/Ezstays.png?updatedAt=1763033744937",
    details: "Operating System for Student Housing.",
    title: "EzStays",
    slug: "ezstays",
  },
  {
    imageSrc:
      "https://ik.imagekit.io/a9uxeuyhx/New%20Folder/Itel%20-%20Mobiles.png?updatedAt=1763033783590",
    details: "A Custom-Built E-commerce Platform for a D2C Electronics Brand.",
    title: "Itel",
    slug: "itel",
  },
  {
    imageSrc:
      "https://ik.imagekit.io/a9uxeuyhx/New%20Folder/transexpert%20mockup.jpg?updatedAt=1763033819180",
    details: "A Complete Corporate Rebuild for a Logistics Powerhouse.",
    title: "TransExpert",
    slug: "transexpert",
  },
  {
    imageSrc:
      "https://ik.imagekit.io/a9uxeuyhx/New%20Folder/Numyum.png?updatedAt=1763033714108",
    details: "New food tech case study",
    title: "Numyum",
    slug: "numyum",
  },
];
export default function ImpactVolume() {
  const pathname = usePathname(); 
  const currentSlug = pathname.split("/").pop(); 
  const filteredBlogs = blogData.filter((item) => item.slug !== currentSlug);
  return (
    <>
      <section className=" bg-white-color1 util-flex util-flex-1 util-mx-1-5 ">
        <div className="px-0 sm:px-30">
          {/* <h2 className="heading-systems text-center  mb-8">
            Impact That Speaks Volumes
          </h2>
          <div className="stack-grid ">
            {items.map((item, index) => (
              <div
                key={index}
                className="stack-volume hover:scale-[1.02] transition-transform"
              >
                <span className="impact-number">{item.number}</span>
                <span className="impact-text">{item.text}</span>
              </div>
            ))}
          </div> */}

          <div className="mt-26 mb-26">
            <h1 className="heading-systems text-center">Related Articles</h1>

            <div className="grid-cols-blog mt-10">
              {filteredBlogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  imageSrc={blog.imageSrc}
                  title={blog.title}
                  link={`/success-stories/${blog.slug}`}
                  category="CATEGORY"
                  linkText="Read More"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
