## Promises




```javascript
const promis = new Promise(function(resolve, reject){
    fetch("https://randomuser.me/api")
    .then((blob)=> blob.json())
    .then((userData=>{

        if(userData.results[0].gender==="male"){
            resolve()
        }
        else{
            reject()
        }
    }))
})

promis
.then(()=>{
    console.log("user is Male");
})
.catch(()=>{
    console.log("User is female");
})

```