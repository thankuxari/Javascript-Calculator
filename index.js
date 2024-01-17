
//Set the First Number
let firstnum = null;  

//Set the Second Number
let secondnum = null;

//Counter for which number we are currently inputting
let currentInput = 1;
let operator = '';

function updateDisplay(event){
    
    const display = document.getElementById('calculator-screen');
    const keys = document.getElementById('calculator-keys');

    //Get key input
    keys.addEventListener('click',(event)=>{

    const target = event.target;
    
    //If user clicks something other than the buttons exit function
    if(!target.matches('button')){
        return;
    }

    //Get the operator
    if(target.classList.contains('operator')){
        console.log('operator',target.value);
        operator = target.value;
        currentInput = 2;
        display.value = '';
        return;
    }


    //Check if there is a decimal number
    if(target.classList.contains('decimal')){
        console.log('decimal',target.value);
        display.value += '.';
        return;
    }
    
    //Clear the input + output
    if(target.classList.contains('all-clear')){
        console.log('all clear',target.value);
        display.value = '0'
        currentInput = 1;
        firstnum = null;
        secondnum = null;
        operator = '';
        return;
    }

    //Update the display 
    display.value === '0'? display.value = target.value : display.value += target.value;
    
    //Get the first nubmer
    if(currentInput === 1){
        firstnum = parseFloat(display.value);
    }else if(currentInput === 2){
        //Get the second number
        secondnum = parseFloat(display.value);
    }

    if(target.classList.contains('equal-sign')){
        if(!isNaN(firstnum) && !isNaN(secondnum)){
            calculation(firstnum,secondnum,operator,display);
        }else{
            display.value = 0;
            alert('Error');
        }
    }
    
    console.log('this is first num',firstnum);
    console.log('this is second num',secondnum);
    console.log('digits',target.value);
    });
}

updateDisplay();

function calculation(num1,num2,operation,display){

    if(operation === '+'){
        const result = num1 + num2;
        display.value = result;
        console.log('Result:', result);
    }
    if(operation === "-"){
        const result = num1 - num2;
        display.value = result;
        console.log('Result:',result);
    }
    if(operation === "*"){
        const result = num1 * num2;
        display.value = result;
        console.log('Result:',result);
    }
    if(operation === "/"){
        if(secondnum !== 0){
        const result = num1 / num2;
        display.value = result;
        console.log('Result:',result);
        }else{
            display.value = 'Error';
        }
    }
}