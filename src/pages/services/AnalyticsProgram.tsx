import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AnalyticsProgram = () => {

    useEffect(() => {
        // window.scrollTo(0, 0)
    }, [])

  return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
      <Navbar />
        
      <div className="pt-20 lg:pt-16">
        <div className="w-full flex flex-row items-center justify-center py-10 px-10">
            <p className="text-center text-primary font_black font-bold text-4xl lg:text-8xl leading-tight uppercase">12-Week Data Analytics Program</p>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black" />

        <div className="w-full py-10 px-5 lg:px-0 flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-2/5">
            <img src="/images/apinke3.jpg" className="w-3/4 h-auto max-h-[70vh] object-cover object-center mx-auto" alt="" />
          </div>

          <div className="hidden lg:block h-[450px] border-r border-black border-solid mx-8"></div>

          <div className="w-full lg:w-3/5 space-y-5 lg:pr-10">
            <p className="font-bold font_extra text-2xl">Some good news for you!</p>

            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight">You know that data analytics isn’t just a skill, it’s a pathway to new opportunities, better-paying roles, and a future where you have the power to shape your career. That’s why you’re here. And that’s why this <span className="text-primary underline decoration-[1px] underline-offset-[3px]">10-week Data Analytics Program</span> was built specifically for you.</p>
          </div>
        </div>
        
        <hr className="w-4/5 mx-auto border lg:border-2 border-black" />

        <div className="w-full py-10 px-5 lg:px-10">
          <p className="py-10 text-center text-primary font_black font-bold text-3xl lg:text-6xl leading-tight">Here’s what you get</p>
        </div>

        <div className="animate__animated animate__bounce animate__infinite intro-middot"></div>
      
        {/* <!-- TYPE 1 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p1 fadeLeft1">01</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp font-bold font_extra">A Program That Meets You Where You Are</h2>
                <p className="fadeInUp font_regular">We know you have a lot on your plate. Maybe you’re working a demanding 9-to-5, taking care of your family, or trying to juggle school. But that doesn’t mean you have to put your goals on hold. This program is designed with flexibility in mind, so no matter how busy life gets, you’ll be able to learn at your own pace, on your own time.</p>
            </div>
            <div className="animate__animated animate__infinite section-middot animate__pulse"></div>
        </div>
        
        {/* <!-- TYPE 2 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp font-bold font_extra">A Pathway to Real Change</h2>
                <p className="fadeInUp font_regular">You’re not just learning to analyze data, you’re gaining a skill set that will change the course of your career. Whether you’re looking to land a better job, switch industries, or future-proof yourself in the tech world, this course is your launchpad. You’ll walk away with the confidence and the tools to take on data challenges in real-world scenarios.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p2 fadeRight">02</p>
            </div>
            <div className="section-middot"></div>
        </div>
        
        {/* <!-- TYPE 3 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p3 fadeLeft">03</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp font-bold font_extra">Personalized, One-on-One Support</h2>
                <p className="fadeInUp font_regular">With this course: you’re not on your own. You’ll have personalized mentorship every step of the way. I’m here to provide tailored support, whether you need help understanding a concept or guidance on how to apply what you’re learning. You’re getting more than just a course, you’re getting a mentor who’s invested in your success.</p>
            </div>
            <div className="section-middot"></div>
        </div>

        {/* <!-- TYPE 4 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp font-bold font_extra">Not Just Tools, A Deeper Understanding of Data’s Power</h2>
                <p className="fadeInUp font_regular">This program is about more than learning Excel, SQL, Power BI, or Python. Before we even dive into the tools, we’ll explore why data matters. You’ll learn how data drives decisions and how it’s reshaping industries. This isn’t just a technical skill—it’s a mindset shift that will help you see and leverage the power of data in whatever path you choose.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p2 fadeRight">04</p>
            </div>
            <div className="section-middot"></div>
        </div>

        {/* <!-- TYPE 5 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p3 fadeLeft">05</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp font-bold font_extra">Hands-On Projects That Prepare You for the Real World</h2>
                <p className="fadeInUp font_regular">Each week, you’ll apply what you’re learning through real-world data projects that mirror the challenges you’ll face in the workplace. By the end of the program, you won’t just understand the theory, you’ll have built a portfolio that proves your skills and readiness for the job market.</p>
            </div>
            <div className="section-middot"></div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-16 lg:my-28" />

        <div className="w-full flex flex-col lg:flex-row items-center justify-center px-5 lg:px-10 gap-y-3">
          <div className="w-full lg:w-2/5 lg:h-full grow self-start lg:flex lg:flex-col lg:items-center lg:justify-between lg:gap-y-5 px-0 lg:px-10">
            <p className="text-center lg:text-start text-black font_extra lg:font_black font-bold text-3xl lg:text-6xl leading-tight">Why This Matters</p>

            <img src="/images/apinke4.jpg" className="hidden lg:block w-full h-auto object-cover object-center mx-auto max-h-[50vh]" alt="" />
          </div>

          <div className="hidden lg:block h-[400px] border-r border-black border-solid mx-8"></div>

          <div className="w-full lg:w-3/5">
            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight">There are countless online courses, but i can give you something different, <b>personalized support and flexibility!</b> This is more than just an online class,it’s a program that fits your life, meets you where you are, and helps you make the leap into data analytics.</p> 

            <p className="font_regular text-xl lg:text-4xl font-regular leading-tight mt-3">It’s about empowering you with the skills and confidence to transform your career, no matter your current situation.</p>
          </div>
        </div>

        <hr className="w-4/5 mx-auto border lg:border-2 border-black my-28" />
      
        <div className="w-full h-dvh lg:h-[50vh]">
            <div className="w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-3 font_regular">
                <p className="font_extra text-primary font-semibold text-lg lg:text-xl">Your Investment:</p>

                <p className="font_regular font-light text-[1.8rem] lg:text-[3rem]">For $550, you’ll get <Link to={'/contact'} className="font-medium underline decoration-dotted decoration-[#775647] decoration-2 underline-offset-[0.3rem] lg:underline-offset-[0.8rem]">12 weeks of live, interactive learning, one-on-one mentorship, and lifetime access to all course materials.</Link> This is more than a course - it’s your chance to build a future in the technological world with the skills that matter.</p>
            </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default AnalyticsProgram
