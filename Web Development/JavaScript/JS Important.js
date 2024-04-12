

// Q1. Suppose if there is an parrent Element and inside it there are many 
// child and if you want to know on which child the mouse is clicked
parent.addEventListener('click', function(e){
    if(e.target.tagName=== "SPAN"){     //if clicked on "span" tag then 
        e.target.parentElement.remove();
    }
    else if(e.target.tagName=== "P"){   //if clicked on "P" tag then 
    e.target.backgroundColor='green'
    }   

    console.log(e.target)       //know on what element mouse clicked
})

// --------------------------------------------------------------------------------------

// Save data in browser
// Q2. Suppose there is a "mainDiv" div in which data is stored and if I 
// want to save it in browser then:

// This function is use to save data in browser 
function saveData() {
   localStorage.setItem("data", mainDiv.innerHTML);
}

// This function is used to show data in browser 
function showData(){
    mainDiv.innerHTML = localStorage.getItem("data");
}
showData();             //when the page loads, show the previously stored data
// NOTE: wherever any changes made the showData() function needs to call.  

// -----------------------------------------------------------------------------------------


IF YOU WANT TO CHECK THER IS ANY ELEMENT INSICDE ANY DIV
if(mainContainer.childElementCount<=1){
  emptyAlert.innerHTML="No Notes Right Now"
  console.log(emptyAlert);
  }
		iN the above code it will check if there is any element inside mainContainer or not

-------------------------------------------------------------------------------------------------

CONDITION TO SEARCH TAG NAME
 if(e.target.tagName=== "SPAN"){     //if clicked on "X" icon then delete the note
        e.target.parentElement.remove();
        saveData();   //called function to save data in browser
    }
-----------------------------------------------------------------------------------------------------

DATE LIKE: 2023/04/23
        function getCurrentDate(){
            var currentDate = new Date()
            var year= currentDate.getFullYear();
    var month= ('0' + (currentDate.getMonth()+1)).slice(-2);
    var day= (`0`+ currentDate.getDate()).slice(-2);

    var formattedDate = year + '/' +month +'/' + day;
    return formattedDate;    
}
-----------------------------------------------------------------------------------------------------------

TO GET EXACT TIME LIKE 04:29 PM
function printTime(){
            var currentDateTime = new Date()
            var hrs = ('0' + currentDateTime.getHours()).slice(-2)
            var mins = ('0' + currentDateTime.getMinutes()).slice(-2)

            var AmPm = (hrs>=12) ? 'PM' : 'AM';
            // Converts hrs from 24 hrs to 12 hrs 
            hrs = (hrs % 12 === 0) ? 12 : hrs % 12;
            return `${hrs} ${mins} ${AmPm}`;
        }

-----------------------------------------------------------------------------------------------------------

TO COMPARE STRICTLY
if(window.getComputedStyle(newNotes).getPropertyValue('display')==='none'){

        newNotes.style.display="flex"
        console.log('if');
        
      }
else{
    console.log('ds');
    
}


IF CLICKED ON BODY ONLY 
document.addEventListener('click', (event)=>{
  if(event.target !==leftRight.children[2]){
    leftRight.children[2].classList.remove('rotate45Deg') 

  }
})
-----------------------------------------------------------------------------------------

CHECK IF ANY CHILDREN IS INSIDE ANY SPECIFIC CLASS OR NOT
  if(e.target.closest('.mainContainer')){
//it will check e.target is inside maincontainer class or not
}
------------------------------------------------------------------------------------------

XMLHttprequest to API
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/api/data', true); // true for asynchronous
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Request completed successfully
    console.log(xhr.responseText);
  }
};
xhr.send();


TO SHOW COMMA IN NUMBERS
let number = 39238929294;
const f = new Intl.NumberFormat("en-us", {
  currency: "USD",
  style: "currency",
  notation: "compact"
});

let formattedNumber = f.format(number);
console.log(formattedNumber);