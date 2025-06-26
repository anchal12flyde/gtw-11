"use client";

export default function OperateAcrossSection() {

     return (
    <>
 
      <section className="util-flex util-flex-1 util-mx-1-5 gradient-section text-white mt-26">

     <div className="relative container pt-20 sm:pt-20 pb-20 sm:pb-0">
          <div
           
            className="mb-20"
          >
            
                <div className="heading-systems text-white text-2xl font-semibold leading-snug">
          <span>How</span>
          <span className="text-[#FFB100]"> We Operate</span>
          <span> Across</span>
          <div>
            <span>Every Division</span>
          </div>
        </div>

          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-y-20 gap-x-10 md:gap-x-40">
          {[
            { title: 'Design like a founder', desc: 'Think business, not just pixels' },
            { title: 'Write it down', desc: 'Mobile access to SaaS platforms' },
            { title: 'Stay sharp', desc: 'Buyer-seller, review, filters, listings' },
            { title: 'Code like an owner', desc: 'Direct ordering, kitchen dashboards, loyalty' },
            { title: 'Deploy like a partner', desc: 'Field checklists, geo-logging, approvals' },
            { title: 'Deploy like a partner', desc: 'Buyer-seller, review, filters, listings' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex w-full max-w-sm mx-auto"
            >
              <div className="w-[3px] bg-[#FFB100] mr-3"></div>
              <div>
                <h3 className="division-title">{item.title}</h3>
                <p className="division-desc text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>


        
        </div>

    </section>
       </>
  );
}
