
ReactDOM.render(<h1>Hello, everyone!</h1>, documnet.getElementById("root"));
// challenge 1:
ReactDOM.render(<h1>Hello, everyone!</h1>, documnet.querySelector("#root"));

// challenge 2:
// Try to write that 1-liner of React code again! This time,
// see if you can figure out how to render an <ul> with 2+ <li>s inside*/</li>

ReactDOM.render(
    <ul>
        <li>
            <p>Home</p>
        </li>
        <li>
            <h2>call</h2>
        </li>
    </ul>, 
    document.querySelector("root")
);

