## Context, UseContext
---
***Step1: Create the context:***
***Step2: Create the Provider:***
1. Create a Provider component: This will wrap the components that need access to the context.
2. ***Define state*** (if needed): Use useState to manage the state that you want to share across components.
3. ***Provide the context value:*** Use the Provider component created by the context and pass the value that will be accessible to consuming components.
***Step3: Wrap the App with the Provider***


> ### context.js
```jsx
import React, { createContext, useState } from 'react';
// Create the context
const userContext = createContext();
export default userContext
```

> ### Provider.js
```jsx
import React, {useState } from "react";
import context from "./context";

const UserContextProvider = ({children}) =>{
        
    const [uName, setuName] = useState("Dharmendra")  
  
    let changeName =()=>{   //Function called on button click to change name  
    setuName("NameChanged")
    }
        return (
            <context.Provider value={{uName, setuName, changeName}}>
                {children}
            </context.Provider>
        )
}
export default UserContextProvider
```

> ### App.js
```jsx
import React from 'react'
import UserContextProvider from "./components/context/Provider";
import Nav from './components/Nav'

function App() {
  return (
    
    <UserContextProvider>
<Nav></Nav>
    </UserContextProvider>
  )
}
export default App
```

```jsx
import React, {useContext} from 'react'
import userContext from "./context/context";

function Nav() {
    const value = useContext(userContext);
        console.log(value.uName);

  return (
    <div>
    <p>{value.uName}</p>
    <button onClick={value.changeName}></button>
    </div>
  )
}
export default Nav
```