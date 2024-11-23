import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Testimonial = () => {

  const testimonials = [
    {
      text: "I’m so proud of Somtoochukwu Nwadiogbu and what they’ve accomplished! After learning with me, they took everything we covered and applied it with such dedication. They didn’t just stop at understanding the concepts—they went the extra mile to build an impressive portfolio from scratch, showcasing their skills and creativity. Watching their growth and seeing them put their knowledge into action has been truly inspiring. This is exactly why I do what I do!",
      name: 'Somtoochukwu Nwadiogbu',
      link: 'https://nwa-ivans.github.io/Nwadiogbuivans.github.io/'
    },
    {
      text: "I couldn’t be more proud of Cleopatra Okonkwo! After our lessons together, they took what they learned and turned it into something incredible—a complete portfolio that showcases their hard work and talent. It’s amazing to see how they applied their knowledge so effectively and brought their ideas to life. Seeing their growth and dedication is a reminder of why I’m so passionate about teaching. Well done, Cleopatra!",
      name: 'Cleopatra Okonkwo',
      link: 'https://cleoladiva1234.github.io/CleoMetrics.github.io/'
    },
  ];

  return (
    <div className="z-20 w-full h-fit space-y-16 flex flex-col overflow-hidden py-10 my-8">
          <p className="text-4xl lg:text-5xl font-bold font_bold text-black text-center">Testimonials</p>

          <div className="hidden w-full py-14 ml-10 grow lg:grid grid-flow-col auto-cols-max items-center justify-around gap-x-14 testimonial-slides">
            {
              testimonials.map((item :any, i: any) => (
                <div key={i} className="single-testimonial w-80 lg:w-[35vw] hover:scale-110 duration-500 bg-white">
                  <div className="round-1 round"></div>
                  <div className="round-2 round"></div>
                  <p className="p-8 pt-10 lg:p-12 text-start">{item.text}</p>
                  <div className="client-info">
                    <div className="client-details">
                      <h6 className="self-center text-center">{item.name}</h6>

                      <a href={item.link} target="_blank" className="inline self-center mt-3">
                        <button className="bg-black text-white font-bold font_regular uppercase text-sm px-5 py-3 flex flex-row items-center gap-x-3 hover:gap-x-1 rounded-full">check out their website <MdArrowOutward size={20} /></button>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="show-dots w-11/12 mx-auto block lg:hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper my-swiper"
          >
            {
              testimonials.map((item :any, i: any) => (
                <SwiperSlide key={i} className='!h-auto'>
                    <div className="w-full flex flex-col items-start justify-end p-5 bg-white">
                      <div className="w-full space-y-4">
                        <p className="text-center text-sm font_regular font-light">{item.text}</p>
                        
                        <p className='text-center font-bold uppercase font_regular'>{item.name}</p>
                      </div>

                      <hr className="w-full my-4 border-solid border-b border-neutral-400" />

                      <div className="w-full flex flex-row items-end justify-center">
                        <a href={item.link} target="_blank">
                          <button className="bg-black text-white font-bold font_regular uppercase text-sm px-5 py-3 flex flex-row items-center gap-x-3 hover:gap-x-1 rounded-full">check out their website <MdArrowOutward size={20} /></button>
                        </a>
                      </div>
                    </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
          </div>

        </div>
  )
}

export default Testimonial