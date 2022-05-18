function timeToWalk(steps, length, speed) {

    let distanceMeters = steps * length; // 2400 meters
    let speedPerHour = speed * 1000; // 5000 m/h
    let speedPerMinute = speedPerHour / 60; // 83.333333333
    let speedPerSecond = speedPerMinute / 60; // 1.388888888888
      
    let breakTimeMinutes = Math.floor(distanceMeters / 500); // 4min 
    let breakTimeSeconds = breakTimeMinutes * 60;
    
    let secondsNeeded = distanceMeters / speedPerSecond; //1728
    let totalSeconds = secondsNeeded + breakTimeSeconds;
    
    let timerHours = Math.floor(totalSeconds / 3600); 
    if (timerHours < 10) {
      timerHours = `0${timerHours}`
    }
      
    let timerMinutes = Math.floor((totalSeconds - (timerHours * 3600)) / 60)
    if (timerMinutes < 10) {
      timerMinutes = `0${timerMinutes}`
    }
    
    let timerSeconds = Math.round(totalSeconds - (timerHours * 3600) - (timerMinutes * 60));
    if (timerSeconds < 10) {
      timerSeconds = `0${timerSeconds}`
    }
      
    console.log(`${timerHours}:${timerMinutes}:${timerSeconds}`)
    
      
    }