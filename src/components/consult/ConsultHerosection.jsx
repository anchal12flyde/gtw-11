import Header from "../Home/childComponents/Header";
import ClientButton from "../globalcomponents/Button";

export default function ConsultHerosection() {
  return (
    <>
      <div className="hero-wrapper relative overflow-hidden min-h-screen">
       <Header/>
        <div className="absolute inset-0 h-screen ">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/consult.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5 relative z-10 text-center text-white">
          <div className="hero-section">
            <h1 className="heading-hero">
             Rethink. <span className="text-[#FFB100]"> Rebuild.</span>   Reinvent.
            </h1>
            <p className="heading-subtitles w-[full] sm:w-[900px]">
             We help organizations modernize how they operate with custom systems,
              smarter workflows, and tech that scales with clarity.
            </p>
             <ClientButton
                        href="#"
                        className="bg-[#FFB100] text-black hover:bg-black hover:text-white mt-8"
                    >
                       Start a Consult Sprint
                    </ClientButton>
      
          </div>
           
        </div>
       
      <div className="util-flex util-flex-1 util-mx-1-5">
    
      </div>

      </div>
    </>
  );
}
