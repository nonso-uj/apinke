import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const PortfolioPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  
    const projects = [
        {
            title: "Candy Sales & Profitability Analysis Report",
            category: "MEDIUM",
            year: "2024",
            bg: "bg-[#A6AEBF]",
            image: "/images/1_ZU4xzpu5Lb8xrQmcS_vQtQ.webp",
            link: "https://medium.com/@THEAPINKE/sql-query-corner-candy-sales-profitability-analysis-report-ebf60a61460b",
        },
        {
            title: "Netflix Dataset Analysis Project",
            category: "MEDIUM",
            year: "2024",
            bg: "bg-[#D0E8C5]",
            image: "/images/1_C6F92jgFSqF1qIRUzOljpQ.webp",
            link: "https://medium.com/@THEAPINKE/sql-query-corner-netflix-dataset-analysis-project-fb678a256043",
        },
        {
            title: "Was barbie really that good?",
            category: "MEDIUM",
            year: "2023",
            bg: "bg-[#C4DAD2]",
            image: "/images/PROJECT1LONG.jpg",
            link: "https://medium.com/@THEAPINKE/was-barbie-really-that-good-45d58ffb417c",
        },
        {
            title: "Using sql to analyze the goodreads dataset",
            category: "MEDIUM",
            year: "2023",
            bg: "bg-[#A6AEBF]",
            image: "/images/library.webp",
            link: "https://medium.com/@THEAPINKE/using-sql-to-analyze-the-books-dataset-13fffc3d3939",
        },
        {
            title: "HR analytics project with power bi",
            category: "MEDIUM",
            year: "2023",
            bg: "bg-[#C5D3E8]",
            image: "/images/PROJECT3.webp",
            link: "https://medium.com/@THEAPINKE/hr-analytics-project-with-power-bi-67e73869a63e",
        },
        {
            title: "Education's Elite: Using Python to Analyze Universities Globally",
            category: "KAGGLE",
            year: "2023",
            bg: "bg-[#98D4BB]",
            image: "/images/University-students-in-Africa.jpg",
            link: "https://www.kaggle.com/code/afolabiini/education-s-elite-analyzing-universities-globally",
        },
    ];

return (
<div className="container-div box-border z-20  w-full overflow-hidden bg-[#e7e2dc]">
    <Navbar />
    
    <div className="w-full flex flex-row items-center justify-between py-10 lg:py-24">
        <div className="w-full flex flex-row items-center justify-center">
        <p className="w-11/12 lg:w-2/3 text-[2.6rem] lg:text-7xl font_regular font-medium py-24">Transforming Data into Insightful Stories</p>
        </div>
    </div>

    <div className="w-full">
        <div className="w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 auto-rows-auto justify-between items-start gap-y-16 lg:gap-y-28 gap-x-20">
            {projects.map((work, i) => (
                <div key={i} className={`w-full h-[90vh] flex flex-col items-start justify-between gap-y-10 p-5 lg:p-10 rounded-lg ${work.bg}`}>
                    <div className="grow w-full flex flex-col justify-start items-start gap-y-3">
                        <p className="w-full flex flex-row items-center justify-between uppercase font-regular text-xs">
                            <span>{work.category}</span> <span>{work.year}</span>
                        </p>

                        <p className="font_black text-3xl lg:text-4xl font-bold">{work.title}</p>
                        
                        <Link to={work.link} target="_blank" className="inline-block h-full w-fit">
                            <p className="w-full font_regular text-base font-regular uppercase flex flex-row justify-start items-center gap-x-5 duration-500 hover:text-lg hover:gap-x-8">Go there <FaArrowRightLong size={25} /></p>
                        </Link>
                    </div>

                    <div className="shrink h-full max-h-[60vh] w-full overflow-hidden">
                        <img src={work.image} className="h-full w-full object-cover object-center rounded-lg duration-500 hover:scale-125 hover:rounded-xl" alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>

    {/* FOOTER */}
    <Footer />
</div>
)
}

export default PortfolioPage