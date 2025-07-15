"use client";

export default function ChooseExpro() {
       return (
<>
<section className="bg-white util-flex util-flex-1 util-mx-1-5 mt-26">
    <div className="relative flex items-left justify-between mb-12">
              <h2 className=" flex-1 heading-systems ">
                    <span class="text-[#FFB100]">Why Choose</span> Expro
              </h2> 
            </div>

      <div className="stack-grid ">

        <div className="stack-item">
          <div className="stack-icon ">
            <img
              src="/images/assets/stack1.png"
              alt="01"
            />
          </div>
        <div class="parent-div ">
        <div class="stack-text">Full IP ownership — no licensing trap</div>
      </div>
        </div>
  <div className="stack-item">
    <div className="stack-icon">
      <img
        src="/images/assets/stack2.png"
        alt="02"
      />
    </div>
    <div class="parent-div">
      <div className=" stack-text">Ready in weeks, not months</div>
    </div>
   
  </div>

  <div className="stack-item">
    <div className="stack-icon ">
      <img
        src="/images/assets/stack3.png"
        alt="03"
      />
    </div>
     <div class="parent-div">
       <div className="stack-text">Backed by QA, CI/CD, and post-launch support</div>
     </div>
   
  </div>


  <div className="stack-item">
    <div className="stack-icon ">
      <img
        src="/images/assets/stack4.png"
        alt="04"
      />
    </div>
    <div class="parent-div">
      <div className=" stack-text">Battle-tested architecture built in-house by GTW</div>
    </div>
   
  </div>
</div>


</section>

</>
)


}
