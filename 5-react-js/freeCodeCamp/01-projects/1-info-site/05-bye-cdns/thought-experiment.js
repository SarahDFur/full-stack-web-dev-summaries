import React from "react"

/**
Challenge 6: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const root = (
    <div>
        <h1>hello</h1>
        <p>a</p>
        <p>b</p>
        <p>c</p>
    </div>
)
document.getElementById("root").append(root)

// [object Object] is shown on the screen - string representation of obj. in js
//______________________________________________________________________________________________
const page = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

document.getElementById("root").append(JSON.stringify(page))
/*
{
    "type":"div",
    "key":null,
    "ref":null,
    "props":
    {
        "children":
        [
            {
                "type":"h1",
                "key":null,
                "ref":null,
                "props":
                {
                    "children":"My awesome website in React"
                },
                "_owner":null,
                "_store":{}
            },
            {
                "type":"h3",
                "key":null,
                "ref":null,
                "props":
                {
                    "children":"Reasons I love React"
                },
                "_owner":null,
                "_store":{}
            },
            {
                "type":"ol",
                "key":null,
                "ref":null,
                "props":
                {
                    "children":
                    [
                        {
                            "type":"li",
                            "key":null,
                            "ref":null,
                            "props":
                            {
                                "children":"It's composable"
                            },
                            "_owner":null,
                            "_store":{}
                        },
                        {
                            "type":"li",
                            "key":null,
                            "ref":null,
                            "props":
                            {
                                "children":"It's declarative"
                            },
                            "_owner":null,
                            "_store":{}
                        },
                        {
                            "type":"li",
                            "key":null,
                            "ref":null,
                            "props":
                            {
                                "children":"It's a hireable skill"
                            },
                            "_owner":null,
                            "_store":{}
                        },
                        {
                            "type":"li",
                            "key":null,
                            "ref":null,
                            "props":
                            {
                                "children":"It's actively maintained by skilled people"
                            },
                            "_owner":null,
                            "_store":{}
                        }
                    ]
                },
                "_owner":null,
                "_store":{}
            }
        ]
    },
    "_owner":null,
    "_store":{}
}
*/
//____________________________________________________________________________________________
import React from "react"
import ReactDOM from "react-dom"
/**
Challenge 7: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const p = (
    <div>
        <h1>My awesome website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(p, document.getElementById("root"))