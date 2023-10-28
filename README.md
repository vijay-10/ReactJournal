# 1. Explore all the ways of writing CSS.
- Write styles in one stylesheet `index.css`
- `SASS` or `SCSS`(Syntactically Awesome Style Sheets), not recommended for large-scale applications.
- `Styled components` (very common and very popular)
- `CSS Modules`
- `Material UI` (MUI)
- `Bootstrap`
- `Chakra UI`
- `Ant Design`
- `TailwindCSS` (which we will be using the most)

# 2. How do we configure tailwindcss?
[I] Create your project
```
> mkdir my-project
> cd my-project
> npm init -y
> npm install -D parcel
> mkdir src
> touch src/index.html
```
[II] Install Tailwind CSS
```
> npm install -D tailwindcss postcss
> npx tailwindcss init
```
[III] Configure PostCSS

`.postcssrc`
```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
[IV] Configure your template paths

`tailwind.config.js`
```
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
[V] Add the Tailwind directives to your CSS

`index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# 3.In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)
In a Tailwind CSS configuration file (usually named `tailwind.config.js`), you can define various configuration options to customize the behavior and appearance of your Tailwind CSS setup. Here's what each of the keys in the configuration file means:

- **`content`**:
   - This key is used to specify the source files that Tailwind CSS should analyze to generate the CSS classes. You define which files or patterns should be scanned to find the utility classes used in your project. By default, it looks for HTML, Vue, and Blade files.
   - Example:
     ```js
     content: [
       "./src/**/*.html",
       "./src/**/*.vue",
       "./src/**/*.jsx",
       // ... other file patterns
     ]
     ```

- **`theme`**:
   - This key is where you can customize the default design system of Tailwind CSS. You can define colors, fonts, spacing, breakpoints, and more. It allows you to modify or extend the default values to fit your project's design requirements.
   - Example:
     ```js
     theme: {
       extend: {
         colors: {
           primary: "#FF5733",
         },
         fontFamily: {
           sans: ["Nunito", ...],
         },
         // ... other theme settings
       },
     }
     ```

- **`extend`**:
   - The `extend` key is used to add additional CSS classes and styles that are not included in the default Tailwind CSS but are specific to your project. You can extend the utility classes and add new ones to suit your design needs.
   - Example:
     ```js
     extend: {
       spacing: {
         "80": "20rem",
       },
       boxShadow: {
         "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
       },
       // ... other extended styles
     }
     ```

- **`plugins`**:
   - The `plugins` key allows you to include third-party or custom plugins that can provide additional utility classes or functionality. Tailwind CSS has an ecosystem of plugins created by the community, and you can configure them here.
   - Example:
     ```js
     plugins: [
       require("@tailwindcss/forms"),
       require("@tailwindcss/typography"),
       // ... other plugins
     ]
     ```

These keys allow you to customize various aspects of your Tailwind CSS project, from the source files you want to include in your build to the styles and utility classes you want to define or extend. By modifying these configuration options, you can tailor Tailwind CSS to match your specific project requirements.

# 4. Why do we have .postcssrc file?
The `.postcssrc` file, also known as `postcss.config.js`, is a configuration file used to set up and customize `PostCSS`, a tool for transforming CSS with JavaScript plugins. It is commonly used in modern front-end development, especially when working with tools like `webpack`, `Parcel`, or other build systems.