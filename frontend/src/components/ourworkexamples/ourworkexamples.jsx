import React from "react";
import Masonry from "react-masonry-css";
import "./ourworkexamples.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image10 from "../../assets/image10.jpg";
import Navbar from "../navbar/Navbar";

const imageData = [
    { src: image1, pdf: "assets/file1.pdf" },
    { src: image2, pdf: "assets/file2.pdf" },
    { src: image3, pdf: "assets/file3.pdf" },
    { src: image4, pdf: "assets/file4.pdf" },
    { src: image5, pdf: "assets/file5.pdf" },
    { src: image6, pdf: "assets/file6.pdf" },
    { src: image7, pdf: "assets/file7.pdf" },
    { src: image8, pdf: "assets/file8.pdf" },
    { src: image9, pdf: "assets/file9.pdf" },
    { src: image10, pdf: "assets/file10.pdf" },
    { src: image1, pdf: "assets/file11.pdf" },
    { src: image2, pdf: "assets/file12.pdf" },
    { src: image3, pdf: "assets/file13.pdf" },
    { src: image4, pdf: "assets/file14.pdf" },
    { src: image5, pdf: "assets/file15.pdf" },
];

const OurWorkexamples = () => {
    const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <>
        <div className="navbar">
        <Navbar />
        </div>
        <div className="our-work-container">
            <h1 className="heading">Our Work</h1> 
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {imageData.map((image, index) => (
                    <div key={index} className="image-item">
                        <a href={image.pdf} target="_blank" rel="noopener noreferrer">
                            <img src={image.src} alt={`Work ${index + 1}`} />
                        </a>
                    </div>
                ))}
            </Masonry>
        </div>
        </>
    );
};

export default OurWorkexamples;

