## Callback
Callback is a function which accepts functions when it's called.

```javascript
let doSomeAsyncTask =(url, callback)=>{
fetch(url)
.then(blob => blob.json())
.then((res)=>{
   callback(res)
})
}


doSomeAsyncTask("https://randomuser.me/api", function(res){
console.log(res.results[0].gender);
})
```

here do something function has a url, and a **argument**. The argument is a function which prints the res when data receives in res.  The function called in "doSomething" only runs the "callback(res)" when the data is received in res successfully.