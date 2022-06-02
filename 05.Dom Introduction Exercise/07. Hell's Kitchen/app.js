function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
  
    function onClick() {
       //store all data in an object with nested objects
       let obj = {};
  
       //get user input via DOM
       let input = document.querySelector('#inputs textarea').value;
  
       //user input is in JSON, so easily convert it to array of strings
       let convInput = JSON.parse(input);
  
       /*go through each string(restaurant) and export the data out into variables, then assign those througout objects. Obj structure is:
       obj (this is the collection){
             restaurant {
                workers {
                   workerName:salary (number)
                }
                avgSalary: salary (number)
                bestSalary: salary (number)
             }
          }
       */
       for (const rest of convInput) {
          let [restName, workerDetails] = rest.split(' - ');
  
          let workers = workerDetails.split(', ');
  
          for (const workerAndSalary of workers) {
             let [worker, salary] = workerAndSalary.split(' ');
             salary = Number(salary);
  
             //if restaurant wasn't added yet to the 'obj' collection - add it
             if (!obj.hasOwnProperty(restName)) {
                obj[restName] = {};
                obj[restName]['workers'] = {};
                obj[restName]['avgSalary'] = 0;
                obj[restName]['bestSalary'] = 0;
             }
  
             obj[restName].workers[worker] = salary;
             obj[restName].bestSalary = Number(Object.values(obj[restName].workers).reduce((a, b) => a > b ? a : b));
  
             obj[restName].avgSalary = Number(Object.values(obj[restName].workers).reduce((a,b)=>a+b)) / Object.values(obj[restName].workers).length;
          }
  
       }
  
       //sort restaurants by descending by average salary, so that we can easily get the highest one
       let restArray = Object.keys(obj);
       restArray.sort((a, b) => obj[b].avgSalary - obj[a].avgSalary);
       let bestRest = restArray[0];
  
       //sort workers by descending
       let workerEntries = Object.keys(obj[bestRest].workers);
  
       workerEntries.sort((a, b) => obj[bestRest].workers[b] - obj[bestRest].workers[a]);
  
  
       //setup the 2 outputs
       let output = `Name: ${bestRest} Average Salary: ${obj[bestRest].avgSalary.toFixed(2)} Best Salary: ${obj[bestRest].bestSalary.toFixed(2)}`
  
  
       let output2 = [];
  
       for (const worker of workerEntries) {
          output2.push(`Name: ${worker} With Salary: ${obj[bestRest].workers[worker]}`);
       }
       output2 = output2.join(' ');
  
       //DOM manipulation
       document.querySelector('#bestRestaurant p').textContent = output;
       document.querySelector('#workers p').textContent = output2;
    }
 }