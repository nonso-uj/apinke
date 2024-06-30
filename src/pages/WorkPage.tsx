import { MdOutlineArrowForward } from "react-icons/md"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const WorkPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
      <Navbar />

      <div className="h-auto lg:h-screen w-full pt-16 m-0">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 p-0 m-0">
          <Link to={'project-deck-consultation'} className="m-0 p-0">
            <div className="h-full min-h-[60vh] w-full p-0 m-0">
              <div className="bg-[url('/images/work-2.png')] hover:bg-[url('/images/work-1.jpg')] bg-cover bg-top hover:bg-center h-full w-full flex flex-col items-center justify-center duration-500">
                <p className="uppercase font_bold text-white text-3xl lg:text-5xl text-center">Project Deck Consultation</p>
                <MdOutlineArrowForward className="font-extrabold" color="#ffffff" size={50} />
              </div>
            </div>
          </Link>
          
          <Link to={'portfolio-workshop'} className="m-0 p-0">
            <div className="h-full min-h-[60vh] w-full p-0 m-0">
              <div className="bg-[url('/images/hero.jpg')] hover:bg-[url('/images/work-2.png')] bg-cover bg-top hover:bg-center h-full w-full flex flex-col items-center justify-center duration-500">
                <p className="uppercase font_bold text-white text-3xl lg:text-5xl text-center">Portfolio Workshop</p>
                <MdOutlineArrowForward className="font-extrabold" color="#ffffff" size={50} />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default WorkPage