import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ConsultationPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    
    
  return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
      <Navbar />
        
      <div className="pt-20 lg:pt-16">
        <div className="w-full flex flex-row items-center justify-center py-10 px-10">
            <p className="text-center text-primary font_black font-bold text-4xl lg:text-9xl leading-tight">PROJECT DECK CONSULTATION</p>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black" />

        <div className="w-full py-10 px-5 lg:px-0 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-2/5">
            <img src="/images/consult.png" className="w-full h-auto object-cover object-center" alt="" />
          </div>

          <div className="hidden lg:block h-[450px] border-r border-black border-solid mx-8"></div>

          <div className="w-full lg:w-3/5 space-y-5 lg:pr-10">
            <p className="font-bold font_extra text-2xl">Why This Consultation is the Missing Link in Your Data Career</p>

            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight">Unlike generic courses or project lists, my Project-Deck Consultation provides personalized, one-on-one guidance that is fully customized to your career goals. This is not just about giving you ideas for projects, it’s about crafting the perfect projects that will showcase your unique skills and make you stand out to hiring managers.</p>
          </div>
        </div>
        
        <hr className="w-4/5 mx-auto border lg:border-2 border-black" />

        <div className="w-full py-10 px-5 lg:px-10">
          <p className="py-10 text-center text-primary font_black font-bold text-3xl lg:text-6xl leading-tight">Here’s what makes this consultation different from anything else you’ll find</p>
        </div>

        <div className="animate__animated animate__bounce animate__infinite intro-middot"></div>
      
        {/* <!-- TYPE 1 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p1 fadeLeft1">01</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp font-bold font_extra">Tailored to You</h2>
                <p className="fadeInUp font_regular"> I’ll take the time to understand your strengths, career aspirations, and technical interests, then suggest specific projects that align perfectly with your goals.</p>
            </div>
            <div className="animate__animated animate__infinite section-middot animate__pulse"></div>
        </div>
        
        {/* <!-- TYPE 2 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp font-bold font_extra">Career-Focused</h2>
                <p className="fadeInUp font_regular">The projects we develop aren’t just for practice, they are designed to show off the exact skills that hiring managers look for in your target industry.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p2 fadeRight">02</p>
            </div>
            <div className="section-middot"></div>
        </div>
        
        {/* <!-- TYPE 1 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p3 fadeLeft">03</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp font-bold font_extra">Step-by-Step Guidance</h2>
                <p className="fadeInUp font_regular">You won’t just receive ideas and be left on your own. I’ll walk you through the execution of your project, ensuring you know what to do at each stage.</p>
            </div>
            <div className="section-middot"></div>
        </div>

        {/* <!-- TYPE 4 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp font-bold font_extra">Expert Insight</h2>
                <p className="fadeInUp font_regular">You’re not guessing what to include, I’ll show you exactly how to structure your project for maximum impact, from design to documentation.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p2 fadeRight">04</p>
            </div>
            <div className="section-middot"></div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-16 lg:my-28" />

        <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 lg:px-10 gap-y-3">
          <div className="w-full lg:w-2/5 grow self-start px-0 lg:px-10">
            <p className="text-center lg:text-start text-black font_extra lg:font_black font-bold text-3xl lg:text-5xl leading-tight">Why Does This Matter?</p>
          </div>

          <div className="hidden lg:block h-[400px] border-r border-black border-solid mx-8"></div>

          <div className="w-full lg:w-3/5">
            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight">Having a portfolio is a non-negotiable part of landing a job in data science. However,  not all projects are created equal. The right project can be the difference between getting a callback or being overlooked. With my guidance, you’ll be confident that you’re building something that not only demonstrates your skills but also speaks directly to your dream job.</p>
          </div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-28" />
      
        <div className="w-full h-[60vh] lg:h-[50vh]">
            <div className="w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-3 font_regular">
                <p className="font_extra text-primary font-semibold text-lg lg:text-xl">Let’s build a project that puts you on the path to success!</p>

                <p className="font_regular font-light text-[2.6rem] lg:text-[5.4rem] leading-[3.2rem] lg:leading-[8rem]"><Link to={'/contact'} className="underline decoration-dotted decoration-[#775647] decoration-2 underline-offset-[0.3rem] lg:underline-offset-[0.8rem]">Book</Link> a <span className="text-nowrap">1-hour</span> personalized consultation now for $25</p>
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default ConsultationPage