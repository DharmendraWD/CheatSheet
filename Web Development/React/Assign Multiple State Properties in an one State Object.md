### 1. Defining an object state with properties

```javascript
const [form, setForm] = useState({name:"Jain", phone:"98", password:"fg"})
```
>form is an state object whose properties can be changed using:
```javascript
	  setForm({ ...form, name: "Dharmendra" })	
```


#### Suppose you have a component named from which is being rendered in App.js. It contains 3 input box. Now, what i want is when i type in email box then only email should be filled, when i write in name then only name should be filled and so on.

```javascript
const [form, setForm] = useState({name:"Jain", phone:"98", password:"fg"})
```

## Form.jsx
```jsx
export default function NavBar({ form, setForm }) {
   
    let handleChange = (e) => {
	 const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    return (
        <div>

            Hi my name is {myName}
            <button onClick={incrementCount}>Click me {users.count}</button>

            <input type="text" name='name' value={form.name} onChange={handleChange} />
            <input type="text" name='phone' value={form.phone} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={change} />
        </div>
    )
}
```