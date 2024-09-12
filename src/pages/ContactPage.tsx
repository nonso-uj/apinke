import { FaInstagram, FaPaperPlane, FaPhone, FaWhatsapp } from "react-icons/fa6"
import Navbar from "../components/Navbar"
import { IoMdMail } from "react-icons/io"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useEffect } from "react"

const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container-div relative bg-[#e7e2dc] w-full h-fit lg:h-screen flex flex-col items-start justify-center">
      <Navbar />

      <div className='page-header w-full h-full top-0 left-0 pt-10'>
            <div className='w-full grow flex flex-col lg:flex-row items-center justify-center mb-10 lg:mb-0'>
                <div className='flex flex-col items-start justify-between gap-y-8 w-full lg:w-1/3 text-black pl-5 lg:pl-20 py-20 z-20'>
                    {/* <div className='flex flex-col items-start justify-start gap-y-2'> */}
                        <p className='text-xl'>Get In Touch</p>
                        <p className='text-7xl font-semibold'>Drop Me <br />A Line</p>
                    {/* </div> */}

                    <div className='flex flex-col items-start justify-start gap-y-5 text-base w-full'>
                        {/* <div className='flex flex-row items-end justify-start gap-x-3 pr-16 '>
                            <FaLocationDot />
                            <p className=''>121 King Street, Melbourne, Austradvsfvfsvflia</p>
                        </div> */}
                        <div className='flex flex-row items-end justify-start gap-x-3'>
                            <FaPhone />
                            <a href="tel:+2348141636374" className='transition-all hover:underline hover:decoration-orange-500 hover:decoration-dotted hover:underline-offset-4'>+234-814-163-6374</a>
                        </div>
                        <div className='flex flex-row items-end justify-start gap-x-3'>
                            <IoMdMail />
                            <a href="mailto:foapinke@gmail.com" className='transition-all hover:underline hover:decoration-orange-500 hover:decoration-dotted hover:underline-offset-4'>foapinke@gmail.com</a>
                        </div>
                    </div>

                    <div className='space-y-5'>
                        <p className='text-xl font-semibold'>Follow:</p>

                        <div className='flex flex-row items-end justify-start flex-nowrap gap-x-5'>
                          {/* <a href="#">
                            <FaXTwitter size={30} className='hover:text-orange-500' />
                          </a> */}

                          <a href="https://wa.me/2348141636374" target="_blank">
                            <FaWhatsapp size={30} className='hover:text-orange-500' />
                          </a>

                          {/* <a href="#">
                            <FaBehance size={30} className='hover:text-orange-500' />
                          </a> */}

                          {/* <a href="#">
                            <FaYoutube size={30} className='hover:text-orange-500' />
                          </a> */}

                          <a href="https://www.instagram.com/theapinke/">
                            <FaInstagram size={30} className='hover:text-orange-500' />
                          </a>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col items-start justify-between gap-y-8 w-full lg:w-2/3 text-black px-3 lg:px-10 z-20'>
                    <div className='w-full flex flex-col md:flex-row gap-x-0 md:gap-x-3 lg:gap-x-0 items-end justify-between'>
                        <div className="grid w-full max-w-sm items-center gap-y-5">
                            <Label htmlFor="name" className="text-lg font-semibold">Name *</Label>
                            <Input type="text" id="name" placeholder="Your name" className="bg-transparent border-black focus:border-orange-500 focus-visible:ring-orange-500 caret-orange-500" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-y-5">
                            <Label htmlFor="email" className="text-lg font-semibold">Email address *</Label>
                            <Input type="email" id="email" placeholder="Your email address" className="bg-transparent border-black focus:border-orange-500 focus-visible:ring-orange-500 caret-orange-500" />
                        </div>
                    </div>

                    <div className="grid w-full items-center gap-y-5">
                        <Label htmlFor="subject" className="text-lg font-semibold">Subject *</Label>
                        <Input type="text" id="subject" placeholder="Subject of message" className="bg-transparent w-full border-black focus:border-orange-500 focus-visible:ring-orange-500 caret-orange-500" />
                    </div>

                    <div className='w-full'>
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="message" className="text-lg font-semibold">How can I help you?</Label>
                            <Textarea placeholder="Type your message here." id="message" className="bg-transparent w-full border-black focus:border-orange-500 focus-visible:ring-orange-500 caret-orange-500" />
                        </div>
                    </div>

                    <div>
                        <i className='font-semibold'>Fields marked with an asterisk (*) are required!</i>
                    </div>

                    <div className="w-full flex flex-row items-center justify-center lg:justify-start">
                            <button className="flex gap-x-3 bg-transparent text-black rounded-full px-10 py-3 w-fit h-fit font_regular font-semibold text-lg border-2 border-black hover:text-orange-500 hover:border-orange-500 hover:px-8 duration-300">Send message <FaPaperPlane className='' /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage