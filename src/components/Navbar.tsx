import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { Link, useLocation } from "react-router-dom"

const Navbar = ({ contactPage } :any) => {
    const currentLocaton = useLocation();

  return (
    <div className={`box-border top-0 left-0 right-0 z-50 w-full h-fit px-10 py-2 fixed backdrop-blur-sm bg-secondary-blur lg:bg-white/30`}>
        <div className="w-full flex flex-row items-center justify-between">
            <div className="w-fit">
                <Link to={'/'}>
                    <p className={`hidden lg:flex flex-row items-center justify-between gap-x-1 hover:gap-x-2 duration-500 text-3xl`}>
                        <span className="font-bold font_bold">The</span> 
                        <span className="text-primary">|</span> 
                        <span className="font-bold font_bold">Apinke</span> 
                        <span className="text-primary">|</span> 
                        <span className="font-bold font_bold">Afolabi</span>
                    </p>
                    <p className={`lg:hidden flex flex-row items-center justify-between gap-x-1 hover:gap-x-2 duration-500 text-5xl my-2 ${contactPage? 'text-white' : '' }`}>
                        <span className="font-bold font_bold">T</span> 
                        <span className="text-primary">|</span> 
                        <span className="font-bold font_bold">A</span> 
                        <span className="text-primary">|</span> 
                        <span className="font-bold font_bold">A</span>
                    </p>
                </Link>
            </div>
            
            <div className={`w-fit hidden lg:flex flex-row items-center justify-between gap-x-10  ${contactPage? 'text-white' : '' }`}>
                <Link  to='/about'>
                    <p className={`text-xl font-medium font_semibold duration-500 hover:scale-[1.05] hover:text-primary ${currentLocaton.pathname === '/about' && 'text-primary'}`}>About</p>
                </Link>
                <Link  to='/services'>
                    <p className={`text-xl font-medium font_semibold duration-500 hover:scale-[1.05] hover:text-primary ${currentLocaton.pathname.startsWith('/s') && 'text-primary'}`}>Services</p>
                </Link>
                <Link  to='/portfolio'>
                    <p className={`text-xl font-medium font_semibold duration-500 hover:scale-[1.05] hover:text-primary ${currentLocaton.pathname === '/portfolio' && 'text-primary'}`}>Portfolio</p>
                </Link>
                <Link to={'/contact'}>
                    <button className="bg-primary hover:[.bg-primary]/80 duration-500 hover:scale-[1.05] text-white px-7 py-3 rounded-lg font-semibold font_semibold">
                        CONTACT
                    </button>
                </Link>
            </div>

            <div className="fixed top-3 right-5 w-fit h-fit block lg:hidden z-50">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-full duration-300 ease-in-out ${ open ? 'bg-primary scale-125' : 'bg-black' }`}>
                                <PopoverButton id="nav-icon3" className={`relative w-2/5 h-2/5 p-0 rounded-full ${ open && 'open'}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </PopoverButton>
                            </div>

                            <PopoverPanel anchor="bottom" className={`flex flex-col items-center justify-start w-full h-full p-3 pt-10  z-50`}>
                                    <div 
                                        className={`w-full h-full flex flex-col items-start justify-start gap-y-4 pl-5 pt-10 bg-black text-white text-4xl text-bold font_bold`}
                                    >

                                        <Link to={'/'}>
                                            <p className={`${currentLocaton.pathname === "/" && 'text-primary'}`}>Home</p>
                                        </Link>

                                        <hr className="border border-white w-full" />
                                        
                                        <Link to={'/about'}>
                                            <p className={`${currentLocaton.pathname === '/about' && 'text-primary'}`}>About</p>
                                        </Link>

                                        <hr className="border border-white w-full" />
                                        
                                        <Link to={'/services'}>
                                            <p className={`${currentLocaton.pathname.startsWith('/s') && 'text-primary'}`}>Services</p>
                                        </Link>
                                        
                                        <hr className="border border-white w-full" />
                                        
                                        <Link to={'/portfolio'}>
                                            <p className={`${currentLocaton.pathname === '/portfolio' && 'text-primary'}`}>Portfolio</p>
                                        </Link>
                                        
                                        <hr className="border border-white w-full" />

                                        <Link to={'/contact'}>
                                            <p className={`${currentLocaton.pathname === '/contact' && 'text-primary'}`}>Contact</p>
                                        </Link>

                                    </div>
                            </PopoverPanel>
                        </>
                    )}
                </Popover>
            </div>
        </div>
    </div>
  )
}

export default Navbar