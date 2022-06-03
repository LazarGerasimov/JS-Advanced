function solve() {

    function addFurniture(){
  
      let value = document.querySelector('textarea').value;
  
      if (value != '') {
        let array = JSON.parse(value);
        
        for (let object of array) {
          let tr = document.createElement('tr');
          let tdImage = document.createElement('td');
          let img = document.createElement('img');
          img.src = object.img;
          tdImage.appendChild(img);
          tr.appendChild(tdImage);  
    
          let tdName = document.createElement('td');
          let name = document.createElement('p');
          name.textContent = object.name;
          tdName.appendChild(name);
          tr.appendChild(tdName); 
    
          let tdPrice = document.createElement('td');
          let price = document.createElement('p');
          price.textContent = Number(object.price);
          tdPrice.appendChild(price);
          tr.appendChild(tdPrice); 
    
          let tdDecoration = document.createElement('td');
          let decoration = document.createElement('p');
          decoration.textContent = Number(object.decFactor);
          tdDecoration.appendChild(decoration);
          tr.appendChild(tdDecoration);
    
          let tdCheck = document.createElement('td');
          let check = document.createElement('input');
          check.type = 'checkbox';
          tdCheck.appendChild(check);
          tr.appendChild(tdCheck);
    
          document.querySelector('tbody').appendChild(tr);
        }
      }
    }
     
  
    function buy() {
      let allChecks = Array.from(document.querySelectorAll('tbody input')).filter(c => c.checked);
      let names = [];
      let tottalPrice = 0;
      let allDEcFactor = 0;
      for (let check of allChecks) {
        let furniture = check.parentElement.parentElement;
        names.push(furniture.querySelectorAll('p')[0].textContent);
        tottalPrice += Number(furniture.querySelectorAll('p')[1].textContent);
        allDEcFactor += Number(furniture.querySelectorAll('p')[2].textContent);
      }
      let decfactor = (allDEcFactor / allChecks.length);
      document.querySelectorAll('textarea')[1].value = 
        `Bought furniture: ${names.join(', ')}\r\nTotal price: ${tottalPrice.toFixed(2)}\r\nAverage decoration factor: ${decfactor}`;
    }
  
   document.querySelector('button').addEventListener('click', addFurniture);
   document.querySelectorAll('button')[1].addEventListener('click', buy);
  }