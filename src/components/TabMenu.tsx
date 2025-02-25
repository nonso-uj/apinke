import { Tabs } from "flowbite-react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";






const TabMenu = () => {
  return (
    <Tabs aria-label="Pills" style="pills">
        <Tabs.Item active title="Portfolio Workshop">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-black text-white">
            <div className="w-full h-full">
              <img src="/images/work-1.jpg" alt="" className="w-full h-60 lg:h-[80vh] object-cover object-top" />
            </div>
            <div className="w-full h-full">
              <div className="w-10/12 lg:w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-5 py-10">
                <p className="text-sm lg:text-lg font_extra font-bold uppercase">Portfolio Workshop</p>
                <p className="text-xl lg:text-3xl font_regular font-semibold">Take Control of Your Data Analytics Journey with Personalized Project Guidance</p>
                <p className="text-base font_regular font-normal">You’ve taken the courses, watched the videos, and learned the theories but how do you turn that knowledge into a career-worthy portfolio? If you’ve ever felt overwhelmed trying to choose the right projects or unsure about where to start, you’re not alone. This workshop is for people like you who are serious about building a powerful portfolio to land your dream data job.</p>
                <Link to={'/services/portfolio-workshop'} className="w-fit">
                  <button className="border-solid border-2 border-white px-10 py-3 rounded-full text-base font-semibold font_regular uppercase duration-200 hover:bg-white hover:text-black flex flex-row items-center gap-x-3 hover:gap-x-1">Find out more <MdArrowOutward size={20} /></button>
                </Link>
              </div>
            </div>
          </div>
        </Tabs.Item>
        {/* <Tabs.Item title="Portfolio Workshop">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-black text-white">
            <div className="w-full h-full">
              <img src="/images/tab1.jpg" alt="" className="w-full h-60 lg:h-[80vh] object-cover object-center" />
            </div>
            <div className="w-full h-full">
              <div className="w-10/12 lg:w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-5 py-10">
                <p className="text-sm lg:text-lg font_extra font-bold uppercase">PORTFOLIO WORKSHOP</p>
                <p className="text-xl lg:text-3xl font_regular font-semibold">Turn Your Data Science Skills into a Job-Winning Portfolio in Just Three Weeks</p>
                <p className="text-base font_regular font-normal">In data science, your portfolio is your proof of skill, it’s the story of what you can do. But creating a portfolio that truly represents your abilities is challenging, especially when you’re doing it alone. My <b>Portfolio Workshop</b> is designed to take you from concept to a fully realized, professionally hosted project in just three weeks.</p>
                <Link to={'/services/portfolio-workshop'} className="w-fit">
                  <button className="border-solid border-2 border-white px-10 py-3 rounded-full text-base font-semibold font_regular uppercase duration-200 hover:bg-white hover:text-black flex flex-row items-center gap-x-3 hover:gap-x-1">Find out more <MdArrowOutward size={20} /></button>
                </Link>
              </div>
            </div>
          </div>
        </Tabs.Item> */}
        <Tabs.Item title="8-Week Data Analytics Program">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-black text-white">
            <div className="w-full h-full">
              <img src="/images/tab2.jpg" alt="" className="w-full h-60 lg:h-[80vh] object-cover object-center" />
            </div>
            <div className="w-full h-full">
              <div className="w-10/12 lg:w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-5 py-10">
                <p className="text-sm lg:text-lg font_extra font-bold uppercase">12-Week Data Analytics Program</p>

                <p className="text-xl lg:text-3xl font_regular font-semibold">Transform Your Future By Mastering Data Analytics, No Matter Where You Are in Life</p>

                <p className="text-base font_regular font-normal">You’re not just a busy professional, a parent balancing endless responsibilities, or a student with too much on your plate. You’re someone who’s ready to take charge of your future, to change your life by gaining the skills that will make you relevant in today’s data-driven world.</p>
                <Link to={'/services/data-analytics-program'} className="w-fit">
                  <button className="border-solid border-2 border-white px-10 py-3 rounded-full text-base font-semibold font_regular uppercase duration-200 hover:bg-white hover:text-black flex flex-row items-center gap-x-3 hover:gap-x-1">Find out more <MdArrowOutward size={20} /></button>
                </Link>
              </div>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="On-Demand Data Analyst Services">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-black text-white">
            <div className="w-full h-full">
              <img src="/images/hero.jpg" alt="" className="w-full h-60 lg:h-[80vh] object-cover object-top" />
            </div>
            <div className="w-full h-full">
              <div className="w-10/12 lg:w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-5 py-10">
                <p className="text-sm lg:text-lg font_extra font-bold uppercase">On-Demand Data Analyst Services</p>
                <p className="text-xl lg:text-3xl font_regular font-semibold">Get Expert Data Analytics for Any Challenge-Academic, Professional, or Business</p>
                <p className="text-base font_regular font-normal">Whether you're a student struggling with a class project, a business owner seeking clearer insights from your data, or a corporate executive needing expert analysis to guide decision-making, I offer customized data solutions tailored to your specific needs.</p>
                <Link to={'/services/data-analyst-services'} className="w-fit">
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
