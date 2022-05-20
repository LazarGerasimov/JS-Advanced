function cookingNumbers(startPoint, op1, op2, op3, op4, op5) {

    let newArr = [startPoint, op1, op2, op3, op4, op5];
     let number = Number(startPoint);
     newArr.shift();
   
     for (let i = 0; i < newArr.length; i++) {
         let command = newArr[i];
             if (command === "chop") {
             number = number / 2;
             console.log(number);
             } else if (command === "dice") {
             number = Math.sqrt(number);
             console.log(number);
             } else if (command === "spice") {
             number = number + 1;
             console.log(number);
             } else if (command === "bake") {
             number = number * 3;
             console.log(number);
             } else if (command === "fillet") {
             number = number - number * 0.20; 
             console.log(number);
             }
     }
   
   }