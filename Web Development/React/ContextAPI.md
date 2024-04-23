### ContextAPI

1. wrap the "App" component with created context in main.jsx
2. Create a **context file** and create a **context** using create Context and **export it** above function in context.jsx
3. **Receive props in Context** Function in context file
4. **Make sates** in Context function.
5. in context function return: 
```jsx
  return <userData.Provider value={name}>
  {props.children}
  </userData.Provider>
```

1. Now, suppose I want use created state in **User** file. 
2. **Import created Context** from Context File. 
3. Inside "User" function:
```jsx
 const user = useContext(userData)
 ```

**Step 1:**
 Main.js
 ```jsx
//  import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Context from './components/context/Context.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(  
<Context>
    <App />
</Context>
// )
 ```

 **Step 2:**
 Context.jsx
 ```jsx
 import React, { createContext, useState } from 'react'

export const userData = createContext()

function Context(props) {
const [name, setName] = useState("John Doe")

  return <userData.Provider value={name}>
  {props.children}
  </userData.Provider>
}

export default Context
```

**Step 3:**
Using state in file:
```jsx
import React from 'react'
import { useContext } from 'react'
import { userData } from './context/Context'

function User() {
  const user = useContext(userData)

console.log(user);

  return (
    <div>{user}</div>
  )
}
export default User
```

