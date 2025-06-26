import Head from 'next/head';
import TestimonialCard from './Props/TestimonialCards';

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>Testimonial Layout</title>
      </Head>

      <main className=" bg-gray-100 ">
      
        <div className=" flex flex-wrap justify-center gap-10 p-28">
          <TestimonialCard
            avatar="/public/images/assets/img1.jpg"
            quote="Design is not just what it looks like and feels like. Design is how it works."
            author="Steve Jobs"
          />
          <TestimonialCard
            avatar="/images/assets/img2.jpg"
            quote="There is nothing so useless as doing efficiently that which should not be done at all."
            author="Peter Drucker"
          />
          <TestimonialCard
            avatar="/images/assets/img3.jpg"
            quote="Longevity in this business is about being able to reinvent yourself or invent the future."
            author="Satya Nadella"
          />
        </div>

      </main>
    </>
  );
}
