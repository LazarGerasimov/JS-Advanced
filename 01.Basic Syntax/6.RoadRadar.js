function roadRadar(speed, area) {

    let status = "";
    let limit = 0;
  
    if (area == "motorway") {
        limit = 130; 
      
    } else if (area == "interstate"){
        limit = 90;
      
    } else if (area == "city") {
        limit = 50;
      
    } else if (area == "residential"){
        limit = 20;
    }
  
    let difference = speed - limit; 
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
       if (difference <= 20) {
          status = "speeding";
       } else if (difference > 20 && difference <= 40) {
          status = "excessive speeding";
       } else if (difference > 40) {
          status = "reckless driving";
       }
    }
  
    if (speed > limit) {
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
    
  }