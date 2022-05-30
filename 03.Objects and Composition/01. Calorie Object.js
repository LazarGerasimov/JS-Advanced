function calorieObject(input) {

    let object = {};
  
    for (let i = 0; i < input.length; i = i + 2) {
      let property = input[i];
      let value = Number(input[i+1]);
  
      object[property] = value;
      
    }
  
    console.log(object)
  }
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
