import React from "react";
import '../css/Signing.css';
import SigningSVG from '../img/svg/Signing.svg';

export default function Signing() {
    return (
       <>
       <div  className="container w-833 h-737 mx-auto my-auto ">
        <h1 className="title">Signing</h1>
       </div>
       <div className="signing_svg">
       <img src={SigningSVG} alt="SVG Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
       </div>
       <div className="loginContainer">
                        <input type="text" placeholder="Username" className="user_name"/>
                        <input type="password" placeholder="password" className="password" />

                    </div>
       </>
    )
    }