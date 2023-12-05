import React from "react"
import logo from "../react-logo.png"

export default function Navbar() {
    // still need to insert the logo
    return (
        <nav>
            <img src={logo}/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}