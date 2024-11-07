import React from "react";
import ContactUs from "../../components/carrier/carrier.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import CarrierUs from "../../components/carrier/carrier.jsx";

const Carrier = () =>{
    return(
        <>
        <div>
            <Navbar />
        </div>
        <div>
            <CarrierUs />
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}
export default Carrier;