import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

export default function HomeWork() {
  return (
    <>
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
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper my-swiper"
      >
        <SwiperSlide className='!h-auto'>
          <div className="w-full h-full flex-grow flex flex-col items-start justify-between p-5 bg-white">
              <div className={`works w-full h-[30vh] bg-neutral-500 flex flex-row items-center justify-center`}>
                  <img src={'/images/PROJECT1LONG.jpg'} className="w-full h-full lg:h-full object-cover object-center duration-500" alt="" />
              </div>

              <div className="w-full flex flex-col items-start justify-end mt-4">
                  <div className="w-full space-y-4">
                      <p className="text-xl font_regular font-medium">Was barbie really that good?</p>
                      
                      <Link to={'https://medium.com/@THEAPINKE/was-barbie-really-that-good-45d58ffb417c'} className="h-full w-full">
                        <p className='text-right underline underline-offset-[0.2rem] decoration-solid font-normal font_regular'>READ MORE</p>
                      </Link>
                  </div>

                  <hr className="w-full my-4 border-solid border-b border-neutral-400" />

                  <div className="w-full flex flex-row items-end justify-between font_regular text-sm font-medium">
                      <p>MEDIUM</p>
                      <p>2023</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!h-auto'>
          <div className="w-full h-full flex flex-col items-start justify-between p-5 bg-white">
              <div className={`works w-full h-[30vh] bg-neutral-500 flex flex-row items-center justify-center`}>
                  <img src={'/images/library.webp'} className="w-full h-full lg:h-full object-cover object-center duration-500" alt="" />
              </div>

              <div className="w-full flex flex-col items-start justify-end mt-4">
                  <div className="w-full space-y-4">
                      <p className="text-xl font_regular font-medium">Using sql to analyze the goodreads dataset</p>
                      
                      <Link to={'https://medium.com/@THEAPINKE/using-sql-to-analyze-the-books-dataset-13fffc3d3939'} className="h-full w-full">
                        <p className='text-right underline underline-offset-[0.2rem] decoration-solid font-normal font_regular'>READ MORE</p>
                      </Link>
                  </div>

                  <hr className="w-full my-4 border-solid border-b border-neutral-400" />

                  <div className="w-full flex flex-row items-end justify-between font_regular text-sm font-medium">
                      <p>MEDIUM</p>
                      <p>2023</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!h-auto'>
          <div className="w-full h-full flex flex-col items-start justify-between p-5 bg-white">
              <div className={`works w-full h-[30vh] bg-neutral-500 flex flex-row items-center justify-center`}>
                  <img src={'/images/PROJECT3.webp'} className="w-full h-full lg:h-full object-cover object-center duration-500" alt="" />
              </div>

              <div className="w-full flex-grow flex flex-col items-start justify-end mt-4">
                  <div className="w-full space-y-4">
                      <p className="text-xl font_regular font-medium">HR analytics project with power bi</p>
                      
                      <Link to={'https://medium.com/@THEAPINKE/hr-analytics-project-with-power-bi-67e73869a63e'} className="h-full w-full">
                        <p className='text-right underline underline-offset-[0.2rem] decoration-solid font-normal font_regular'>READ MORE</p>
                      </Link>
                  </div>

                  <hr className="w-full my-4 border-solid border-b border-neutral-400" />

                  <div className="w-full flex flex-row items-end justify-between font_regular text-sm font-medium">
                      <p>MEDIUM</p>
                      <p>2023</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!h-auto'>
          <div className="w-full h-full flex flex-col items-start justify-between p-5 bg-white">
              <div className={`works w-full h-[30vh] bg-neutral-500 flex flex-row items-center justify-center`}>
                  <img src={'/images/University-students-in-Africa.jpg'} className="w-full h-full lg:h-full object-cover object-center duration-500" alt="" />
              </div>

              <div className="w-full flex flex-col items-start justify-end mt-4">
                  <div className="w-full space-y-4">
                      <p className="text-xl font_regular font-medium">Education's Elite: Using Python to Analyze Universities Globally</p>
                      
                      <Link to={'https://www.kaggle.com/code/afolabiini/education-s-elite-analyzing-universities-globally'} className="h-full w-full">
                        <p className='text-right underline underline-offset-[0.2rem] decoration-solid font-normal font_regular'>READ MORE</p>
                      </Link>
                  </div>

                  <hr className="w-full my-4 border-solid border-b border-neutral-400" />

                  <div className="w-full flex flex-row items-end justify-between font_regular text-sm font-medium">
                      <p>KAGGLE</p>
                      <p>2023</p>
                  </div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
        
      <div className='lg:hidden w-full h-fit flex flex-row items-center justify-center gap-x-3 mt-0 md:mt-5'>
        <button className="swiper-button-prev-custom">
          <FaChevronCircleLeft size={40} color='#775647' />
        </button>
        <button className="swiper-button-next-custom">
          <FaChevronCircleRight size={40} color='#775647' />
        </button>
      </div>
    </>
  );
}
