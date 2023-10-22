import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="title">
        Hello, this is a title
    </h1>
);

const HeadingComponent  = () => (
    <div className="container">
        {/* three ways of using component inside jsx */}
        {Title()}
        {<Title />}
        {<Title></Title>}
        <h2>Day 3 of learning react</h2>
    </div>
)

const heading = React.createElement("h1", {}, "heading-1");

// this is jsx which returns react element
const jsxHeading = <h1 id="jsxId">heading-1 using jsx</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
