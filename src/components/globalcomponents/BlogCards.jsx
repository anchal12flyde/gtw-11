
import Image from "next/image";

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
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{category}</p>
        <h2 className="text-base font-medium text-gray-800">{title}</h2>
        <a href={link} className="text-sm text-blue-500 mt-2 inline-block hover:underline">Read More</a>
      </div>
    </div>
  );
}
