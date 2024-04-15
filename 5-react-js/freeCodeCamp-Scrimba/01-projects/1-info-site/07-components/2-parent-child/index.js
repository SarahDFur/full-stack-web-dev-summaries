import React from "react"
import ReactDOM from "react-dom"

/**
Mini Challenge 10.1:
Move the `header` element from Page into 
its own component called "Header"
*/
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
        )
}
function Page() {

return (
    <div>
        <Header/>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    </div>
)
}

ReactDOM.render(<Page />, document.getElementById("root"))
// ----------------------------------------------------------------------------------------------
/**
Challenge 10.2: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    // The parent div does not change styling in the page so for now it is fine
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
