"use client";



export default function Roadmap() {
    
  return (
 
<section class="bg-white util-flex util-flex-1 util-mx-1-5 mt-20">
    <div className="relative flex items-left justify-between">
              <h2 className=" flex-1 heading-systems ">
                   How It <span class="text-[#FFB100]">Works</span>
              </h2> 
              
            </div>
        <div className=" w-full flex mt-16" >
          <div className="grid grid-cols-1 md:grid-cols-5  w-full items-center justify-center ">

       
                <div className="flex flex-col gap-10 bg-white rounded-3xl h-[300px] sm:h[400px]">
                    <div>
                    <img
                        src="/images/assets/01.png"
                        alt="Campus"
                        className="campus-image"
                    />
                    </div>
                    <div className="flex flex-col gap-4">
                    <h3 className="ecom-heading text-left">Discovery</h3>
                    <p className="paragraph-default">
                       We deep-dive into your workflows, tools, bottlenecks, and people.
                    </p>
                    </div>
                </div>

          <div className="flex flex-col gap-10 bg-white rounded-3xl h-[400px] hide-on-mobile">        
            <div className="justify-center items-center mt-8 sm:mt-30 sm:block hidden">
                <img
                src="/images/assets/Arrow 2.png"
                alt="Arrow"
                className="w-35 h-5 "
                />
            </div>
            </div>

           
                <div className="flex flex-col gap-10 bg-white rounded-3xl h-[300px] sm:h[400px]">
                    <div>
                    <img
                        src="/images/assets/02.png"
                        alt="Campus"
                        className="campus-image"
                    />
                    </div>
                    <div className="flex flex-col gap-4">
                    <h3 className="ecom-heading text-left">Systems Map</h3>
                    <p className="paragraph-default">
                       We create a visual blueprint of your current and future tech architecture.
                    </p>
                    </div>
                </div>

                
                <div className="flex flex-col gap-10 bg-white rounded-3xl h-[400px] hide-on-mobile">        
            <div className=" justify-center items-center mt-8 sm:mt-30 sm:block hidden">
                <img
                src="/images/assets/Arrow 2.png"
                alt="Arrow"
                className="w-35 h-5 "
                />
            </div>
            </div>

           
            <div className="flex flex-col gap-10 bg-white rounded-3xl h-[300px] sm:h[400px] ">
                <div>
                <img
                    src="/images/assets/03.png"
                    alt="Campus"
                    className="campus-image"
                />
                </div>
                <div className="flex flex-col gap-4">
                <h3 className="ecom-heading text-left">Transformation Map</h3>
                <p className="paragraph-default">
                    Prioritized, ROI-first plan with clear outcomes, timelines, and cost/effort.
                </p>
                </div>
            </div>
            </div>


            </div>

           
         
 
</section>

 );
}
