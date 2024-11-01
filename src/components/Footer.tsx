import { MdOutlineArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="relative bg-white h-auto lg:h-[80vh] w-full overflow-hidden mt-20">
        <div className="grainy top-0 left-0 h-full w-full p-5 lg:p-10">
            <div className="z-20 h-full w-full flex flex-col items-center justify-between">
                <div className="z-20 w-full flex flex-col justify-between items-start gap-y-10">
                    <Link to={'/contact'} className="flex flex-row items-end justify-start gap-x-5 text-4xl lg:text-8xl font-normal font_regular duration-500 underline decoration-dotted hover:decoration-solid decoration-2 underline-offset-[1rem]">
                        <p>REACH OUT</p>
                        <MdOutlineArrowOutward />
                    </Link>
                    <p className="text-2xl font-normal font_regular">YOU SHOULD GET A RESPONSE IN 24 HOURS</p>
                </div>

                <div className="z-20 w-full flex flex-row justify-between items-start lg:items-center py-10">
                    <div className="flex flex-col justify-start lg:justify-between items-start gap-y-5 uppercase text-base font_regular font-medium">
                        <Link to={'/about'} className="py-2 lg:py-0 hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4">
                            <p>About</p>
                        </Link>
                        <Link to={'/work'} className="py-2 lg:py-0 hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4">
                            <p>Work</p>
                        </Link>
                        <Link to={'/portfolio'} className="py-2 lg:py-0 hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4">
                            <p>Portfolio</p>
                        </Link>
                        <Link to={'/contact'} className="py-2 lg:py-0 hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4">
                            <p>Contact</p>
                        </Link>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-end lg:items-center gap-y-5 gap-x-2">
                        <Link to={'mailto:foapinke@gmail.com'} target="_blank">
                            <button className="border-solid border border-black px-5 py-2 rounded-3xl duration-500 hover:bg-black hover:text-white">E-MAIL</button>
                        </Link>
                        <Link to={''} target="_blank">
                        <button className="border-solid border border-black px-5 py-2 rounded-3xl duration-500 hover:bg-black hover:text-white">LINKEDIN</button>
                        </Link>
                        <Link to={'https://medium.com/@THEAPINKE'} target="_blank">
                        <button className="border-solid border border-black px-5 py-2 rounded-3xl duration-500 hover:bg-black hover:text-white">MEDIUM</button>
                        </Link>
                        <Link to={'https://www.instagram.com/theapinke/'} target="_blank">
                        <button className="border-solid border border-black px-5 py-2 rounded-3xl duration-500 hover:bg-black hover:text-white">INSTAGRAM</button>
                        </Link>
                    </div>
                </div>

                <div className="z-20 w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-y-3">
                <p>2024 AFOLABI APINKE INIOLUWA</p>
                <p><a href="https://github.com/nonso-uj">MADE BY NONSO;)</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer