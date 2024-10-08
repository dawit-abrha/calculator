const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton   = document.querySelector("[data-delete]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");
const currentOperator = document.querySelector("[data-current-operator]");
let previousOperator;
allClearButton.addEventListener('click',()=>{
   previousOperand.innerText = '0';
   currentOperand.innerText = '';
   currentOperator.innerText = '';
   previousOperand = '';
});
deleteButton.addEventListener('click',()=>{
  const text = currentOperand.innerText;
  currentOperand.innerText = text.slice(0, -1);
});
equalsButton.addEventListener('click',()=>{
   if(currentOperand.innerText === '' || currentOperator.innerText === ''){
      return;
   }else ( compute(previousOperator))
  

   
});
    

numberButtons.forEach((button)=>{
   button.addEventListener('click',() =>{
      const number = button.innerText;
      if(number === '.' && currentOperand.innerText.includes('.')) return;
      currentOperand.innerText =  currentOperand.innerText + number;
      });

});

operatorButtons.forEach((operation)=>{
   operation.addEventListener('click',() =>{
       if( currentOperand.innerText !='' && 
         previousOperand.innerText === '0' && previousOperator === '-'){
         compute(previousOperator)
         currentOperator.innerText = operation.innerText;
         previousOperator = operation.innerText;
      }
      else if(currentOperand.innerText !='' && previousOperand.innerText != '0' &&
         currentOperator.innerText === ''){
            previousOperand.innerText =currentOperand.innerText;
            currentOperand.innerText = '';
            previousOperator = operation.innerText;
            currentOperator.innerText = previousOperator;
      }
      else if(currentOperand.innerText !='' && previousOperand.innerText === '0'){
        previousOperand.innerText = currentOperand.innerText;
         currentOperand.innerText = '';
         currentOperator.innerText = operation.innerText;
         previousOperator = operation.innerText;
      }else if(currentOperand.innerText !='' && previousOperand.innerText != '0'){
         compute(previousOperator)
         previousOperator = operation.innerText;
         currentOperator.innerText = previousOperator;
      }else if(currentOperand.innerText === '' && 
         previousOperand.innerText === '0' && operation.innerText === '-'){
            previousOperator = operation.innerText;
            currentOperator.innerText = previousOperator;
         }else if(currentOperand.innerText ==='' && operation.innerText != '' &&
            previousOperand.innerText != '0'){
            currentOperator.innerText = operation.innerText;
            previousOperator = operation.innerText;
         }
         

      });
   });



const compute = (operator)=>{
   const prev = parseFloat(previousOperand.innerText);
   const current = parseFloat(currentOperand.innerText);
   let result;
   switch(operator){
      case '+':
         result = prev + current;
         break;
         case '-':
            result = prev - current;
             break; 
             case '*':
               result = prev * current;
                break; 
                case '/':
                   result = prev / current;
                    break; 
                    case '%':
                       result = prev % current;
                        break;
                        case 'xy':
                           result = Math.pow(prev, current);
                            break;

   }
   previousOperand.innerText = result;
   currentOperand.innerText = '';
   currentOperator.innerText = '';
   
}