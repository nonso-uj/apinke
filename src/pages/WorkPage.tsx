import { MdArrowOutward } from "react-icons/md"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

const WorkPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [isOpen, setIsOpen] = useState(0)

  const services = [
    {
        title: "ALL MY SERVICES",
        titleOpen: "Here’s How I Can Help You",
        excerpt: "Whether you're looking to kickstart your data career, build an impressive portfolio, or solve complex data challenges, my services and solutions are tailored to meet your needs. From hands-on workshops to on-demand analytics support, I’m here to guide you every step of the way.",
        image: "/images/apinke8.jpg",
        link: "#",
    },
    // {
    //     title: "Project Deck Consultation",
    //     excerpt: "You’ve taken the courses, watched the videos, and learned the theories but how do you turn that knowledge into a career-worthy portfolio? If you’ve ever felt overwhelmed trying to choose the right projects or unsure about where to start, you’re not alone. This consultation is for people like you who are serious about building a successful data science career.",
    //     image: "/images/library.webp",
    //     link: "/services/project-deck-consultation",
    // },
    {
        title: "Portfolio Workshop",
        excerpt: "You’ve taken the courses, watched the videos, and learned the theories but how do you turn that knowledge into a career-worthy portfolio? If you’ve ever felt overwhelmed trying to choose the right projects or unsure about where to start, you’re not alone. This workshop is for people like you who are serious about building a powerful portfolio to land your dream data job.",
        action: "Start Building Your Portfolio",
        image: "/images/library.webp",
        link: "/services/portfolio-workshop",
    },
    {
        title: "8-Week Data Analytics Program",
        excerpt: "You’re not just a busy professional, a parent balancing endless responsibilities, or a student with too much on your plate. You’re someone who’s ready to take charge of your future, to change your life by gaining the skills that will make you relevant in today’s data-driven world.",
        action: "Join The Program Now",
        image: "/images/library.webp",
        link: "/services/data-analytics-program",
    },
    {
        title: "On-Demand Data Analyst Services",
        excerpt: "Whether you're a student struggling with a class project, a business owner seeking clearer insights from your data, or a corporate executive needing expert analysis to guide decision-making, I offer customized data solutions tailored to your specific needs.",
        action: "Get Expert Help Today",
        image: "/images/library.webp",
        link: "/services/data-analyst-services",
    },
  ];

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const widthRefs = useRef<(HTMLDivElement | null)[]>([]);
    
  const [mobileHeights, setMobileHeights] = useState<number[]>([]);
  const [mobileWidths, setMobileWidths] = useState<number[]>([]);

  useEffect(() => {
    const newHeights = itemRefs.current.map((ref) => ref?.offsetHeight || 0);
    setMobileHeights(newHeights);
    
    const newWidths = widthRefs.current.map((ref) => ref?.offsetWidth || 0);
    setMobileWidths(newWidths);
  }, []);

  console.log('mobileHeights= ', mobileWidths)

  return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
      <Navbar />

      <div className="h-dvh lg:h-screen w-full pt-20 lg:pt-16 m-0">
        <motion.div layout className="w-full h-full hidden lg:flex flex-row items-stretch justify-end p-0 m-0 duration-700">
          <AnimatePresence>
            {services.map((service: any, i: any) => (
              <motion.div 
                key={i+32}
                animate={{ width: isOpen === i ? '100%' : mobileWidths[i] }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className={`${isOpen === i ? 'grow w-auto' : 'grow-0 w-fit'} flex flex-row items-stretch justify-start self-start h-full border-solid border border-black`}
              >
                <div ref={(el) => (widthRefs.current[i] = el)} onClick={() => setIsOpen(i)} className="w-fit h-full flex flex-col items-center justify-between border-solid border border-black px-12 pt-6 pb-5 cursor-pointer hover:pt-12 hover:pb-8 hover:px-14 bg-secondary duration-500">
                  <div className="grow h-auto w-full">
                    <p className="text-3xl font_black font-bold uppercase" style={{ textOrientation: 'mixed', writingMode: 'vertical-lr' }}>{service.title}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font_black">{i}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen === i && (
                    <motion.div 
                      key={`service1-content` + i}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '100%', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className={`h-full overflow-hidden`}
                    >
                      <Link to={service.link} className="w-full h-full flex flex-col items-start justify-between gap-y-5 p-4">
                        <div className="grow w-full flex flex-col justify-start items-center gap-y-3 px-10 text-center">
                          <p className="text-6xl font-bold font_black">{service.titleOpen ? service.titleOpen : service.title}</p>
                          <p className="text-xl font_regular font-semibold w-full">{service.excerpt}</p>

                          {i > 0 && (
                            <button className="text-base font-bold font_regular uppercase duration-200 flex flex-row items-center gap-x-3 hover:gap-x-1 underline decoration-dotted">{service.action} <MdArrowOutward size={20} /></button>
                          )}
                        </div>

                        {service.image && (
                          <div className="shrink h-full max-h-[40vh] w-full overflow-hidden">
                            <img src={service.image} className={`h-full w-4/5 mx-auto object-cover  duration-500 hover:scale-125 ${i === 0 ? 'object-top' : 'object-center'}`} alt="" />
                          </div>
                        )}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        

        {/* MOBILE */}
        <motion.div layout className="lg:hidden w-full h-full flex flex-col lg:flex-row items-stretch justify-end p-0 m-0 duration-700">
          <AnimatePresence>
            {services.map((service: any, i: any) => (
              <motion.div 
                key={i+75}
                animate={{ height: isOpen === i ? '100%' : mobileHeights[i] }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className={`${isOpen === i ? 'grow h-auto' : 'grow-0 h-fit'} flex flex-col items-stretch justify-start self-start w-full border-solid border-2 border-black`}
              >
                <div ref={(el) => (itemRefs.current[i] = el)} onClick={() => setIsOpen(i)} className="h-fit w-full flex flex-row items-center justify-between border-solid border-2 border-black p-2 cursor-pointer hover:border-neutral-600 bg-secondary duration-500">
                  <div className="grow h-auto w-full">
                    <p className="text-lg font_black font-bold uppercase">{service.title}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen === i && (
                    <motion.div 
                      key={`service1-content-m` + i}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: '100%', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className={`w-full overflow-hidden`}
                    >
                      <Link to={service.link} className="w-full h-full flex flex-col items-start justify-between gap-y-5 p-4">
                        <div className="grow w-full flex flex-col justify-start items-center gap-y-3 text-center">
                          <p className="text-xl font-bold font_black">{service.titleOpen ? service.titleOpen : service.title}</p>
                          <p className="text-sm font_regular font-regular w-full">{service.excerpt}</p>

                          {i > 0 && (
                            <p className="text-nowrap text-sm font-bold font_regular uppercase duration-200 flex flex-row items-center gap-x-3 hover:gap-x-1 underline decoration-dotted">{service.action} <MdArrowOutward size={20} /></p>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default WorkPage