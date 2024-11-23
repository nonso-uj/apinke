import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Testimonial from "../components/Testimonial"
import { FaqsAccordion } from "../components/Accordion"
import { useEffect } from "react"
import Testimonial from "@/components/Testimonial"

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
          <p className="font-extrabold font_extra text-base lg:text-2xl">Helping Everyone Make Sense of Data</p>

          <p>Hi, I’m Inioluwa Apinke Afolabi, an educator and data professional.</p>

          <p>My journey into data has led me to one undeniable truth: data has the power to unlock opportunities for everyone, regardless of their background or experience. That belief is at the heart of everything I do.</p>
          
          <p>As the founder of Data for Next Gen Africa, I work to bring data literacy to schools across the country. My mission goes beyond teaching technical skills; it’s about helping young people see data as a tool for understanding the world and unlocking opportunities in a tech-driven future.</p>
          
          <p>I’m also the creator of SQL Query Corner, a platform designed to simplify SQL and make navigating databases accessible to everyone. I know how overwhelming complex syntax can feel, which is why I focus on transforming confusion into clarity through hands-on, real-world projects.</p>

          <p>Whether I’m guiding students through challenging assignments or helping business owners make data-driven decisions, my approach is always hands-on and personalized. I don’t just teach you how to use tools, I walk with you every step of the way, ensuring learning is seamless, practical, and tailored to your goals.</p>

          <p>My mission is simple: to empower you to use data to solve problems, make informed decisions, and tell your unique story.</p>
        </div>


        {/* TESTIMONIAL */}
        <Testimonial />
        

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