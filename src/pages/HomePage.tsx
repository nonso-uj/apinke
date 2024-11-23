import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { MdArrowOutward } from "react-icons/md"
import TabMenu from "../components/TabMenu"
import { FaqsAccordion } from "../components/Accordion"
import { CustomFlowbiteTheme, Flowbite } from "flowbite-react"
import Footer from "../components/Footer"
// import Testimonial from "../components/Testimonial"
import { useEffect } from "react"
import HomeWork from "@/components/HomeWork"
import Testimonial from "@/components/Testimonial"

const customTheme: CustomFlowbiteTheme = {
  accordion: {
      "root": {
        "base": "divide-y divide-black border-gray-200 dark:divide-gray-700 dark:border-gray-700",
        "flush": {
          "off": "rounded-lg border",
          "on": "border-b"
        }
      },
      "content": {
        "base": "px-5 lg:px-20 py-5 bg-black/90 text-white text-base lg:text-lg font_regular first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900 duration-500"
      },
      "title": {
        "arrow": {
          "base": "h-10 w-10 shrink-0",
          "open": {
            "off": "",
            "on": "rotate-180"
          }
        },
        "base": "flex w-full items-center justify-between py-4 lg:py-8 px-2 lg:px-5 text-left font-medium text-lg lg:text-3xl font_regular text-black first:rounded-t-lg last:rounded-b-lg dark:text-black",
        "flush": {
          "off": "hover:bg-black/10 dark:hover:bg-gray-800 hover:px-8 lg:hover:px-20 duration-500",
          "on": "bg-transparent dark:bg-transparent"
        },
        "heading": "",
        "open": {
          "off": "",
          "on": "bg-black/10 text-black dark:bg-gray-800 dark:text-white px-4 lg:px-14"
        }
      }
  },
  tabs: {
    "base": "w-full mx-auto flex flex-col gap-2",
    "tablist": {
      "base": "w-full lg:w-fit mx-auto flex flex-row items-end justify-around text-center",
      "styles": {
        "default": "flex-wrap border-b border-gray-200 dark:border-gray-700",
        "underline": "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        "pills": "tiny-scroll h-fit p-2 overflow-x-scroll lg:overflow-hidden space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
        "fullWidth": "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
      },
      "tabitem": {
        "base": "w-fit lg:w-auto flex items-center justify-center flex-nowrap rounded-t-lg p-3 lg:p-4 text-[1rem] lg:text-lg font_regular font-semibold first:ml-0 focus:outline-none focus:ring-2 focus:ring-[#775647] disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        "styles": {
          "default": {
            "base": "rounded-t-lg",
            "active": {
              "on": "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
            }
          },
          "underline": {
            "base": "rounded-t-lg",
            "active": {
              "on": "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
              "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            }
          },
          "pills": {
            "base": "text-nowrap",
            "active": {
              "on": "rounded-lg bg-[#D3BFA8] text-black",
              "off": "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          },
          "fullWidth": {
            "base": "ml-0 flex w-full rounded-none first:ml-0",
            "active": {
              "on": "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
              "off": "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
            }
          }
        },
        "icon": "mr-2 h-5 w-5"
      }
    },
    "tabitemcontainer": {
      "base": "",
      "styles": {
        "default": "",
        "underline": "",
        "pills": "",
        "fullWidth": ""
      }
    },
    "tabpanel": "py-3"
  }
}

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc] pt-20 lg:pt-0">
        <Navbar />
        
        {/* HERO */}
        <div className="w-screen h-fit lg:h-svh">
          <div className="relative w-full lg:w-[95%] h-full mx-auto px-3 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-x-10 gap-y-10">
            <div className="h-full w-full lg:w-1/2 mx-auto flex flex-col items-start justify-center gap-y-2 z-10 pt-10 lg:pt-0">
              <p className="text-3xl lg:text-6xl font-normal font_bold leading-[115%] ">Hi I'm Apinke Afolabi - a <span className="inline-block h-fit w-fit p-[2px] rounded-md border-2 border-solid bg-[#9cbbff] text-nowrap h-fit">Data Analyst,</span> Educator and Advocate for <span className="inline-block h-fit w-fit p-[2px] rounded-md border-2 border-solid bg-[#bb77fe] text-nowrap h-fit">Data Literacy</span> in Africa.</p>

              <div>
                <span className="text-xs lg:text-sm font_regular font-light">
                  <p>I believe everyone benefits from understanding data, as it’s the language behind the decisions that shape our world.</p>

                  <p>As a data analyst and educator, I work to help individuals and organizations make sense of their data, turning complex information into insights that drive real impact. My mission goes beyond analysis; through initiatives like Data for Next Gen Africa and SQL Query Corner, I’m dedicated to equipping young minds across Africa with essential data skills, empowering them to thrive in an increasingly data-driven world.</p>

                  <p>Whether you’re a professional, student, or simply curious, I’ll help you develop a data-driven mindset, building skills and confidence to help you see data as your most powerful tool.</p>
                </span>
                
                <Link to={'/contact'}>
                  <p className="text-primary font-bold font_regular text-base lg:text-xl uppercase mt-5 underline decoration-dotted hover:underline hover:decoration-solid underline-offset-4">Let's talk....</p>
                </Link>
              </div>

            </div>

            <div className="relative h-full w-full lg:w-1/2 mx-auto flex flex-row items-center justify-center z-10">
              <img src="/images/work-2.jpg" className="hidden lg:block top-0 left-0 h-3/4 w-full lg:w-3/4 object-cover object-center lg:rounded-3xl" alt="" />

              <img src="/images/work-2.jpg" className="lg:hidden home-about relative top-0 left-0 h-full w-full lg:w-4/5 object-cover object-top rounded-xl" alt="" />
            </div>

            <img className="absolute right-0 lg:-right-16 bottom-16 lg:-bottom-24 w-[100%] lg:w-[70%] scale-[2] lg:scale-100" src="/images/svg/ir-bg.svg" alt="" />
          </div>
        </div>

        

        {/* ABOUT */}
        <div className="w-full lg:w-4/5 h-auto mx-auto mt-32 flex flex-col items-center justify-center gap-y-20">
          <div className="w-full">
            <p className="font_black font-bold text-4xl lg:text-4xl text-center">The Impact I'm Creating and Why It Matters</p>
          </div>

          <div className="home-about relative w-full px-3 lg:px-0 flex flex-col justify-start items-center gap-y-10">

            <div className="w-full flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-y-5 gap-x-5 py-5 lg:py-14 px-4 lg:px-12 bg-white z-10">
              <div className="order-2 lg:order-1 w-full lg:w-2/3 flex flex-col justify-start items-start gap-y-5">
                <p className="self-center lg:self-start font-semibold text-2xl font_bold">Data for Next-Gen Africa</p>

                <p className="font-light font_regular text-sm lg:text-base">I had free time on my hands, and like many people, I wanted to do something meaningful with it. I started asking myself, ‘How can I give back?’ I knew I wanted to use my skills—not just as a data analyst, but also with my background in education—to make a real impact. So, I began looking for opportunities to volunteer or contribute to causes that centered around data literacy. But when I couldn't find any data-focused volunteer opportunities in Lagos, I was moved to take action and create my own. That’s how Data for Next-Gen Africa was born. What we’re really doing is empowering secondary school students with the data skills they need to succeed in a world increasingly shaped by data, no matter what career path they choose.</p>

                <a href="https://data4nextgenafrica.my.canva.site/" target="_blank" className="inline self-center">
                  <button className="bg-black text-white font-bold font_regular uppercase text-sm px-5 py-3 flex flex-row items-center gap-x-3 hover:gap-x-1">check it out <MdArrowOutward size={20} /></button>
                </a>
              </div>

              <div className="order-1 lg:order-2 w-full lg:w-1/3 h-full">
                <img src="/images/class.jpg" className="w-full h-auto max-h-[60vh] object-cover object-center" alt="" />
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-y-5 gap-x-5 py-5 lg:py-14 px-4 lg:px-12 bg-white z-10">
              <div className="w-full lg:w-1/3 h-full">
                <img src="/images/impact1.png" className="w-full h-auto object-cover object-center" alt="" />
              </div>

              <div className="w-full lg:w-2/3 flex flex-col justify-start items-start gap-y-5">
                <p className="self-center lg:self-end font-semibold text-2xl font_bold">SQL Query Corner</p>

                <p className="font-light font_regular text-sm lg:text-base">When I was learning SQL, I found it difficult to find projects that really helped me connect the dots between what I was learning and how to apply it in the real world. This challenge led me to create SQL Query Corner—a platform where beginners can practice real-world projects and see how SQL syntaxes are used in actual analysis. The goal is to bridge the gap between theory and practice, providing hands-on experience that prepares learners for the kind of work they’ll encounter in the field. SQL Query Corner is for anyone ready to take their SQL skills to the next level and start building meaningful, job-ready projects" should replace "Whether you're an aspiring data analyst or a professional looking to elevate your skills, whether you're just starting out or have years of experience.</p>

                <a href="https://the-apinke.github.io/SQL-QUERY-CORNER/?fbclid=PAZXh0bgNhZW0CMTEAAaZ5WYbez8sOvB27VltsBhqXDUIin9fWoo1eA3k38ayT3n3kaAsFrFRLJeM_aem_f3MYWDFdSGxi7oU6N6JPAw" target="_blank" className="inline self-center">
                  <button className="bg-black text-white font-bold font_regular uppercase text-sm px-5 py-3 flex flex-row items-center gap-x-3 hover:gap-x-1">check it out <MdArrowOutward size={20} /></button>
                </a>
              </div>
            </div>
            
            <div className="w-full flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-y-5 gap-x-5 py-5 lg:py-14 px-4 lg:px-12 bg-white z-10">
              <div className="order-2 lg:order-1 w-full lg:w-2/3 flex flex-col justify-start items-start gap-y-5 mb-5 lg:mb-0">
                <p className="text-center self-center lg:text-start lg:self-start font-semibold text-2xl font_bold">Data Skills & Portfolio Workshops</p>

                <p className="font-light font_regular text-sm lg:text-base">When I started learning data analytics, I struggled to find personalized support. I spent countless hours sifting through tutorials, feeling stuck, and wishing I had someone to help me understand where I was going wrong. The frustration of not having a mentor to guide me through each step made the journey longer and harder than it had to be. That’s why I now offer personalized data workshops. With my hands-on approach, I guide you through each workshop, ensuring you gain the necessary skills to succeed. You won’t feel lost. Together, we’ll identify the perfect data role for you, equip you with the skill sets required for that role, and build a portfolio that showcases your abilities to land the job. My workshops are designed to train you for real-world data roles and help you get hired, setting you up for a successful career in data.</p>

                {/* <a href="https://data4nextgenafrica.my.canva.site/" className="inline self-center">
                  <button className="bg-black text-white font-bold font_regular uppercase text-sm px-5 py-3 flex flex-row items-center gap-x-3 hover:gap-x-1">check it out <MdArrowOutward size={20} /></button>
                </a> */}
              </div>

              <div className="order-1 lg:order-2 w-full lg:w-1/3 h-full">
                <img src="/images/impact2.png" className="w-full h-auto object-cover object-center" alt="" />
              </div>
            </div>

          </div>

          <div className="w-4/5 z-10">
              <Link to={'/about'} className="w-fit block mx-auto flex-row items-center justify-center">
                <button className="border-solid border-2 border-black px-8 lg:px-10 py-3 rounded-full text-base font-semibold font_regular uppercase duration-200 hover:bg-black hover:text-white flex flex-row items-center gap-x-3 hover:gap-x-1">More about me <MdArrowOutward size={20} /></button>
              </Link>
          </div>
        </div>



        {/* WORK */}
        <div className="z-20 w-full bg-white py-20 my-10">
        <div className="w-full my-6">
            <p className="font_black font-bold text-4xl lg:text-4xl text-center">What I can do for you</p>
          </div>
          <div className="flex flex-col items-center px-0 lg:px-16">
            <TabMenu />
          </div>
        </div>



        {/* PORTFOLIO */}
        <section className="z-20 hero-section h-fit py-10 my-10">
          <p className="text-center text-5xl font_black font-bold ">Projects</p>

          <div className="w-full">
            <HomeWork />
          </div>

          <Link to={'/portfolio'} className="w-fit">
            <button className="border-solid border-2 border-black px-10 py-3 rounded-full text-sm lg:text-base font-semibold font_regular uppercase duration-200 hover:bg-black hover:text-white flex flex-row items-center gap-x-3 hover:gap-x-1">See more projects <MdArrowOutward size={20} /></button>
          </Link>
        </section>
        


        {/* TESTIMONIAL */}
        <Testimonial />



        {/* FAQS */}
        <div className="z-20 w-full py-14 my-10">
          <div className="lg:container mx-auto">
            <p className="ml-5 lg:ml-0 text-start text-5xl font_bold font-bold mb-10">FAQS</p>

            <div className="w-full flex flex-col items-center">
              <FaqsAccordion />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </Flowbite>
  )
}

export default HomePage