/*
    1. React Component files will start with a capital letter
    2. import React from "react" in the component's file
    3. export the component by adding the word "export" 
       before the function. 
       - Adding the word default will let you import it
         without calling it (the function) explicitly
    4. use the format: import [Component name] from "[file driectory]"
*/
import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

/**
Challenge 12: move the Footer and MainContent components
into their own files.
*/
// Page → App: in big projects
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