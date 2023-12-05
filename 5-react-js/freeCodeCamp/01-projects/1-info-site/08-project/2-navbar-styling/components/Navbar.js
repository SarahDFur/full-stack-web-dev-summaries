import React from "react"
import logo from "../react-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo}/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

// Alternative: Using classes:
export default function Navbar() {
    return (
     <nav>
         <img src="../images/react-icon-small.png" className="nav--icon"/>
         <h3 className="nav--logo_text">ReactFacts</h3>
         <h4 className="nav--title">React Course - Project 1</h4>
     </nav>
 )
}