import Image from 'next/image';

const TestimonialCard = ({ avatar, quote, author }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg px-6 py-6 w-full max-w-lg min-h-[320px]"> 
      <div className="absolute top-[-20px] right-[-10px] opacity-0s">
        <Image src="/images/assets/Vector.png" alt="quote" width={100} height={100} />
      </div>
      <Image
        src={avatar}
        alt={author}
        width={100}  
        height={100}
        className="rounded-full mb-16"
      />
      <p className="text-black font-medium text-xl mb-4">{quote}</p>
      <p className="text-gray-500 font-normal text-lg">{author}</p>
    </div>
  );
};

export default TestimonialCard;
