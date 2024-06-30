import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"
import { FaqsAccordion } from "../components/Accordion"
import { useEffect } from "react"

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
        <Navbar />
        
        <div className="w-full flex flex-row items-center justify-between py-24">
          <div className="w-full flex flex-row items-center justify-center">
            <p className="w-11/12 lg:w-2/3 text-[2.8rem] lg:text-7xl font_regular font-medium py-24 border-solid border-b border-neutral-400">Empowering Brands with Data-Driven Success</p>
          </div>
        </div>
        
        <div className="w-full h-[100vh] flex flex-row items-center justify-center py-12">
          <div className="h-full w-full lg:w-4/5 flex flex-col lg:flex-row items-center justify-center gap-y-5">
            <div className="w-full lg:w-2/5 h-[90vh] flex flex-row items-start justify-center">
              <p className="w-11/12 text-3xl font_regular font-medium px-3">Empowering brands to achieve sustainable growth through data-driven strategies.</p>
            </div>
            <div className="w-full lg:w-3/5 h-[90vh] flex flex-row items-center justify-center px-0 lg:px-5">
              <img src="/images/hero.jpg" className="w-full h-full object-cover object-top" alt="" />
            </div>
          </div>
        </div>

        <div className="w-full py-20">
          <div className="w-11/12 lg:w-4/5 mx-auto flex flex-col items-start justify-between gap-y-4 text-lg font_regular">
            <p>I am a seasoned data scientist on a mission to empower brands to reach their full potential. As a startup entrepreneur, I recognize the pivotal role of data-driven strategies in achieving business success. My dedication lies in guiding brands towards making informed decisions that elevate their performance and drive sustainable growth.</p>
            <p>From risk assessment to trend forecasting and consumer behavior analysis, I specialize in harnessing historical data to develop predictive models that drive actionable insights. With a diverse portfolio spanning renowned organizations such as Grapplespace, Foursquare, House on the Rock, and the University of Lagos, I've honed my expertise across various industries.</p>
            <p>Currently, I proudly serve as the Co-founder of EdProfile, a revolutionary data analytics-driven school management software. This innovative platform streamlines administrative workflows and enhances teaching-learning processes, revolutionizing the education sector.
            </p>
            <p>Beyond my professional endeavors, I am deeply committed to nurturing the next generation of data analysts. Through mentorship initiatives, I empower aspiring professionals with the skills and knowledge needed to thrive in the dynamic field of data analytics. Through my guidance, I aim to inspire the next generation of data scientists to innovate and lead in an ever-evolving digital landscape.</p>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <Testimonial />

        {/* FAQS */}
        <div className="z-20 w-full py-14 my-10">
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