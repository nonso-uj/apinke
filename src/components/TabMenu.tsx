import { Tabs } from "flowbite-react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";






const TabMenu = () => {
  return (
    <Tabs aria-label="Pills" style="pills">
        <Tabs.Item active title="Project Deck Consultation">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-black text-white">
            <div className="w-full h-full">
              <img src="/images/work-1.jpg" alt="" className="w-full h-60 lg:h-[80vh] object-cover object-top" />
            </div>
            <div className="w-full h-full">
              <div className="w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-5 py-10">
                <p className="text-4xl font_regular font-semibold">Project Deck Consultation</p>
                <p className="text-base font_regular font-normal">Getting started on a data science career journey? Let me guide you with personalized portfolio project recommendations perfectly aligned with your career trajectory.</p>
                <Link to={'/work/project-deck-consultation'} className="w-fit">
                  <button className="border-solid border-2 border-white px-10 py-3 rounded-full text-base font-semibold font_regular uppercase duration-200 hover:bg-white hover:text-black flex flex-row items-center gap-x-3 hover:gap-x-1">Find out more <MdArrowOutward size={20} /></button>
                </Link>
              </div>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Portfolio Workshop">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-black text-white">
            <div className="w-full h-full">
              <img src="/images/work-2.png" alt="" className="w-full h-60 lg:h-[80vh] object-cover object-center" />
            </div>
            <div className="w-full h-full">
              <div className="w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-5 py-10">
                <p className="text-4xl font_regular font-semibold">PORTFOLIO WORKSHOP</p>
                <p className="text-base font_regular font-normal">An immersive three-week experience designed to enhance your expertise, transform knowledge into captivating portfolio projects, and fast-track your career in data science.</p>
                <Link to={'/work/portfolio-workshop'} className="w-fit">
                  <button className="border-solid border-2 border-white px-10 py-3 rounded-full text-base font-semibold font_regular uppercase duration-200 hover:bg-white hover:text-black flex flex-row items-center gap-x-3 hover:gap-x-1">Find out more <MdArrowOutward size={20} /></button>
                </Link>
              </div>
            </div>
          </div>
        </Tabs.Item>
    </Tabs>
  )
}

export default TabMenu