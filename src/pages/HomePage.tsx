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
        "pills": "hide-scroll h-fit p-2 overflow-x-scroll space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
        "fullWidth": "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
      },
      "tabitem": {
        "base": "w-fit lg:w-auto flex items-center justify-center rounded-t-lg p-3 lg:p-4 text-[1rem] lg:text-lg font_regular font-semibold first:ml-0 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
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
              "on": "rounded-lg bg-orange-100 text-black",
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
      <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
        <Navbar />
        
        {/* HERO */}
        <div className="z-20 w-full lg:w-4/5 h-auto lg:h-[100vh] pt-28 lg:pt-40 lg:pb-5 px-3 lg:px-0 mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-y-16 gap-x-5">
          <div className="w-full lg:w-2/5 order-2 lg:order-1">
            <div className="w-full px-3 lg:pt-10 mx-auto">
              <p className="w-full text-5xl lg:text-[3.8rem] font_black font-medium leading-[3rem] lg:leading-[4rem]">Helping You Make Sense of Data, One Lesson at a Time</p>
              <Link to={'/contact'}>
                <p className="text-primary font-medium font_regular text-base lg:text-lg uppercase mt-5 underline decoration-dotted hover:underline hover:decoration-solid">Schedule a complimentary consultation call</p>
              </Link>
            </div>
          </div>

          <div className="relative h-full w-full lg:w-3/5 py-3 order-1 lg:order-2">
            <img className="hidden lg:block w-64 lg:w-auto" src="/images/svg/ir-bg.svg" alt="" />
            <img src="/images/work-2.jpg" className="hidden lg:block absolute top-0 left-0 h-full w-full lg:w-4/5 object-cover lg:rounded-3xl" style={{ objectPosition: "0px -4rem" }} alt="" />

            <img src="/images/work-2.jpg" className="lg:hidden home-about relative top-0 left-0 h-full w-full lg:w-4/5 object-cover object-top rounded-xl" alt="" />
          </div>
        </div>



        {/* ABOUT */}
        <div className="w-full lg:w-4/5 lg:h-[100vh] mx-auto mt-32 flex flex-col items-center justify-center gap-y-20">
          <div className="w-full">
            <p className="font_black font-bold text-4xl lg:text-4xl text-center">A bit about me...</p>
          </div>

          <div className="home-about relative w-full px-3 lg:px-0 grid grid-cols-1 lg:grid-cols-3 grid-row-3 lg:grid-row-1 gap-x-5 gap-y-5 font-light font_regular">

            <div className="flex items-center py-14 px-12 bg-white text-center z-10">
              <p>I’m Inioluwa Apinke Afolabi, a data analyst, educator, and mentor, committed to helping you navigate the data-driven world.</p>
            </div>

            <div className="flex items-center py-14 px-12 bg-white text-center z-10">
              <p>Whether you're an aspiring data analyst or a professional looking to elevate your skills, whether you're just starting out or have years of experience.</p>
            </div>

            <div className="flex items-center py-14 px-12 bg-white text-center z-10">
              <p>I’m here to help you learn what you need at your own pace.</p>
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
        {/* <Testimonial /> */}



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