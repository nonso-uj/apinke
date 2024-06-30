import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { MdArrowOutward } from "react-icons/md"
import TabMenu from "../components/TabMenu"
import { FaqsAccordion } from "../components/Accordion"
import { CustomFlowbiteTheme, Flowbite } from "flowbite-react"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"
import { useEffect } from "react"

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
      "base": "w-full lg:w-3/5 mx-auto flex flex-row items-end justify-around text-center",
      "styles": {
        "default": "flex-wrap border-b border-gray-200 dark:border-gray-700",
        "underline": "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        "pills": "flex-wrap lg:space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
        "fullWidth": "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
      },
      "tabitem": {
        "base": "w-1/2 lg:w-auto flex items-center justify-center rounded-t-lg p-4 text-lg font_regular font-semibold first:ml-0 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
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
            "base": "",
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
        <div className="z-20 w-full h-auto lg:h-[100vh] pt-28 lg:pt-0 flex flex-col lg:flex-row items-center justify-center gap-y-16">
          <div className="w-full lg:w-3/5">
            <div className="w-full lg:w-4/5 px-3 mx-auto">
              <p className="text-5xl lg:text-7xl font_regular font-medium leading-[3rem] lg:leading-none">Helping You Transform Your Data Career Vision into Reality</p>
              <Link to={'/contact'}>
                <p className="font-medium font_regular text-base lg:text-lg uppercase mt-5 underline decoration-dotted hover:underline hover:decoration-solid">Schedule a complimentary consultation call</p>
              </Link>
            </div>
          </div>

          <div className="h-full w-full lg:w-2/5">
            <img src="/images/hero.jpg" className="h-full w-full object-cover object-center" alt="" />
          </div>
        </div>

        {/* ABOUT */}
        <div className="z-20 w-full h-auto lg:h-screen lg:container mx-auto flex flex-col items-center justify-center gap-y-5 my-16 lg:my-10">
          <p className="w-11/12 lg:w-4/5 mx-auto text-3xl lg:text-5xl font-medium font_regular leading-[2.8rem] lg:leading-[4rem]">I'm Inioluwa Afolabi, a seasoned data scientist, educator, and mentor. I am passionate about deciphering data and empowering others. I teach at top institutions and mentor aspiring data professionals to kickstart and scale their careers.</p>
          <div className="w-4/5">
            <Link to={'/about'} className="w-fit">
              <button className="border-solid border-2 border-black px-8 lg:px-10 py-3 rounded-full text-base font-semibold font_regular uppercase duration-200 hover:bg-black hover:text-white flex flex-row items-center gap-x-3 hover:gap-x-1">More about me <MdArrowOutward size={20} /></button>
            </Link>
          </div>
        </div>

        {/* WORK */}
        <div className="z-20 w-full bg-white py-20 my-10">
          <div className="flex flex-col items-center">
            <TabMenu />
          </div>
        </div>

        {/* PORTFOLIO */}
        <section className="z-20 hero-section h-fit py-10 my-10">
          <p className="text-center text-5xl font_bold font-bold ">Projects</p>

          <div className="card-grid">
            <a className="card" href="https://medium.com/@THEAPINKE/was-barbie-really-that-good-45d58ffb417c">
              <div className="card__background" style={{backgroundImage: "url(/images/PROJECT1LONG.jpg)"}}></div>
              <div className="card__content">
                <p className="card__category font_regular">MEDIUM</p>
                <h3 className="card__heading font_regular">Was barbie really that good?</h3>
              </div>
            </a>
            <a className="card" href="https://medium.com/@THEAPINKE/using-sql-to-analyze-the-books-dataset-13fffc3d3939">
              <div className="card__background" style={{backgroundImage: "url(/images/library.webp)"}}></div>
              <div className="card__content">
                <p className="card__category font_regular">MEDIUM</p>
                <h3 className="card__heading font_regular">Using sql to analyze the goodreads dataset</h3>
              </div>
            </a>
            <a className="card" href="https://medium.com/@THEAPINKE/hr-analytics-project-with-power-bi-67e73869a63e">
              <div className="card__background" style={{backgroundImage: "url(/images/PROJECT3.webp)"}}></div>
              <div className="card__content">
                <p className="card__category font_regular">MEDIUM</p>
                <h3 className="card__heading font_regular">HR analytics project with power bi</h3>
              </div>
            </a>
            <a className="card" href="https://www.kaggle.com/code/afolabiini/education-s-elite-analyzing-universities-globally">
              <div className="card__background" style={{backgroundImage: "url(/images/University-students-in-Africa.jpg)"}}></div>
              <div className="card__content">
                <p className="card__category font_regular">KAGGLE</p>
                <h3 className="card__heading font_regular">Education's Elite: Using Python to Analyze Universities Globally</h3>
              </div>
            </a>
          </div>

          <Link to={'/portfolio'} className="w-fit">
            <button className="border-solid border-2 border-black px-10 py-3 rounded-full text-base font-semibold font_regular uppercase duration-200 hover:bg-black hover:text-white flex flex-row items-center gap-x-3 hover:gap-x-1">See more work <MdArrowOutward size={20} /></button>
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