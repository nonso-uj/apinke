import { Link } from "react-router-dom";
import { MdOutlineArrowDownward } from "react-icons/md";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";

const WorkshopPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    let options = {
        threshold: 0.25,
      };
      
      // FADE LEFT OBSERVER
      const observer1 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation className
            entry.target.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
          }
        });
      });
      
      // Get multiple elements instead of a single one using "querySelectorAll"
      const squares1 = document.querySelectorAll('.fadeLeft');
      
      // Loop over the elements and add each one to the observer1
      squares1.forEach((element) => observer1.observe(element));
       
      
      
      
      // FADE LEFT OBSERVER
      const observer2 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation className
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      });
      
      // Get multiple elements instead of a single one using "querySelectorAll"
      const squares2 = document.querySelectorAll('.fadeInUp');
      
      // Loop over the elements and add each one to the observer2
      squares2.forEach((element) => observer2.observe(element));
      
      
      
      
      // FADE LEFT OBSERVER
      const observer3 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation className
            entry.target.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow');
          }
        });
      });
      
      // Get multiple elements instead of a single one using "querySelectorAll"
      const squares3 = document.querySelectorAll('.fadeRight');
      
      // Loop over the elements and add each one to the observer3
      squares3.forEach((element) => observer3.observe(element));
      
      
      
      // FADE LEFT OBSERVER
      const observer4 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation className
            entry.target.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
          }
        });
      }, options);
      
      // Get multiple elements instead of a single one using "querySelectorAll"
      const squares4 = document.querySelectorAll('.fadeLeft1');
      
      // Loop over the elements and add each one to the observer4
      squares4.forEach((element) => observer4.observe(element));
    
    return (
    <div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
        <Navbar />
        
        {/* <!-- INTRO --> */}
        <div className="workshop-intro">
            <div className="workshop-intro-div">
                <p className="text-center text-orange-600 font_black text-4xl mb-8 lg:mb-5 uppercase">Portfolio Workshop</p>
                <p className="workshop-intro-p">An immersive three-week experience designed to enhance your expertise, transform knowledge into captivating portfolio projects, and fast-track your career in data science.</p>
            </div>
            
            <div className="flex flex-row items-end text-center gap-x-1 lg:gap-x-3 text-2xl lg:text-4xl mt-10">
                <p className="font-semibold font_regular text-orange-600">Here's what you get</p>
                <MdOutlineArrowDownward className="text-orange-600 h-full"/>
            </div>
    
            <div className="animate__animated animate__bounce animate__infinite intro-middot"></div>
        </div>
    
        {/* <!-- TYPE 1 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p1 fadeLeft1">01</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp">Personalized Guidance</h2>
                <p className="fadeInUp">Benefit from thrice-weekly video calls with me, offering tailored support, feedback, and brainstorming sessions to refine your project ideas.</p>
            </div>
            <div className="section-middot"></div>
        </div>
        
        {/* <!-- TYPE 2 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp">Convenient Access</h2>
                <p className="fadeInUp">Missed a session? No worries. All meetings are recorded, allowing you to catch up at your own pace and stay on track with your portfolio development.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p2 fadeRight">02</p>
            </div>
            <div className="section-middot"></div>
        </div>
        
        {/* <!-- TYPE 1 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p3 fadeLeft">03</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp">Career Clarity</h2>
                <p className="fadeInUp">Gain insights into various data roles and industries through personalized consultations, helping you define your professional path with confidence.</p>
            </div>
            <div className="section-middot"></div>
        </div>
    
        {/* <!-- TYPE 2 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp">Curated Project Deck</h2>
                <p className="fadeInUp">Receive a curated selection of projects aligned with your career goals, ensuring your portfolio showcases your skills effectively.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p4 fadeRight">04</p>
            </div>
            <div className="section-middot"></div>
        </div>
        
        {/* <!-- TYPE 1 --> */}
        <div className="reason-section">
            <div className="reason-section1">
                <p className="reason-section-p5 fadeLeft">05</p>
            </div>
            <div className="reason-section2">
                <h2 className="fadeInUp">Expert Documentation Support</h2>
                <p className="fadeInUp">Learn how to craft compelling project narratives that leave a lasting impression on potential employers.</p>
            </div>
            <div className="section-middot"></div>
        </div>
    
        {/* <!-- TYPE 2 --> */}
        <div className="reason-section section2">
            <div className="reason-section3">
                <h2 className="fadeInUp">Professional Website Development</h2>
                <p className="fadeInUp">Impress with a visually stunning portfolio website, guided by expert assistance to showcase your projects with impact.</p>
            </div>
            <div className="reason-section4">
                <p className="reason-section-p4 fadeRight">06</p>
            </div>
            <div className="section-middot"></div>
        </div>
    
        <div className="w-full h-[50vh] lg:h-[80vh]">
          <div className="w-4/5 mx-auto h-full flex flex-col items-start justify-center gap-y-3 font_regular">
            <p className="text-orange-600 font-semibold text-xl lg:text-4xl">What's next?</p>
            <p className="font-light text-6xl lg:text-8xl leading-[5rem] lg:leading-[8rem]"><Link to={'/contact'} className="underline decoration-dotted decoration-orange-600 decoration-2 underline-offset-[0.8rem]">Secure</Link> a spot now!</p>
          </div>
        </div>
    
        {/* FOOTER */}
        <Footer />
    </div>
    )
}

export default WorkshopPage