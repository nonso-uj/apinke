import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AnalystServices = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
      <Navbar />
        
      <div className="pt-20 lg:pt-16">
        <div className="w-full flex flex-row items-center justify-center py-10 px-10 lg:px-20">
            <p className="text-center text-primary font_black font-bold text-4xl lg:text-8xl leading-tight uppercase">On-Demand Data Analyst Services</p>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black" />

        <div className="w-full py-10 lg:py-20 px-5 lg:px-0 flex flex-col lg:flex-row items-center justify-center gap-y-10">
          <div className="w-full lg:w-2/5">
            <img src="/images/demand.png" className="w-3/4 h-auto object-cover object-center mx-auto" alt="" />
          </div>

          <div className="hidden lg:block h-[450px] border-r border-black border-solid mx-8"></div>

          <div className="w-full lg:w-3/5 space-y-5 lg:pr-10">
            <p className="font-bold font_extra text-2xl">Your Go-To Data Analyst—For Every Problem, Every Industry</p>

            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight">As a data analyst, my services aren’t just limited to businesses. I provide tailored solutions for anyone who needs help making sense of their data—students, entrepreneurs, or professionals. Whether it’s for a one-time project or ongoing support, I’m here to help you get results.</p>
          </div>
        </div>
        
        <hr className="w-3/5 mx-auto border-[1px] border-black" />

        <div className="w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-10 gap-y-3 my-10 lg:my-20">
          <div className="w-full lg:w-2/5 grow self-start px-0 lg:px-10">
            <p className="text-center lg:text-start text-black font_extra lg:font_black font-bold text-3xl lg:text-5xl leading-tight">Who can benefit from this?</p>
          </div>

          <div className="hidden lg:block h-[450px] border-r border-black border-solid mx-16"></div>

          <div className="analyst-list w-full lg:w-3/5">
            <ul className="flex flex-col items-start justify-center gap-y-5 font_regular text-xl lg:text-3xl font-regular leading-tight">
                <li><b>Students:</b> Struggling with a data project or assignment? I’ll guide you step-by-step to clean your data, run analyses, and create meaningful visualizations, so you can ace your coursework with confidence.</li>
                <li><b>Business Owners:</b> Need to better understand your sales trends or customer behavior? I’ll turn your raw data into actionable insights that help you grow your business.</li>
                <li><b>Corporate Professionals:</b> Looking for detailed reports and analytics that drive business strategy? From executive dashboards to advanced analytics, I’ll provide the data-driven insights you need to make informed decisions.</li>
            </ul>
          </div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black" />

        <div className="w-full py-10 px-5 lg:px-10">
          <p className="py-10 text-center text-primary font_black font-bold text-3xl lg:text-6xl leading-tight">Here’s how i can help!</p>
        </div>

        <div className="animate__animated animate__bounce animate__infinite intro-middot"></div>
      
        {/* <!-- TYPE 1 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p1 fadeLeft1">01</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp font-bold font_extra">Versatility</h2>
                <p className="fadeInUp font_regular"> I can help with everything from cleaning messy datasets to building interactive dashboards—whatever your data needs are, I’ll tailor my approach to meet them.</p>
            </div>
            <div className="animate__animated animate__infinite section-middot animate__pulse"></div>
        </div>
        
        {/* <!-- TYPE 2 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp font-bold font_extra">Clear Communication:</h2>
                <p className="fadeInUp font_regular">Data can be confusing, but I’ll make sure you understand every step of the process. You’ll always know what’s happening with your data and how the results impact your goals.</p>
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
                <h2 className="fadeInUp font-bold font_extra">Fast, Reliable Results</h2>
                <p className="fadeInUp font_regular">Whether you’re on a tight deadline for a class assignment or need quick turnaround on business reports, I deliver high-quality work on time, every time.</p>
            </div>
            <div className="section-middot"></div>
        </div>

        {/* <!-- TYPE 4 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp font-bold font_extra">Flexible Support</h2>
                <p className="fadeInUp font_regular">You can hire me for a one-time project, or we can work together long-term depending on your needs.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p2 fadeRight">04</p>
            </div>
            <div className="section-middot"></div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-16 lg:my-28" />

        <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 lg:px-10 gap-y-3">
          <div className="w-full lg:w-2/5 grow self-start px-0 lg:px-10">
            <p className="text-center lg:text-start text-black font_extra lg:font_black font-bold text-3xl lg:text-5xl leading-tight">Consultation Fee</p>
          </div>

          <div className="hidden lg:block h-[400px] border-r border-black border-solid mx-8"></div>

          <div className="w-full lg:w-3/5">
            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight">For a personalized consultation, I offer a 1-hour call for just $25. During this session, we'll discuss your specific needs and how I can help you tackle your data challenges with precision and clarity.</p>
          </div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-28" />
      
        <div className="w-full h-[60vh] lg:h-[50vh]">
            <div className="w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-3 font_regular">
                <p className="font_extra text-primary font-semibold text-lg lg:text-xl">Let’s get started!</p>

                <p className="font_regular font-light text-[2.6rem] lg:text-[5.4rem] leading-[3.2rem] lg:leading-[8rem]"><Link to={'/contact'} className="underline decoration-dotted decoration-[#775647] decoration-2 underline-offset-[0.3rem] lg:underline-offset-[0.8rem]">Contact me</Link> to schedule your consultation</p>
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default AnalystServices