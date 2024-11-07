import React from "react";
import { Link } from "react-router-dom";
import Home from "../../components/home/home";
import AboutSection from "../../components/about/aboutussection";
import PillarsSection from "../../components/3pillars/3pillars";
import Footer from "../../components/footer/footer";
import HighlightedWork from "../../components/Highlightedworks/Highlightedworks";

const Homepage = () => {
    return (
        <>
        <div>
            <Home />
        </div>
        <div>
           <AboutSection />
        </div>
        <div>
            <PillarsSection />
        </div>
        <div>
            <HighlightedWork />
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}
export default Homepage;