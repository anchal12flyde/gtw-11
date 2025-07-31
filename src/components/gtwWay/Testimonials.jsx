import Head from 'next/head';
import TestimonialCard from './Props/TestimonialCards';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Testimonials() {
  const testimonials = [
    {
      avatar: "/images/assets/img1.png",
      quote:
        "Great design makes things easy, clear, and even enjoyable. It works, and that’s what truly matters.",
      author: "Steve Jobs",
    },
    {
      avatar: "/images/assets/img2.png",
      quote:
        "There is nothing so useless as doing efficiently that which should not be done at all.",
      author: "Peter Drucker",
    },
    {
      avatar: "/images/assets/img3.png",
      quote:
        "Longevity in this business is about being able to reinvent yourself or invent the future.",
      author: "Satya Nadella",
    },
  ];

  return (
    <>
      <main className="bg-gray-light util-flex util-flex-1 util-mx-1-5">
        <div className="util-grid util-grid-cols-auto util-gap-x-25 util-gap-y-15 util-py-28 ">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={fadeInUp}
            >
              <TestimonialCard
                avatar={item.avatar}
                quote={item.quote}
                author={item.author}
              />
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
