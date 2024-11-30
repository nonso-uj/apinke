import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

const WorkshopPage = () => {

  useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])

    
  return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
      <Navbar />
        
      <div className="pt-20 lg:pt-16">
        <div className="w-full flex flex-row items-center justify-center py-10 px-10">
            <p className="text-center text-primary font_black font-bold text-4xl lg:text-9xl leading-tight uppercase">Portfolio Workshop</p>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black" />

        <div className="w-full py-10 px-5 lg:px-0 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-2/5">
            <img src="/images/apinke2.jpg" className="w-full h-auto object-cover object-center max-h-[70vh]" alt="" />
          </div>

          <div className="hidden lg:block h-[450px] border-r border-black border-solid mx-8"></div>

          <div className="w-full lg:w-3/5 space-y-5 lg:pr-10">
            <p className="font-bold font_extra text-2xl">Why This Portfolio Workshop is Different</p>

            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight">This isn’t a typical course where you watch videos and try to follow along. This is an <span className="text-primary underline decoration-[1px] underline-offset-[3px]">immersive, hands-on experience</span> where you’ll work with me directly to create a portfolio that reflects your abilities, aspirations, and the needs of employers in your field.</p>
          </div>
        </div>
        
        <hr className="w-4/5 mx-auto border lg:border-2 border-black" />

        <div className="w-full py-10 px-5 lg:px-10">
          <p className="py-10 text-center text-primary font_black font-bold text-3xl lg:text-6xl leading-tight">What you’ll gain in these three weeks</p>
        </div>

        <div className="animate__animated animate__bounce animate__infinite intro-middot"></div>
      
        {/* <!-- TYPE 1 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p1 fadeLeft1">01</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp font-bold font_extra">Personalized Project Selection</h2>
                <p className="fadeInUp font_regular">Together, we’ll choose a project that highlights your strengths, whether that’s machine learning, data visualization, or statistical analysis. I’ll ensure that it’s relevant to the industry you want to break into.</p>
            </div>
            <div className="animate__animated animate__infinite section-middot animate__pulse"></div>
        </div>
        
        {/* <!-- TYPE 2 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp font-bold font_extra">End-to-End Project Execution</h2>
                <p className="fadeInUp font_regular">I won’t just help you start, I’ll guide you through every step of completing and documenting your project, from planning and data collection to analysis, interpretation, and presentation.</p>
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
                <h2 className="fadeInUp font-bold font_extra">Hosting Your Portfolio</h2>
                <p className="fadeInUp font_regular">Your work deserves to be seen. That’s why we’ll set up your project on a professional portfolio website, ready to impress potential employers and clients.</p>
            </div>
            <div className="section-middot"></div>
        </div>

        {/* <!-- TYPE 4 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp font-bold font_extra">Ongoing Support</h2>
                <p className="fadeInUp font_regular">You’ll receive direct feedback and assistance throughout the process, ensuring that the final product is something you’re proud to show off in interviews.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p2 fadeRight">04</p>
            </div>
            <div className="section-middot"></div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-16 lg:my-28" />

        <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 lg:px-10 gap-y-3">
          <div className="w-full lg:w-2/5 grow self-start px-0 lg:px-10">
            <p className="text-center lg:text-start text-black font_extra lg:font_black font-bold text-3xl lg:text-5xl leading-tight">Why It Matters</p>
          </div>

          <div className="hidden lg:block h-[400px] border-r border-black border-solid mx-8"></div>

          <div className="w-full lg:w-3/5">
            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight">In today’s competitive job market, employers aren’t just looking at resumes, they’re looking for <b>proof</b> of what you can do. Having a polished, well-presented portfolio can dramatically increase your chances of landing interviews and offers. By the end of this workshop, you won’t just have a portfolio, you’ll have a showcase that positions you as a strong candidate for the data roles you want.</p>
          </div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-16 lg:my-28" />

        <div className="w-full px-5 lg:px-10 flex flex-col lg:flex-row items-center justify-center">
          <div className="order-1 lg:order-3 w-full lg:w-2/5">
            <img src="/images/apinke6.jpg" className="w-full h-auto object-cover object-center max-h-[70vh]" alt="" />
          </div>

          <div className="order-2 hidden lg:block h-[450px] border-r border-black border-solid mx-8"></div>

          <div className="order-3 lg:order-1 w-full lg:w-3/5 space-y-5">
            <p className="w-full font-bold font_extra text-2xl lg:text-5xl">Curious about the impact of this workshop?</p>

            <p className="w-full font_regular text-xl lg:text-xl font-regular leading-tight">Take a look at some portfolios crafted by students I’ve worked with. These projects reflect the skills and confidence they gained through our sessions. <br /><br />Check below to explore their work</p>
            
            <ul className="w-full list-disc list-outside ml-5 lg:ml-16 space-y-5">
              <li>
                <a href="https://nwa-ivans.github.io/Nwadiogbuivans.github.io/" className="inline-block w-fit">
                  <p className="w-fit flex flex-row justify-start items-center gap-x-5 uppercase font-semibold font_regular text-xl underline decoration-dotted hover:underline hover:decoration-solid underline-offset-4">Somtoochukwu Nwadiogbu <MdArrowOutward size={20} className="shrink-0 inline" /></p>
                </a>
              </li>
              <li>
                <a href="https://cleoladiva1234.github.io/CleoMetrics.github.io/" className="inline-block w-fit">
                  <p className="w-fit flex flex-row justify-start items-center gap-x-5 uppercase font-semibold font_regular text-xl underline decoration-dotted hover:underline hover:decoration-solid underline-offset-4">Cleopatra <MdArrowOutward size={20} className="shrink-0 inline" /></p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-16 lg:my-28" />
      
        <div className="w-full h-[60vh] lg:h-[50vh]">
            <div className="w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-3 font_regular">
                {/* <p className="font_extra text-primary font-semibold text-lg lg:text-2xl">Sign up now for $100</p> */}

                <p className="font_regular font-light text-[2.6rem] lg:text-[4.8rem] leading-[3.2rem] lg:leading-[8rem]"><Link to={'/contact'} className="font-medium underline decoration-dotted decoration-[#775647] decoration-2 underline-offset-[0.3rem] lg:underline-offset-[0.8rem]">Sign up now for $100</Link> <br />Let’s create a portfolio that lands you the job you deserve.</p>
            </div>
        </div>
      </div>
    
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default WorkshopPage