// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX
ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"))

// _________________________________________________________________________________________
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)

const element = <h1 className="header">This is JSX</h1>
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: 
    {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */
// JSX
ReactDOM.render(element, document.getElementById("root"))

// _________________________________________________________________________________________
// only one element can be rendered
// to insert more than 1 element (that are sibling elements)
// we'll wrap the sibling elements with a parent element
// for example:
ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)
// _________________________________________________________________________________________
// we can save an entire section in an element
// for example:
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)    
/* Page is a JS object:
{
    type: "div", 
    key: null, 
    ref: null, 
    props: 
    {
        children: 
        [
            {
                type: "h1", 
                key: null, 
                ref: null, 
                props: 
                {
                    className: "header", 
                    children: "This is JSX"
                }, 
                _owner: null, 
                _store: {}
            }, 
            {
                type: "p", 
                key: null, 
                ref: null, 
                props: 
                {
                    children: "This is a paragraph"
                }, 
                _owner: null, 
                _store: {}
            }
        ]
    }, 
    _owner: null, 
    _store: {}
}
*/
ReactDOM.render(
    page,
    document.getElementById("root")
)
// _________________________________________________________________________________________
/* 
Challenge 5: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const nav = (
    <nav>
        <h1>website</h1>
        <ul>
            <li>Pricings</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.querySelector("#root"))