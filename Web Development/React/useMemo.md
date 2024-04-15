# UseMemo

Whenever the state is changed the browser runs the jsx file everytime. 

*for Example:*
**Without useMemo**
```jsx
function App() {
  const [item, setItem] = useState(6)
  const [item, setItem] = useState(6)

function multiplyCountItem() {
    console.log("This function runs everytime when state changed!");
    return count * 4
}

  return (
    <>
      <div className="show">
        <h1>count is {count}</h1>
        <h1>item is {item}</h1>
        <h1>{multiplyCountItem}</h1>
      </div>

// increases the value of count by 1 
        <button onClick={() => setCount(count + 1)}>Update Count</button>
          <button onClick={() => setItem(item + 5)}>Update Item</button>

    </>
  )
}
```
In the above code everything works as expected when "Update Count" is clicked it will increase the count state by 1 and multiplyCountItem function will be called too to make multiply which is ok. **But the problem is, when "Update Item" is clicked the function 'multiply' will be executed too which is not good** there is no any need that the function should be executed on click of "update Item" although it runs. 

**==>The solution is we can use useMemo to prevent this**

**With useMemo**
*For example:*
```jsx
function App() {
  const [item, setItem] = useState(6)
  const [item, setItem] = useState(6)

const multiplyCountItem = useMemo(
    function multiplyCountItem() {
    console.log("This function runs everytime when state changed!");
    return count * 4
}, [count])

  return (
    <>
      <div className="show">
        <h1>count is {count}</h1>
        <h1>item is {item}</h1>
        <h1>{multiplyCountItem}</h1>
      </div>

// increases the value of count by 1 
        <button onClick={() => setCount(count + 1)}>Update Count</button>
          <button onClick={() => setItem(item + 5)}>Update Item</button>

    </>
  )
}
```

### just wrap the function inside useMemo
const useMemoFuncName = useMemo(

//wrap functio here

,[dependency])