
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ imageSrc, title, category = "CATEGORY", link = "#" }) {
  return (
    <div className=" h-[450px] rounded-[22px] bg-[#F5F5F7] shadow-md overflow-hidden flex flex-col">
      <div className="h-[250px] relative ">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
         
          className="blog-cards"
        />
      </div>
      <div className="blog-div">
        <p>{category}</p>
        <h2 className="blog-header mb-8">{title}</h2>
       <Link href={link} className="insight-link">Read More</Link>
      </div>
    </div>
  );
}
