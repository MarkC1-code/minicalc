//DOM ids
function $(id) {
  return document.getElementById(id);
} 

alert('OPEN THE CALCULATOR FIRST!')
//operators function
function operator(param){
  input0.innerText = param
}
//specil operators assignment function
function percentage(){
  percent = "%"
  input1.innerText += percent
}
//number assigning function
function numb(param) {
  if (input1.innerText.length > 9) {
    alert()
  }
  else if ( input0.innerText == "+" || input0.innerText == "*" || input0.innerText == "-" || input0.innerText == "/" ){
    input2.innerText += param
  } else {
    input1.innerText += param}
}
 
 // Global state for toggle
let isOpen = false;

function toggleInput() {
    const inputDiv = $("input"); // Using your custom DOM function
    const toggleIcon = $("toggleIcon"); // Get toggle icon element

    if (isOpen) {
        inputDiv.style.transform = 'translateY(-100%)';
        toggleIcon.innerHTML = '&#9660;'; // Downward arrow
    } else {
        inputDiv.style.transform = 'translateY(0)';
        toggleIcon.innerHTML = '&#9650;'; // Upward arrow
    }

    isOpen = !isOpen; // Toggle state
}

//deleting function
function del() {
  input0.innerText = '';
  input1.innerText = '';
  input2.innerText = '';
  calc.innerHTML =''
}
//equal sign function
function equalsTo() {
  const percentagesed = true

  if(input0.innerText === "+"){
    calc.innerHTML = parseInt(input1.innerText)  + parseInt(input2.innerText)
  } else if (input0.innerText === "-"){
    calc.innerHTML = parseInt(input1.innerText)  - parseInt(input2.innerText) 
  } else if (input0.innerText === "*"){
      calc.innerHTML = parseInt(input1.innerText)  * parseInt(input2.innerText) 
  }else if (input0.innerText === "/"){
      calc.innerHTML = parseInt(input1.innerText)  / parseInt(input2.innerText) 
  } else if (percentagesed){
    let percentages = parseInt(input1.innerText) / 100
    calc.innerHTML = percentages
    percentagesed = true
  }
} 