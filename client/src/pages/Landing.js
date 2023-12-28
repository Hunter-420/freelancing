import React from "react";
import LandingSVG from '../img/svg/landing.svg';
import '../css/Landing.css';
import Navbar from "../components/NavBar";

export default function Landing() {
    return (
        <div>
            <div className="grid grid-cols-8">
                <div className="col-span-4 flex items-center">
                    <h1 className="logo text-4xl font-bold ml-5 pl-5 mt-5">Freelancer</h1>
                </div>
                <div className="col-span-4 flex justify-end ">
                    <Navbar />
                </div>
            </div>

            {/* contents */}
            <div className="grid grid-cols-8">
                <div className="col-span-3">
                    <h1 className="title_man text-4xl">Experience the future of freelance payments with us!</h1>
                    <p className="paragraph">Our platform leverages cutting-edge blockchain technology to revolutionize how freelancers and clients engage. Say goodbye to payment hassles and hello to a simple, secure, and efficient system. No platform fees, no commissions, no hassle. </p>
                </div>
                <div className="col-span-5" style={{ position: 'relative' }}>
                    <img src={LandingSVG} alt="SVG Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    );
}
