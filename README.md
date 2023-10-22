# 1. What is NPM?
It is a package manager for JavaScript, primarily used to manage and distribute packages or libraries of code. NPM is an essential tool in the Node.js ecosystem, and it simplifies the process of installing, updating, and managing third-party packages and dependencies in Node.
applications.

# 2. What is Parcel/Webpack? Why do we need it?
Parcel and Webpack are essential tools in modern web development for optimizing, organizing, and automating the build process. They make it easier to create efficient and performant web applications by managing assets, dependencies, and code transformations. The choice between Parcel and Webpack often depends on the specific requirements and preferences of a project and its developers.

# 3. What is '.parcel-cache'?
The .parcel-cache directory is a directory created by the Parcel bundler tool when you use Parcel to build or bundle a web application. It is used to cache various assets, dependencies, and build artifacts during the development and build process. This caching mechanism is meant to speed up the subsequent build processes and reduce the time required to bundle your application.
The .parcel-cache directory is usually generated in the root directory of your project when you run Parcel. While it's primarily used during development, it can also be beneficial when rebuilding your project in a production environment, as it can help improve the overall build performance.
It's important to note that the .parcel-cache directory can grow in size over time as you make changes to your project, so it's a good practice to periodically clean or prune the cache to reclaim disk space, especially if it becomes excessively large. You can do this using the appropriate Parcel command or by manually deleting the cache directory.

# 4. What is 'npx'?
npx is a package runner tool that comes with npm, the Node Package Manager. It is a command-line utility that is used to execute Node.js packages directly from the npm registry or from a specified local path. The primary purpose of npx is to simplify the process of running packages, scripts, and executables without the need to install them globally or manage them in your project's dependencies.

# 5. What is the difference between 'dependencies' and 'devDependencies'?
dependencies are essential packages that your application relies on to function in a production environment, while devDependencies are packages that support your development and testing workflows but are not necessary for the production version of your application. This separation is helpful for reducing the size of the production bundle and avoiding potential conflicts or security issues related to development tools and libraries.

# 6. What is Tree Shaking?
Tree shaking is a technique used in modern JavaScript development, especially in the context of bundling and optimizing code, to eliminate unused or "dead" code from the final production bundle. The term "tree shaking" comes from the concept of shaking a tree to make dead leaves fall, leaving only the live, essential parts of the tree. It helps reduce the size of the JavaScript bundle and improve the performance of web applications.
Tree shaking is particularly useful for reducing the size of JavaScript bundles, which is crucial for web performance. Smaller bundles download faster, parse quicker, and execute more efficiently in the browser. It also helps in avoiding potential issues related to outdated or unused dependencies.
Tree shaking is made possible by the static and predictable nature of ES6 modules. It's essential to ensure that your codebase is organized into modular components and that you use tools that support tree shaking, as not all JavaScript bundlers or transpilers provide this feature. When using tools like Webpack, make sure that your configuration is set up to enable tree shaking, and consider using code minification and optimization techniques in conjunction with tree shaking to further reduce the bundle size.

# 7. What is Hot Module Replacement?
Hot Module Replacement (HMR) is a development feature in many modern JavaScript module bundlers and development servers, such as Webpack and Parcel. HMR is designed to improve the developer experience during the development of web applications by allowing for the real-time replacement of modules without the need for a full page refresh. It's also known as "Hot Reloading."
To implement Hot Module Replacement, you typically need a compatible development server (e.g., webpack-dev-server) and a configuration that enables HMR. While it's a powerful tool for development, it's important to note that HMR is intended for use in development environments and should not be used in production builds, as the focus is on developer productivity and not necessarily on optimized production performance.

# 8. List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
5 superpowers of Parcel:
- HMR (Hot Module Replacement) : adds, or removes modules while an application is running, without a full reload.
- File watcher algorithm : File Watchers monitor directories on the file system and perform specific actions when desired files appear.
- Minification : Minification is the process of minimizing code and markup in your web pages and script files.
- Image optimization
- Caching while development

# 9. What is .gitignore? What should we add and not add into it?
The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository. The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore. package-lock.json should not add into your .gitignore file.

The entries in this file can also follow a matching pattern.
'*' is used as a wildcard match
'/' is used to ignore pathnames relative to the .gitignore file
'#' is used to add comments to a .gitignore file

# 10. What is the difference between package.json and package-lock.json?
### package.json:
This file is mandatory for every project
It contains basic information about the project
Application name/version/scripts

### package-lock.json:
This file is automatically generated for those operations where npm modifies either the node_module tree or package-json.
It is generated after an npm install
It allows future devs & automated systems to download the same dependencies as the project.
it also allows to go back to the past version of the dependencies without actual ‘committing the node_modules folder.
It records the same version of the installed packages which allows to reinstall them. Future installs will be capable of building identical description tree.

# 11. Why should I not modify package-lock.json?
package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

# 12. What is node_modules ? Is it a good idea to push that on git?
node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). Don't push node_modulesin github because it contains lots of files(more than 100 MB), it will cost you memory space.

# 13. What is the dist folder?
The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

# 14. What is browserslist?
Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
