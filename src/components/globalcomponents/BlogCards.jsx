import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  imageSrc,
  title,
  category,
  link,
  linkText,
  details,
}) {
  return (
    <Link
      href={link}
      className="block h-[480px] rounded-[22px] overflow-hidden"
    >
      <div className="h-[480px] rounde
      d-[22px] bg-[#F5F5F7] overflow-hidden flex flex-col">
        <div className="h-[250px] relative rounded-[18px] m-2 group">
          <div className="blog-cards overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              quality={75}
              priority
              className="absolute inset-0 transition-transform duration-500 ease-in-out scale-110 group-hover:scale-100"
            />
          </div>
        </div>

        <div className="blog-div flex flex-col h-full p-4">
          {category && <p className="mb-2">{category}</p>}
          <h2 className="blog-header">{title}</h2>
          <h5 className="blog-details mt-2">{details}</h5>
          {linkText && (
            <div className="mt-auto mb-8">
              <span className="insight-link">{linkText}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
