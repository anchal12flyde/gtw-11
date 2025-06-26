import Image from 'next/image';

const TestimonialCard = ({ avatar, quote, author }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm min-h-[250px]">
      <div className="absolute top-[-10px] right-[-10px] opacity-0s">
        <Image src="/images/assets/Vector.png" alt="quote" width={100} height={100} />
      </div>
      <Image
        src={avatar}
        alt={author}
        width={48}
        height={48}
        className="rounded-full mb-4"
      />
      <p className="text-black font-bold mb-4">{quote}</p>
      <p className="text-gray-600 font-semibold text-sm">{author}</p>
    </div>
  );
};

export default TestimonialCard;
