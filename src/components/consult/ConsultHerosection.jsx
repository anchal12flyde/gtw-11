import Header from "../Home/childComponents/Header";
import ClientButton from "../globalcomponents/Button";
import { useInView } from 'react-intersection-observer';




export default function ConsultHerosection() {
    const { ref, inView } = useInView({ triggerOnce: false });
  return (
    <>
      <div className="hero-wrapper relative overflow-hidden min-h-screen">
       <Header/>
        <div className="absolute inset-0 h-screen "  ref={ref}>
            
          {inView && (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/videos/consult.mp4" type="video/mp4" />
            </video>
          )}
      
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>

        <div className="util-flex util-flex-1 util-mx-1-5 relative z-10 text-center text-white">
          <div className="hero-section">
            <h1
        className="heading-heros"
       
      >
        Rethink. <span className="text-[#FFB100]">Rebuild.</span> Reinvent.
      </h1>

      <p
        className="heading-subtitles w-full sm:w-[900px] mt-6 mb-8"
       
      >
        We help organizations modernize how they operate with custom systems,
        smarter workflows, and tech that scales with clarity.
      </p>

     
        <ClientButton
          href="#"
          className="bg-[#FFB100] text-black hover:bg-white hover:text-[#FFB100] "
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
