import React from "react";
import Home from "../../components/home/home";
import AboutSection from "../../components/about/aboutussection";
import PillarsSection from "../../components/3pillars/3pillars";
import Footer from "../../components/footer/footer";
import OurClients from "../../components/OurClients/ourclients";
import HighlightedWork from "../../components/Highlightedworks/Highlightedworks";

const Homepage = () => {
    return (
        <div style={{overflow:"hidden"}}>
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
            <OurClients />
        </div>
        <div>
            <Footer />
        </div>
        </div>
    )
}
export default Homepage;