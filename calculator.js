const display = document.querySelector(".calc-display");
const buttons = document.querySelectorAll(".btn");
let input1 = "0";
let input2 = "";
let operand = "";
let answer = "";
display.innerText = "0";

//operation functions
add = (a, b) =>{
return a + b;
}

subtract = (a, b) =>{
    return a - b;
    }

divide = (a, b) => {
    if(b == "0"){
        return "Error";
    }else{
        return a / b;  
    }
} 

multiply = (a, b) => {
    return a * b;
} 

clear = () => {
    input1 = "0";
    input2 = "";
    operand = "";
    answer = "";
    display.innerText = "0";
}

toPercent = (a, b) => {
  if(b == ""){
      input1 = a/100;
      return input1;
  }else{
      input2 = b/100;
      return input2;
  }
}

negate = (a,b) => {
    if(b == ""){
        input1 = (a * -1);
        return (a * -1);
    }else{
        input2 = (a * -1);
        return (b * -1);
    }
}

operate = (a, b, operand) => {
    let result; 
    switch (operand){
        case "add":
          result = add(a,b);
          break;
        case "subtract":
          result = subtract(a,b);
          break
        case "multiply":
          result = multiply(a,b);
          break
        case "divide":
          result = divide(a,b); 
          break
        default:
            console.log(operand);
    }
        if(isNaN(result)){
            return "Error"
        }else{
            if(Number.isInteger(parseFloat(result))){
                return result.toFixed(0)
            }else{
                return result.toFixed(4)
            }
        }
} 


//seperate buttons into arrays
btnArr = Array.from(buttons);
numberBtns = btnArr.filter(btn => !isNaN(btn.innerText));
functionBtns = btnArr.filter(btn => isNaN(btn.innerText));

//add event listeners to function buttons
functionBtns.map((btn) => {
    btn.addEventListener("click", () => {
      if(btn.id == "equals" && input1 !== "" && input2 !== "" && operand !== ""){
          answer = operate(input1, input2, operand);
          display.innerText = answer;
          input1 = answer;
          input2 = "";
          operand = "";
      }else if(btn.id === "clear"){
          clear()
      }else if(btn.id === "percent"){
          answer = toPercent(input1, input2)
          display.innerText = answer;
      }else if (btn.id === "negate"){
          answer = negate(input1, input2)
          display.innerText = answer;
      }
      else{
          operand = btn.id;
      }
    })

     //UI Number Button Events
     btn.addEventListener("touchstart", () => {
        btn.classList.add("orange-hover")
    })
    btn.addEventListener("mouseenter", () => {
        btn.classList.add("orange-hover")
    })
    btn.addEventListener("touchend", () => {
        btn.classList.remove("orange-hover")
    })
    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("orange-hover")
    })
})


// add event listners to number buttons 
numberBtns.sort((a,b) => a.innerText - b.innerText);
numberBtns.map((btn) => {
    btn.addEventListener("click", () =>{
          display.innerText = btn.innerText;
          if(operand === ""){
          input1 = btn.innerText  
          }else{
          input2 = btn.innerText
          }
          console.log("a = "+input1)
          console.log("b = "+input2)   
        
    } )

    //UI Number Button Events
    btn.addEventListener("touchstart", () => {
        btn.classList.add("number-hover")
    })
    btn.addEventListener("mouseenter", () => {
        btn.classList.add("number-hover")
    })
    btn.addEventListener("touchend", () => {
        btn.classList.remove("number-hover")
    })
    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("number-hover")
    })
})


