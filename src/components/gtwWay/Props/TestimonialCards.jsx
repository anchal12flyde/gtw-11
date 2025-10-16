import Image from 'next/image';

const TestimonialCard = ({ avatar, quote, author }) => {
  return (
    <div className="relative bg-white-color1 rounded-2xl shadow-lg p-6 w-full max-w-lg min-h-[320px] h-full">
      <div className="absolute top-[-20px] right-[-10px] opacity-0s">
        <Image
          src="/images/assets/Vector.png"
          alt="quote"
          width={100}
          height={100}
        />
      </div>
      <Image
        src={avatar}
        alt={author}
        width={100}
        height={100}
        className="rounded-full mb-16"
      />
      <p className="text-secondary font-medium text-xl mb-4">{quote}</p>
      <p className="text-white-gray2 font-normal text-lg">{author}</p>
    </div>
  );
};

export default TestimonialCard;
