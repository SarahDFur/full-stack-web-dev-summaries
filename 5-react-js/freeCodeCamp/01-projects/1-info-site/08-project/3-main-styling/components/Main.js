import React from "react"

export default function Main() {
    return (
        <div className="main">
            <h1>Fun facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}

// Alternative using classes ↓:
export default function Main() {
    return (
        <div className="main">
            <h1 className="main-title">Fun facts about React</h1>
            <ol className="main-lst">
                <li className="lst-i">Was first released in 2013</li>
                <li className="lst-i">Was originally created by Jordan Walke</li>
                <li className="lst-i">Has well over 100K stars on GitHub</li>
                <li className="lst-i">Is maintained by Facebook</li>
                <li className="lst-i">Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}