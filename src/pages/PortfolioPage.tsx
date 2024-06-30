import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const PortfolioPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  
    const projects = [
        {
            title: "Was barbie really that good?",
            category: "MEDIUM",
            year: "2023",
            bg: "bg-black",
            image: "/images/PROJECT1LONG.jpg",
            link: "https://medium.com/@THEAPINKE/was-barbie-really-that-good-45d58ffb417c",
        },
        {
            title: "Using sql to analyze the goodreads dataset",
            category: "MEDIUM",
            year: "2023",
            bg: "bg-neutral-700",
            image: "/images/library.webp",
            link: "https://medium.com/@THEAPINKE/using-sql-to-analyze-the-books-dataset-13fffc3d3939",
        },
        {
            title: "HR analytics project with power bi",
            category: "MEDIUM",
            year: "2023",
            bg: "bg-gray-300",
            image: "/images/PROJECT3.webp",
            link: "https://medium.com/@THEAPINKE/hr-analytics-project-with-power-bi-67e73869a63e",
        },
        {
            title: "Education's Elite: Using Python to Analyze Universities Globally",
            category: "KAGGLE",
            year: "2023",
            bg: "bg-black",
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
        <div className="w-11/12 lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 auto-rows-auto justify-between items-start gap-y-28 gap-x-20">
            {projects.map((work, i) => (
                <Link to={work.link} className="h-full w-full">
                    <div key={i} className="w-full h-full flex flex-col items-start justify-between">
                        <div className={`works w-full h-[50vh] lg:h-[70vh] bg-neutral-500 flex flex-row items-center justify-center px-10 ${work.bg}`}>
                            <img src={work.image} className="w-full h-4/5 lg:h-80 object-cover object-center duration-500" alt="" />
                        </div>

                        <div className="w-full flex flex-col items-start justify-end mt-4">
                            <div className="w-full">
                                <p className="text-3xl font_regular font-medium">{work.title}</p>
                            </div>

                            <hr className="w-full my-4 border-solid border-b border-neutral-400" />

                            <div className="w-full flex flex-row items-end justify-between font_regular text-sm font-medium">
                                <p>{work.category}</p>
                                <p>{work.year}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>

    {/* FOOTER */}
    <Footer />
</div>
)
}

export default PortfolioPage