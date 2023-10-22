# 1. What is Emmet?
Emmet is a popular web development tool that helps web developers and designers streamline their workflow by enabling them to write HTML and CSS code more quickly and efficiently.
It is a set of abbreviations and shortcuts that expand into HTML or CSS code when triggered.
It is a set of abbreviations and shortcuts that expand into HTML or CSS code when triggered.
Some key features of Emmet include:
Abbreviations- Ex: ul>li*3
Nesting - Ex: >
Repetition - Ex: div*4

# 2. Difference between library and framework?
libraries are more like collections of tools that you can use as needed, giving you control over your application's flow. Frameworks, on the other hand, provide a complete structure and flow for your application, dictating how your application should be organized and how various components should interact. The choice between using a library or a framework depends on the specific requirements of your project and the level of control and structure you need.

# 3. What is CDN? Why do we use it?
CDN stands for Content Delivery Network. It is a network of distributed servers located in various data centers around the world, and its primary purpose is to deliver web content, such as images, stylesheets, JavaScript files, videos, and other assets, to users based on their geographic location.
CDNs are used to enhance the speed, reliability, and scalability of web applications and websites. They do this by caching and delivering content from edge servers located in different regions, reducing latency, distributing traffic, and providing security features. CDNs have become an essential component of modern web development, especially for global applications that aim to provide a fast and consistent user experience to users all around the world.

# 4. Why is React known as React?
React is known as "React" because its core design philosophy is based on creating reactive, responsive, and declarative user interfaces. The library's name reflects its primary focus on efficiently handling changes and updates in the user interface in response to data and user interactions.

# 5. What is crossorigin in the script tag?
The crossorigin attribute in the <script> tag is used to control how a web page's scripts are fetched when they are loaded from a different origin (i.e., a different domain, protocol, or port) than the one serving the web page itself. This attribute is commonly used when dealing with content security and preventing cross-origin security issues, such as cross-site scripting (XSS) attacks.

# 6. What is the difference between React and ReactDOM?
React is the core library for building user interfaces, defining components, and managing their behavior, while ReactDOM is a specific package within the React ecosystem that deals with rendering React components to the browser's real DOM. When working with React to build web applications, you typically use both React and ReactDOM together to create, manage, and render your UI components.

# 7. What is the difference between react.development.js and react.production.js files via CDN?
React provides two main versions of its JavaScript files: react.development.js and react.production.js. These files serve different purposes and are intended for different stages of development and production. When you include these files via a CDN (Content Delivery Network), you can control whether you want to optimize for development or production.
The key difference between the two versions is the presence of development-related warnings and debugging information in the development version. These warnings are helpful during development but should not be present in a production environment for security and performance reasons.
In a production setting, it's recommended to use the production version of React to reduce the size of your application and optimize its performance. During development, it's helpful to use the development version to catch and address any issues early. Remember to switch to the production version when deploying your application for end-users to ensure the best performance and security.

# 8. What are async and defer?
a. normal script:
<script src=".........."></script>
When using normal scripts, while parsing the html file, when the parser is at the script tag, the HTML parsing is stopped and the script content is fetched and executed. After the fetching and execution of the script, HTML parsing is continued.
b. async script:
<script async src="........."></script>
While we use async attribute in the script tag, the fetching of the script content is done in an asynchronous manner (non-blocking) i.e., simultaneously while HTMl is being parsed. But once the script content is fetched, the HTML parsing is stopped and the execution of the script is done. After the script content is executed, only then the HTML parsing is continued.
c. defer script:
<script defer src="........."></script>
When we use defer attribute in the script tag, the fetching of the script content is done in the background while HTML is being parsed. But the execution of the script content is done only after HTML document has been fully parsed.
