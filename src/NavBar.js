import React from "react";
import './NavBar.css';

function AButton({someText}) {
    return(
    <button>{someText}</button>
    );
};

export default function NavBar () {
    return(
        <div>
            <div className = "Heading">
                <h1 id = "Title">Billy Noble</h1>
                <h2>Graduate Software Developer</h2>
            </div>
            <div className="NavBar">
                <AButton someText={"About Me"}/>
                <AButton someText={"Projects"}/>
                <AButton someText={"Contact Me"}/>
            </div>
        </div>
    );
};