import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Testimonial from "../components/Testimonial"
import { FaqsAccordion } from "../components/Accordion"
import { useEffect } from "react"

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
        <Navbar />

        <div className="w-full h-screen p-2 flex flex-row items-center justify-center">
          <div className="w-full lg:w-4/5 h-4/5 overflow-hidden">
            <img src="/images/IMG_2733aa.jpg"  className="w-full h-full object-cover object-top" alt="" />
          </div>
        </div>

        <div className="px-2 lg:w-3/4 mx-auto flex flex-col items-start justify-start gap-y-5 font_regular text-lg font-medium lg:mb-32">
          <p className="font-extrabold">Helping You Use Data to Shape Your Future</p>

          <p>Hi, I’m Inioluwa, an educator at heart and a data enthusiast by trade. My journey into data analytics started with one simple belief: that the power of data should be accessible to everyone, regardless of their background or skill level. And that's been my mission ever since.</p>

          <p>Currently, I lead <span className="font-extrabold text-primary">Data for Next Gen Africa</span>, an initiative focused on bringing data literacy to schools nationwide. Seeing the potential of young minds grasping the power of data is one of the most fulfilling parts of my work. It's not just about teaching technical skills, it's about opening doors to opportunities in a technological future world and helping students understand the world through numbers.</p>
          
          <p>Beyond that, I’m also the creator of <span className="font-extrabold text-primary">SQL Query Corner</span>, a platform I built to explain SQL and make it easier for people to navigate the language of databases. I know what it’s like to feel overwhelmed by complex syntaxes, and I’m here to make that process simpler, helping people turn SQL knowledge into real, tangible projects.</p>
          
          <p>Whether it’s through my data analytics services or my role as a tutor, I’m not just here to show you how to use tools, I’m here to guide you through the process, step by step. Data can be intimidating, but I believe it doesn’t have to be. <span className="font-extrabold text-primary">I aim to make learning a natural part of your everyday life</span>, fitting seamlessly around your work, family, or studies. Whether you’re a student stuck on an assignment or a business owner trying to get clarity on your numbers, I’m here to help you bridge that gap.</p>

          <p>I’m not just about teaching or working with tools, I’m about helping you <span className="font-extrabold text-primary">unlock the potential of data to tell your story, solve problems, and make informed decisions.</span></p>
        </div>
        

        {/* FAQS */}
        <div className="z-20 w-full lg:w-5/6 mx-auto py-14 my-10">
          <div className="lg:container mx-auto">
            <p className="text-start text-5xl font_bold font-bold pl-5 lg:pl-0 mb-10">FAQS</p>

            <div className="w-full flex flex-col items-center">
              <FaqsAccordion />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
  )
}

export default AboutPage