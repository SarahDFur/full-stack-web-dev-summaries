import React from "react"
import ReactDOM from "react-dom"
const nav = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById("root"))

// doing this in React v18:
import React from "react"
import ReactDOM from "react-dom/client"

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// ReactDOM.render(navbar, document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// OR:

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)