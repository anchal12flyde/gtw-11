// components/globalcomponents/BlogCard.js

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ imageSrc, title, category, link, linkText,details }) {
  return (
    <div className="h-[480px] rounded-[22px] bg-[#F5F5F7] overflow-hidden flex flex-col">
      <div className="h-[250px] relative">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          className="blog-cards"
        />
      </div>
      <div className="blog-div">
        {category && <p>{category}</p>}
        <h2 className="blog-header ">{title}</h2>
        <h5 className="blog-details mt-2">{details} </h5>
        {link && linkText && (
          <Link href={link} className="insight-link mt-10">{linkText}</Link>
        )}
      </div>
    </div>
  );
}
