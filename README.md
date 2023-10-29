# 1. What is prop drilling?
Prop drilling, also known as "props drilling" or "component tree traversal," is a common issue that can occur in component-based systems, in React applications. It happens when you need to pass data from a top-level component down to a deeply nested child component through intermediary components in the component hierarchy.

Some of the issues associated with prop drilling include:
- `Readability and Maintainability`
- `Performance`
- `Refactoring Challenges`

To mitigate the challenges of prop drilling, there are several solutions available, including:
- `Context API`: React's Context API allows you to create a shared context that can be accessed by any component within the context, eliminating the need to pass props through intermediaries.
- `State Management Libraries`: Tools like `Redux`, `Mobx`, or `Recoil` provide centralized state management, reducing the need for prop drilling.
- `Component Composition`: Instead of drilling through components, you can compose components together to create more specialized components that have access to the necessary data.
- `Render Props and Higher-Order Components (HOCs)`: These patterns allow you to inject data and behavior directly into components without the need for prop drilling.

# 2. What is lifting the state up?
Lifting state up is a common pattern in React where you move the management of the component's state to a higher-level or parent component in the component hierarchy. This pattern is used to share and synchronize state between multiple child components.

The main idea behind lifting state up is to centralize the management of state data in a common ancestor component, making it the single source of truth for that piece of state. This can be particularly useful when you have multiple child components that need access to the same data or when you want to ensure consistency and data synchronization across components.

# 3. What are Context Provider and Context Consumer?
In React, the **Context API** provides a way to pass data or state down through the component tree without having to manually pass props at every level. It consists of two main components: the **Context Provider** and the **Context Consumer**.

**Context Provider:**
   - The Context Provider is a component that "provides" a context and makes its data accessible to any components that "consume" that context. It sets up the context and stores the data or state that you want to share.
   - To create a Context Provider, you typically use the `React.createContext` function to define a new context. You then wrap a portion of your component tree with this provider component, making the context and its data available to any child components.
   - The Context Provider component exposes a `value` prop, which you use to provide the data you want to share with the context. Child components that are Context Consumers can access this data.
   - Here's an example of how to create a Context Provider:

     ```jsx
     import React, { createContext, useState } from "react";

     // Create a context
     const MyContext = createContext();

     const MyContextProvider = ({ children }) => {
       const [data, setData] = useState("Hello from Context!");

       return (
         <MyContext.Provider value={{ data, setData }}>
           {children}
         </MyContext.Provider>
       );
     };
     ```

**Context Consumer:**
   - The Context Consumer is a component that "consumes" the data provided by the Context Provider. It allows components to access the shared data from the context without having to pass props explicitly.
   - To use a Context Consumer, you need to wrap the component you want to connect with the context using the `MyContext.Consumer` component or by using the `useContext` hook.
   - The `useContext` hook is a more modern and concise way to consume context in functional components, while the `MyContext.Consumer` component is used in class components.
   - Here's an example of how to use a Context Consumer using the `useContext` hook:

     ```jsx
     import React, { useContext } from "react";

     const MyComponent = () => {
       const { data, setData } = useContext(MyContext);

       return (
         <div>
           <p>{data}</p>
           <button onClick={() => setData("Updated data")}>Update Data</button>
         </div>
       );
     };
     ```

The Context API is particularly useful for managing global application state, sharing data, and avoiding prop drilling, especially when the data needs to be accessed by multiple components at different levels of the component tree. It provides a clean and efficient way to handle shared state in your React application.

# 4. If you don't pass a value to the provider, does it take the default value?
If you don't provide a value to a Context Provider, it does not automatically take a default value. Instead, the value for that context will be `undefined`.

In the following example:

```jsx
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  return (
    <MyContext.Provider>
      {children}
    </MyContext.Provider>
  );
};
```

In this case, if you don't provide a `value` prop when wrapping your components with `MyContextProvider`, the context's value will be `undefined`. For example, if you have a Context Consumer component:

```jsx
const MyComponent = () => {
  const contextValue = useContext(MyContext);

  // contextValue will be undefined if value is not provided by the Provider
  return <div>{contextValue}</div>;
};
```

If you want to provide a default value for the context, you should pass it explicitly as the `value` prop when rendering the Context Provider, like this:

```jsx
const MyContextProvider = ({ children }) => {
  const defaultValue = "Default Value";

  return (
    <MyContext.Provider value={defaultValue}>
      {children}
    </MyContext.Provider>
  );
};
```

Now, if you don't explicitly provide a `value` prop when wrapping components with `MyContextProvider`, the context's value will default to "Default Value" instead of being `undefined`.