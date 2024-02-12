import React from "react";
import './AboutMe.css';

export default function AboutMe () {
    return(
        <div className = "About">
            <div className = "AboutHeader">
                <h1>About Me</h1>
            </div>
            <div className = "AboutBody">
                <p>Having spent 8 years working as a Structural Engineer, in 2022 I returned to University to study an MSc in Software Development at the University of Strathclyde.</p>
                <p>This course taught me the fundamentals of the software development lifecycle, methods of working, requirements gathering and the importance of prototyping. The course also introduced several technical aspects including object-oriented programming principles, introduction to databases and SQL and the importance of security when developing software.</p>
                <p>The course finished with a solo cross platform development project. I developed "StructuralAssistant" a mobile application for iOS and Android to assist structural engineers in carrying out beam analysis calculations. The application was written using React Native with Firebase providing authentication and data storage solutions.</p>
            </div>
        </div>
    );
};