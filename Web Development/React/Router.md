# Router
**Main.jsx**
1. First install react router.
2. Import "BrowserRouter" in Main.jsx and Wrap <App /> with BrowserRouter
 ```jsx
//  Main.jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

 ```

 **App.jsx**
 1. First import Routes, Route from "react-router-dom" in App.jsx.
2. Return All components which should be in all page, like NavBar. 
3. Inside "Routes" by help of "Route" you can customize the path of componets. 
``` jsx
// App.jsx
import About from './components/About'
import Home from './components/Home'
import Service from './components'

import {Link, Routes, Route} from "react-router-dom";
import EveryWhere from './EveryWhere'

function App() {
  return (
    <>
<EveryWhere></EveryWhere>
<nav>
  <Link to="/">Home</Link>
  <Link to="/service">Service</Link>
  <Link to="/about">about</Link>
</nav>

<Routes>
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/service' element={<Service></Service>}></Route>
  <Route path='/about' element={<About></About>}></Route>
</Routes>
    </>
  )
}
``` 
* **In App.jsx component "EveryWhere" and "nav" will be shown in every page**
*  **And inside "Routes", Route takes a path and an element to show it when clicked on it**

