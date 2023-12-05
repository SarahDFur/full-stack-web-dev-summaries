import React from "react"
import ReactDOM from "react-dom"

// (↓) not a lot of flexibility:
const page = (
    <div>
        <img src="./react-logo.png" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))

// (↓) custom components:
// ---------------------------------------------------------------------------------------
// 1: 90% of the way to create a custom case
function temporaryName() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(temporaryName(), document.getElementById("root"))

// ---------------------------------------------------------------------------------------

// 2: 
//To make a custom component we need to:
// a. use pascal-case: funcEx() --> FuncEx()
// b. send it in the render function as an html element: <[name of function]/> 
function TemporaryName() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<TemporaryName/>, document.getElementById("root"))
// ---------------------------------------------------------------------------------------
/**
Challenge 9: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
import React from "react"
import ReactDOM from "react-dom"

function PageElement() {
    return (
        <div>
            <ol>
                <li>Learning is fun</li>
                <li>Styling websites is fun</li>
                <li>Format is cute</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<PageElement/>, document.getElementById("root"))
// ---------------------------------------------------------------------------------------
/**
Challenge 9: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

*/
import React from "react"
import ReactDOM from "react-dom"

// the div element can also be an empty element like this: <>[code]</>
function Page() {
    return (
        <div> 
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
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