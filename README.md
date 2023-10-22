# 1. What is JSX?
JSX stands for JavaScript XML. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX allows you to write HTML-like code within your JavaScript files.
JSX has become popular in the React ecosystem, but it is not limited to React. Other JavaScript frameworks, such as Vue.js, also support JSX-like syntax for building user interfaces. Overall, JSX provides a more declarative and visually intuitive way to describe the structure and behavior of web components in modern JavaScript applications.

# 2. Superpowers of JSX.
Combining JavaScript and Markup
Component-Based Architecture
Declarative Syntax
Custom Components
Conditional Rendering
Event Handling
Props and State

# 3. Role of type attribute in script tag? What options can I use there?
The type attribute specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is “text/javascript”.
type attribute can be of the following types:
- text/javascript : It is the basic standard of writing javascript code inside the script tag.
Ex: <script type="text/javascript"></script>
- text/ecmascript : this value indicates that the script is following the EcmaScript standards.
- module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- text/babel : This value indicates that the script is a babel type and required bable to transpile it.
- text/typescript: As the name suggest the script is written in TypeScript.
