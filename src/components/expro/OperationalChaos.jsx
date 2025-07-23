'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function OperationalChaos() {
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)

useEffect(() => {
  const section = sectionRef.current;
  const scrollContainer = scrollContainerRef.current;

  if (!section || !scrollContainer) return;

  const cards = scrollContainer.querySelectorAll('.cardss');
  const verticalLine = section.querySelector('.vertical-line');
  const tagline = section.querySelector('.tagline');
  const featureText = section.querySelector('.feature-text h3');
  const description = section.querySelector('.description');

  if (!cards.length || !verticalLine || !tagline || !featureText || !description) return;

  scrollContainer.style.willChange = 'transform';
  verticalLine.style.willChange = 'transform';

  const totalCardsWidth = Array.from(cards).reduce((acc, card) => acc + card.offsetWidth + 32, 0);
  const sectionWidth = section.offsetWidth;
  const maxScroll = totalCardsWidth - sectionWidth;

  const firstCardOffset = cards[0].offsetLeft;
  const lastCard = cards[cards.length - 1];
  const lastCardOffset = lastCard.offsetLeft + lastCard.offsetWidth;
  const strokeTravel = lastCardOffset - firstCardOffset;

  const contents = [
    {
      tagline: 'Lightning-Fast Storefront',
      title: 'Customer-Facing Features',
      desc: 'Built on the MERN stack with a production-ready admin panel, mobile apps, and deep integrations it gives you true ownership of your commerce platform.',
    },
    {
      tagline: 'Lightning-Fast Storefront',
      title: 'Backend Superpowers',
      desc: 'Robust API architecture with autoscaling and observability.',
    },
    {
      tagline: 'Lightning-Fast Storefront',
      title: 'Developer-Focused Tools',
      desc: 'Built-in CLI, SDKs, and customizable UI components.',
    },
    {
      tagline: 'Lightning-Fast Storefront',
      title: 'Unified Commerce',
      desc: 'Admin panel, storefront, mobile—all in one system.',
    },
  ];

  let lastIndex = -1;

  const triggerInstance = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: `+=${strokeTravel}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: self => {
      const progress = self.progress;

      // Move container and stroke
      gsap.set(scrollContainer, {
        x: -maxScroll * progress,
        force3D: true,
      });

      gsap.set(verticalLine, {
        x: firstCardOffset + strokeTravel * progress,
        force3D: true,
      });

      // Update content
      const index = Math.floor(progress * cards.length);
      if (index !== lastIndex && contents[index]) {
        lastIndex = index;
        const content = contents[index];
        tagline.textContent = content.tagline || '';
        featureText.textContent = content.title;
        description.textContent = content.desc;
      }
    },
  });

  
  return () => {
    try {
      triggerInstance.kill();
    } catch (e) {
      console.warn('ScrollTrigger cleanup failed:', e);
    }
  };
}, []);


  return (
    <section ref={sectionRef} className="feature overflow-hidden relative mt-26">
      <div className="relative">
        <div className="h-[1px] w-full bg-[#D9D9D9] z-10" />
        
<div className="vertical-line absolute left-[4.5%] top-full z-10 h-[800px] w-[40px]">
  <svg
    width="40"
    height="800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 0 C 30 50, 38 130, 35 140" stroke="#D9D9D9" strokeWidth="2" fill="none" />
    <path d="M35 140 C 32 150, 22 270, 20 280" stroke="#D9D9D9" strokeWidth="2" fill="none" />
    <path d="M20 280 L20 700" stroke="#D9D9D9" strokeWidth="2" />
  </svg>

  <p className="tagline absolute left-[50px] top-[130px]  whitespace-nowrap">
    Lightning-Fast Storefront
  </p>
</div>

  </div>

<div className='util-flex util-flex-1 util-mx-1-5 mt-26'> 
      <div className="grid grid-rows-1 md:grid-cols-2  " >
        <div className="feature-text w-[300px]">
          <h3>Customer-Facing  Features</h3>
        </div>
        <p className="description text-gray-600">
          Built on the MERN stack with a production-ready admin panel,
           mobile apps, and deep integrations—it gives you true ownership of your commerce platform.
        </p>
      </div>
</div>
      <div className="cards-container relative util-flex util-flex-1 util-mx-1-5">
        <div ref={scrollContainerRef} className="cards ">
          <div className="cardss"/>
          <div className="cardss"/>
          <div className="cardss"/>
          <div className="cardss"/>
        </div>
      </div>
    </section>
  )
}
