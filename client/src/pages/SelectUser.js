import React from "react";
import '../css/SelectUser.css';

export default function SelectUser() {
    return (
        <>
        <div className="grid grid-cols-8">
            <div className="col-span-3">

            </div>
            <div className="col-span-2">
            <div className="title">
            <h1>Signing</h1>
        </div>
        <div  >
            <h1 className="clientLogin ">Client Login</h1>
        </div>
        <div className="freelincerLogin">
            <h1>Freelancer Login</h1>
        </div>
        <div className="dont_have_account">
            <h1>Don’t have an account? <span>Sign Up</span></h1>
        </div>
            </div>
            <div className="col-span-3">

            </div>
            </div>
        </>
    )
    }